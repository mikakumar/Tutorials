import time
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def index():
	return render_template("list.html")

@app.route("/posts", methods=["POST"])
def post():
	start = int(request.form.get("start") or 0)
	end = int(request.form.get("end") or (start+9))

	data = []
	for i in range(start, end+1):
		data.append(f"Post #{i}")

	time.sleep(1)

	return jsonify(data)