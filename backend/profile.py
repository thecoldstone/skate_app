from flask_restful import Resource
from flask import request

import copy
import db

class Profile(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        actual_user = db.get_user(json_data["id"])

        for spot in actual_user["my_spots"]:
            actual_user["my_spots_info"][spot] = copy.deepcopy(db.get_spot(spot))
            temp_videos = []
            for video in actual_user["my_spots_info"][spot]["videos"]:
                if video["user_id"] == int(json_data["id"]):
                    # print("need_to_add : " + str(video))
                    temp_videos.append(video)
            actual_user["my_spots_info"][spot]["videos"] = copy.deepcopy(temp_videos)
        
        # print(db.get_spot(0))
        # print(actual_user["my_spots_info"][0])
        return actual_user
    
    def get(self):
        return {"ERROR":"POST REQUEST ONLY!"}


class EditProfile(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        if json_data["id"] == "actual_user":
            json_data["id"] = db.actual_user
        actual_user = copy.deepcopy(db.get_user(json_data["id"]))

        if "pass" in json_data and "rep_pass" in json_data and json_data["pass"] != json_data["rep_pass"]:
            return {'ERROR': 'PASSWORD AND REPEAT PASSWORD ARE NOT SAME!'}
        
        if "pass" in json_data and json_data["pass"] != "":
            actual_user["pass"] = json_data["pass"]

        if "email" in json_data and json_data["email"] != "":
            actual_user["email"] = json_data["email"]

        if "name" in json_data and json_data["name"] != "":
            actual_user["name"] = json_data["name"]

        if "instagram" in json_data and json_data["instagram"] != "":
            actual_user["instagram"] = json_data["instagram"]
        
        if "facebook" in json_data and json_data["facebook"] != "":
            actual_user["facebook"] = json_data["facebook"]
        
        if "tiktok" in json_data and json_data["tiktok"] != "":
            actual_user["tiktok"] = json_data["tiktok"]

        if "spot_id" in json_data:
            print(json_data["spot_id"])
            if int(json_data["spot_id"]) not in actual_user["my_spots"]:
                actual_user["my_spots"].append(int(json_data["spot_id"]))
            else:
                actual_user["my_spots"].remove(int(json_data["spot_id"]))

        db.set_user(json_data["id"], actual_user)

        return actual_user
    
    def get(self):
        return {"ERROR":"POST REQUEST ONLY!"}