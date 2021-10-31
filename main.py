from flask import Flask, Response
from flask_cors import CORS
from flask_socketio import *

# Set up the application
app = Flask(__name__)
CORS(app)

socketio = SocketIO(app, cors_allowed_origins="*")

# Routes
@app.route("/")
def home_page():
    return Response("", 200, mimetype="application/json")


@socketio.on("connect")
def connected():
    print("Connected")


@socketio.on("disconnect")
def disconnected():
    print("Disconnected")


if __name__ == "__main__":
    socketio.run(app, debug=True)
