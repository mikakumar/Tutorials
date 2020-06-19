import datetime 
from flask import Flask, render_template

app=Flask(__name__)

@app.route("/")
def index():
	now = datetime.datetime.now()
	newyear = now.month == 1 and now.day == 1
	time = now.strftime("%Y/%m/%d, %H:%M:%S")
	return render_template("newyear.html", newyear=newyear, time=time)