from flask_restful import Resource
from flask import request

class Profile(Resource):
    def post(self):
        return {
            'login': 'xkorni02',
            'name': 'Oleksii Korniienko',
            'group': 3,
        }
    
    def get(self):
        return {
            'login': 'xkorni01231232',
            'name': 'Oleksihvluyhb',
            'group': 3,
        }


class EditProfile(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        return json_data
    
    def get(self):
        return {
            'shit': 'shit'
        }