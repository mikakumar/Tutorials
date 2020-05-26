from flask import Flask, render_template, request
app=Flask(__name__)



@app.route("/")
def index():
	return render_template("index.html")

texts = ["text 1", "text 2", "text 3"]

@app.route("/first", methods=["GET"])
def first():
	return texts[0]

@app.route("/second",methods=["GET"])
def second():
	return texts[1]

@app.route("/third",methods=["GET"])
def third():
	return texts[2]