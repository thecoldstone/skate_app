from flask_restful import Resource
from flask import request

import copy
import db

class Profile(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        user = db.get_user(json_data["id"])

        for spot in user["spots"]:
            user["spot_info"][spot] = copy.deepcopy(db.get_spot(spot))
            temp_videos = []
            for video in user["spot_info"][spot]["videos"]:
                if video["user_id"] == int(json_data["id"]):
                    temp_videos.append(video)
            user["spot_info"][spot]["videos"] = copy.deepcopy(temp_videos)

        for friend in user["friends"]:
            user["friend_info"][friend] = copy.deepcopy(db.get_user(friend))

        if "user_id" in json_data:
            user["is_in_friends_list"] = int(json_data["id"]) in db.users[int(json_data["user_id"])]["friends"]

        return user


class EditProfile(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        user = copy.deepcopy(db.get_user(json_data["id"]))

        if json_data.get("pass") != json_data.get("rep_pass"):
            return {'error': 'PASSWORD AND REPEAT PASSWORD ARE NOT SAME!'}
        
        for key, value in json_data.items():
            if key == 'spot_id':
                if int(json_data["spot_id"]) not in user["spots"]:
                    user["spots"].append(int(json_data["spot_id"]))
                else:
                    user["spots"].remove(int(json_data["spot_id"]))
            elif key == 'friend_id':
                if int(json_data["friend_id"]) not in user["friends"]:
                    user["friends"].append(int(json_data["friend_id"]))
                else:
                    user["friends"].remove(int(json_data["friend_id"]))
            elif key in user and value:
                user[key] = value

        db.set_user(json_data["id"], user)

        return {'result': 'OK'}
