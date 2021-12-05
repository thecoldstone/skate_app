"""
    Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
"""

from flask import Flask, Response, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO, emit, send
from backend import create_app
import db

# Set up the application
app = create_app()
CORS(app, origins=["http://localhost:3000"])

socketio = SocketIO(app, cors_allowed_origins="*", async_mode='eventlet')

@socketio.on("connect")
def connected():
    print('Connected')

@socketio.on("disconnect")
def disconnected():
    print("Disconnected")

@socketio.on('get_comments')
def handle_my_custom_event(spot_id):
    emit('message', db.spots[int(spot_id)]["comments"])

if __name__ == "__main__":
    socketio.run(app, debug=True)
