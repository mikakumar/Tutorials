from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def index():
	return render_template("currency.html")

@app.route("/currency", methods=["POST"])
def convert():
	currency = request.form.get("currency")
	res = requests.get("http://api.fixer.io/latest", params ={"base":"USD", "symbols":currency})

	if res.status_code!=200:
		return jsonify({"success":False})

	data=res.json()
	if currency not in data["rates"]:
		return jsonify({"success":False})

	return jsonify({"success": True, "rate": data["rates"][currency]})

