from flask_restful import Resource
from flask import request

spot_info = [
    {
        'id': 1,
        'name': 'Skejtpark 1123',
        'comments': [
            {'userId': 1, 'userName': '123123', 'comment': 'asdasdasd'},
            {'userId': 2, 'userName': '12312123', 'comment': 'asasdasd'},
            {'userId': 1, 'userName': '12113123', 'comment': 'asdas123123dasd'},
            {'userId': 3, 'userName': '121231231233123', 'comment': '!@#!@#!@#asdasdasd'},
        ]
    },
    {
        'id': 2,
        'name': 'Skejtpark 0001',
        'comments': [
            {'userId': 2, 'userName': 'asd', 'comment': 'asdasdasd'},
            {'userId': 1, 'userName': 'asdasd', 'comment': 'asasdasd'},
            {'userId': 1, 'userName': 'asdasdasdasd', 'comment': 'asdas123123dasd'},
            {'userId': 5, 'userName': 'asdasdasd111', 'comment': '!@#!@#!@#asdasdasd'},
        ]
    },
]

class Spot(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        
        for spot in spot_info:
            if int(spot['id']) == int(json_data['id']):
                return spot
        
        return None

class Comment_add(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        
        for spot in spot_info:
            if int(spot['id']) == int(json_data['id']):
                spot['comments'].append(json_data['comment'])

        return {'result': "Ok"}
