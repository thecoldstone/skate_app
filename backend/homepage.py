from flask_restful import Resource
from flask import request

import db


class All(Resource):
    def get(self):
        return {'spots': db.spots_geojson}

class Events(Resource):
    def get(self):
        return {'result': 'Ok'}

class Places(Resource):
    def get(self):
        return {'result': 'Ok'}

class Videos(Resource):
    def get(self):
        return {'result': 'Ok'}

class Photos(Resource):
    def get(self):
        return {'result': 'Ok'}