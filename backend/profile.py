from flask_restful import Resource
from flask import request

import db

my_spots = ["venice", "another", "test"]
my_spots_info = {}
my_spots_videos = {
    "venice" : [
        {
            "image": "https://picsum.photos/id/758/150/85",
            "url":"https://www.youtube.com/watch?v=MlcRss1uzS0"
        },
        {
            "image": "https://picsum.photos/id/770/150/85",
            "url":"https://www.youtube.com/watch?v=MlcRss1uzS0"
        },
        {
            "image": "https://picsum.photos/id/769/150/85",
            "url":"https://www.youtube.com/watch?v=MlcRss1uzS0"
        }
    ],
    "another" : [
        {
            "image": "https://picsum.photos/id/768/150/85",
            "url":"https://www.youtube.com/watch?v=MlcRss1uzS0"
        },
        {
            "image": "https://picsum.photos/id/767/150/85",
            "url":"https://www.youtube.com/watch?v=MlcRss1uzS0"
        }
    ],
    "test" : [
        {
            "image": "https://picsum.photos/id/766/150/85",
            "url":"https://www.youtube.com/watch?v=MlcRss1uzS0"
        },
        {
            "image": "https://picsum.photos/id/765/150/85",
            "url":"https://www.youtube.com/watch?v=MlcRss1uzS0"
        },
        {
            "image": "https://picsum.photos/id/764/150/85",
            "url":"https://www.youtube.com/watch?v=MlcRss1uzS0"
        },
        {
            "image": "https://picsum.photos/id/760/150/85",
            "url":"https://www.youtube.com/watch?v=MlcRss1uzS0"
        },
        {
            "image": "https://picsum.photos/id/757/150/85",
            "url":"https://www.youtube.com/watch?v=MlcRss1uzS0"
        }
    ]
}

user_info = {
    "image" : "https://picsum.photos/id/1005/100/100",
    "email" : "myemail@gmail.com",
    "name" : "James Kukold",
    "pass" : "123",
    "tiktok" : "khaby.lame",
    "facebook" : "khabylameofficial00",
    "instagram" : "khaby00",
    "my_spots" : my_spots,
    "my_spots_info" : my_spots_info,
    "my_spots_videos" : my_spots_videos
}

class Profile(Resource):
    def post(self):
        return {
            'ERROR': "ONLY GET REQUESTS!"
        }
    
    def get(self):
        for spot in my_spots:
            # spot_info = db.get_spot(spot)
            # if spot_info not in my_spots_info:
            my_spots_info[spot] = db.get_spot(spot)
        return user_info


class EditProfile(Resource):
    def post(self):
        json_data = request.get_json(force=True)

        if json_data["pass"] != json_data["rep_pass"]:
            return {'ERROR': 'PASSWORD AND REPEAT PASSWORD ARE NOT SAME!'}
        
        if json_data["pass"] != "":
            user_info["pass"] = json_data["pass"]

        if json_data["email"] != "":
            user_info["email"] = json_data["email"]

        if json_data["name"] != "":
            user_info["name"] = json_data["name"]

        if json_data["instagram"] != "":
            user_info["instagram"] = json_data["instagram"]
        
        if json_data["facebook"] != "":
            user_info["facebook"] = json_data["facebook"]
        
        if json_data["tiktok"] != "":
            user_info["tiktok"] = json_data["tiktok"]

        print(user_info)

        return json_data
    
    def get(self):
        return user_info