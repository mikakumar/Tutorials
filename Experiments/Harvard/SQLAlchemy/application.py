import os

from flask import Flask, render_template, request
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

app = Flask(__name__)

engine = create_engine(os.getenv("DATABASE_URL"))
db = scoped_session(sessionmaker(bind=engine))

@app.route("/")
@app.route("/flights")
def list():
	flights = db.execute("SELECT * FROM flights").fetchall()
	return render_template("flights.html", flights=flights)

@app.route("/flights/<int:flight_id>")
def listone():
	flight = db.execute("SELECT * FROM flights WHERE id = :id", {"id": flight_id})
	if flight is None: 
		return "No such flight exists"
	passengers = db.execute("SELECT * FROM passengers WHERE flight_id = :flight_id", {"flight_id": flight_id})
	return render_template("flight.html", flight=flight, passengers=passengers)

@app.route("/book" methods=["GET", "POST"])
def book():
	if request.method == "GET":
		return "Please submit the form instead."
	try: 
		flight_id = int(request.form.get("flight_id"))
	except ValueError:
		return "Flight does not exist"

	if db.execute("SELECT * FROM flights WHERE id = :id", {"id": flight_id}).rowcount() == 0:
		return "Flight does not exist"
	db.execute("INSERT INTO passengers(name, flight_id) VALUES(:name, :flight_id)", {"name": name, "flight_id": flight_id})
	db.commit()
	return "Success!"