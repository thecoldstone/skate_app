from flask_restful import Resource
from flask import request

import db

class Login(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        for user_id, user in db.users.items():
            if (user["email"] == json_data["email"] and
                user["pass"] == json_data["password"]):
                print(user_id)
                db.actual_user = user_id
                return {"id": user_id}
        else:
            return {"error": "Given email or password is incorrect"}
        
    
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