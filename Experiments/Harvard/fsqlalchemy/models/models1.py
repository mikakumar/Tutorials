class Flights: 
	def __init__(self, origin, destination, duration):
		self.origin = origin
		self.destination = destination
		self.duration = duration

	def print_info(self):
		print(f"Flight origin: {self.origin}")
		print(f"Flight destination: {self.destination}")
		print(f"Flight duration: {self.duration}")


class Passengers: 
	def __init__(self, name, flight_id):
		self.name = name
		self.flight_id =flight_id

	def print_info(self):
		print(f"Passenger name: {self.name}")
		print(f"Flight ID: {self.flight_id}")