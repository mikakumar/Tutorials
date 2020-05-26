from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
@app.route("/hello")
def index():
	return render_template("index.html")

@app.route("/<string:name>")
def nindex(name):
	return render_template("iname.html", name=name)