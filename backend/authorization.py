from flask_restful import Resource
from flask import request

import db

class Login(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        db.actual_user = json_data["user_id"]
        return {"user_id":db.actual_user}
    
    def get(self):
        return {"user_id" : db.actual_user}


class SignUp(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        return {"TEMP":"TEMP"}
    
    def get(self):
        return {"ERROR":"POST REQUEST ONLY!"}


class Logout(Resource):
    def get(self):
        db.actual_user = -1
        return {"user_id" : db.actual_user}