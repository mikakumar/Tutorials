from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def index():
	return render_template("postsubmit.html")

@app.route("/hello", methods=["GET", "POST"])
def hello():
	if request.method == "GET":
		return "Please submit the form instead."
	else:
		name = request.form.get("name");
	return render_template("postname.html", name=name)

@app.route("/<string:name>", methods=["GET"])
def getno(name):
	return "Please submit the form instead."
