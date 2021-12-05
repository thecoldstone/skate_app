"""
    Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
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

@socketio.on('send_comments')
def get_comments(spot_id):
    emit('get_comments', db.spots[int(spot_id)]["comments"])

@socketio.on('send_spot_misc')
def get_spot_misc(spot_id):
    spot = db.spots[int(spot_id)]
    misc_data = {
        "videos_count": len(spot["videos"]),
        "people_count": len(set([comment["userId"] for comment in spot["comments"]]))
    }
    emit('get_spot_misc', misc_data)

@socketio.on('send_is_favourite')
def get_is_favourite(data):
    user = db.get_user(data["user_id"])
    is_favourite = int(data["spot_id"]) in user["spots"]
    emit('get_is_favourite', is_favourite)

if __name__ == "__main__":
    socketio.run(app, debug=True)
