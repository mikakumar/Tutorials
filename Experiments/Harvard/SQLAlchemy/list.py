import os

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

engine = create_engine(os.getenv("DATABASE_URL"))
db = scoped_session(sessionmaker(bind=engine))

def main():
	 flights = db.execute("SELECT origin, destination, duration FROM flights").fetchall()
	 for flight in flights:
	 	print(f"{flight.origin} to {flight.destination}, {flight.duration} minutes")

	 flight_id = int(input("\nFlight ID:"))
	 flight = db.execute("SELECT origin, destination, duration FROM flights WHERE id=:id", {"id":id}).fetchone()
	 if flight is None:
	 	print("No such flight available")

	 print(f"{flight.origin} to {flight.destination}, {flight.duration} minutes")
	 db.commit()

if __name__ == "__main__":
	main()
