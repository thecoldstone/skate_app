from flask import Flask, Response, jsonify
from flask_cors import CORS
from flask_socketio import *
from backend.profile import get_profile_info

# Set up the application
app = Flask(__name__)
CORS(app)

socketio = SocketIO(app, cors_allowed_origins="*")

# Routes
@app.route("/")
def home_page():
    return Response("", 200, mimetype="application/json")


@app.route("/profile")
def profile():
    return get_profile_info()
    # return Response({"NikitaLox":"153", "Syrozhka_lox":"69"}, 200, mimetype="application/json")


@socketio.on("connect")
def connected():
    print("Connected")


@socketio.on("disconnect")
def disconnected():
    print("Disconnected")


if __name__ == "__main__":
    socketio.run(app, debug=True)
