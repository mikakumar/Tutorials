import os

from flask import Flask, render_template, request
from model import *

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

app.config["SQLALCHEMY_DATABASE_URI"]=os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False
db.init_app(app)

@app.route("/")
@app.route("/flights")
def list():
	flights=Flight.query.all()
	return render_template("flights.html", flights=flights)


@app.route("/flights/<int:flight_id>")
def listone():
	flight=Flight.query.get(flight_id)
	if flight is None: 
		return "No such flight exists"
	passengers=Passengers.query.filter(flight_id).all()
	return render_template("flight.html", flight=flight, passengers=passengers)

#return jsonify({
	#"origin": flight.origin ...
#})

@app.route("/book", methods=["GET", "POST"])
def book():
	if request.method == "GET":
		return "Please submit the form instead"
	try: 
		flight_id=int(request.form.get(flight_id))
	except ValueError:
		return "Flight does not exist"
	if Flight.query.get(flight_id) == 0:
		return "Flight does not exist"
	name = String(request.form.get(name))
	passenger = Passengers(name=name, flight_id=flight_id)
	db.session.add(flight)

	db.session.commit();

if __name__ == "__main__":
	with app.app_context():
		main()
