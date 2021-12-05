from flask_restful import Resource
from flask import request

import db

class Login(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        for user_id, user in db.users.items():
            if (user["email"] == json_data["email"] and
                user["pass"] == json_data["password"]):
                return {"id": user_id}
        else:
            return {"error": "Given email or password is incorrect"}


class SignUp(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        return {"TEMP":"TEMP"}
