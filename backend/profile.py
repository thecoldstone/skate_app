from flask_restful import Resource
from flask import request

import db

class Profile(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        actual_user = db.get_user(json_data["id"])

        for spot in actual_user["my_spots"]:
            actual_user["my_spots_info"][spot] = db.get_spot(spot)
        return actual_user
    
    def get(self):
        return {"ERROR":"POST REQUEST ONLY!"}


class EditProfile(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        actual_user = db.get_user(json_data["id"])

        if json_data["pass"] != json_data["rep_pass"]:
            return {'ERROR': 'PASSWORD AND REPEAT PASSWORD ARE NOT SAME!'}
        
        if json_data["pass"] != "":
            actual_user["pass"] = json_data["pass"]

        if json_data["email"] != "":
            actual_user["email"] = json_data["email"]

        if json_data["name"] != "":
            actual_user["name"] = json_data["name"]

        if json_data["instagram"] != "":
            actual_user["instagram"] = json_data["instagram"]
        
        if json_data["facebook"] != "":
            actual_user["facebook"] = json_data["facebook"]
        
        if json_data["tiktok"] != "":
            actual_user["tiktok"] = json_data["tiktok"]

        db.set_user(json_data["id"], actual_user)

        return actual_user
    
    def get(self):
        return {"ERROR":"POST REQUEST ONLY!"}