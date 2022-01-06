"""
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
"""

from flask_restful import Resource
from flask import request

import db


class All(Resource):
    def get(self):
        return {'result': db.get_homepage_contet("all")}

class Events(Resource):
    def get(self):
        return {'result': db.get_homepage_contet("events")}

class Event(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        
        event = db.get_event(json_data["eventId"])

        return {'result': event}

class Spots(Resource):
    def get(self):
        return {'result': db.get_homepage_contet("spots")}

class Videos(Resource):
    def get(self):
        return {'result': db.get_homepage_contet("videos")}

class Photos(Resource):
    def get(self):
        return {'result': db.get_homepage_contet("photos")}

class JoinEvent(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        
        event = db.get_event(json_data["eventId"])
        event['properties']['members'] += 1
        event['properties']['participants'].append(json_data["userId"])

        print(event['properties']['participants'])

        return {'result': 'ok'}

class LeaveEvent(Resource):
    def post(self):
        json_data = request.get_json(force=True)

        event = db.get_event(json_data["eventId"])
        event['properties']['members'] -= 1
        event['properties']['participants'].remove(json_data["userId"])

        return {'result': 'ok'}