from flask_restful import Resource
from flask import request

import db

class Spot(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        
        for spot_id in db.spots:
            if int(spot_id) == int(json_data['id']):
                return db.get_spot(spot_id)
        
        return None

class Comment_add(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        print(json_data)
        
        for spot_id in db.spots:
            if int(spot_id) == int(json_data['id']):
                db.get_spot(spot_id)['comments'].append(json_data['comment'])

        return {'result': "Ok"}
