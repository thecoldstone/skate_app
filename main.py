from flask import Flask, Response, jsonify
from flask_cors import CORS
from flask_socketio import *
from backend import create_app

# Set up the application
app = create_app()
CORS(app)

socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on("connect")
def connected():
    print("Connected")


@socketio.on("disconnect")
def disconnected():
    print("Disconnected")


if __name__ == "__main__":
    socketio.run(app, debug=True)
