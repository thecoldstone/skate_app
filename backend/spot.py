"""
    Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
"""

from flask_restful import Resource
from flask import request
import re

import db

class Spot(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        for spot_id in db.spots:
            if int(spot_id) == int(json_data['id']):
                return db.get_spot(spot_id)
        
        return {'error': 'Spot ' +  json_data['id'] + ' not found'}


class Comment_add(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        
        for spot_id in db.spots:
            if int(spot_id) == int(json_data['id']):
                json_data['comment']['userName'] = db.users[json_data['comment']['userId']]["name"]
                db.get_spot(spot_id)['comments'].append(json_data['comment'])

        return {'result': "Ok"}


class Edit_spot(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        print(json_data)

        if "spot_id" in json_data:
            if "video_id" in json_data and "user_id" in json_data: # remove video
                spot_id = int(json_data["spot_id"])
                video_id = int(json_data["video_id"])
                user_id = int(json_data["user_id"])
                res = get_user_video_by_id(spot_id, video_id, user_id)
                if res:
                    db.get_spot(spot_id)["videos"].remove(res)

            if "video_url" in json_data and "user_id" in json_data: # add video
                video_id = get_video_id(json_data["video_url"])
                if not video_id:
                    return {'error': 'Given URL is not URL to Youtube video'}
                
                spot_id = int(json_data["spot_id"])
                user_id = int(json_data["user_id"])
                new_video = {
                    "user_id": user_id,
                    "url": 'https://www.youtube.com/embed/' + video_id
                }
                db.get_spot(spot_id)["videos"].append(new_video)

        return {'result': "Ok"}


def get_video_id(video_url):
    regex = re.compile(r'(https?://)?(www\.)?(youtube|youtu|youtube-nocookie)\.'
                        '(com|be)/(watch\?v=|embed/|v/|.+\?v=)?(?P<id>[A-Za-z0-9\-=_]{11})')
    match = regex.search(video_url)
    if match:
        return match.group('id')

    return None


def get_user_video_by_id(spot_id, video_id, user_id):
    user_video_counter = -1
    for video in db.get_spot(spot_id)["videos"]:
        if video["user_id"] == user_id:
            user_video_counter += 1
        if user_video_counter == video_id:
            return video
    return None