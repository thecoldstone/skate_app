"""
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
"""

from flask_restful import Resource
from flask import request

import db 

class HomepageContent(Resource):
    def post(self):
        json_data = request.get_json(force=True)

        print(json_data)

        content = json_data["content"]

        if json_data["userId"] != None:
            return {'result': db.get_homepage_contet(content, userId=json_data["userId"])}
        else:
            return {'result': db.get_homepage_contet(content)}

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

class LikeItem(Resource):
    def post(self):
        json_data = request.get_json(force=True)

        item = db.get_item(json_data["itemId"])
        if item is None:
            return
        
        if json_data["userId"] is None:
            return

        item["isFavourite"] = True
        
        db.users[json_data["userId"]]["favourite"].append(int(item["id"]))

        return {'result': 'ok'}

class DislikeItem(Resource):
    def post(self):
        json_data = request.get_json(force=True)

        item = db.get_item(json_data["itemId"])
        if item is None:
            return
        
        if json_data["userId"] is None:
            return
        
        db.users[json_data["userId"]]["favourite"].remove(int(item["id"]))
        item["isFavourite"] = False

        return {'result': 'ok'}

class AddItem(Resource):
    def post(self):
        json_data = request.get_json(force=True)

        print(json_data)
        respond_data = {}
        
        try:
            if json_data["itemType"] == "event":
                respond_data = db.add_event(
                    json_data["title"], 
                    json_data["description"], 
                    json_data["address"],
                    json_data["lng"],
                    json_data["lat"]
                )
            elif json_data["itemType"] == "spot":
                respond_data = db.add_spot(
                    json_data["title"], 
                    json_data["description"], 
                    json_data["address"],
                    json_data["lng"],
                    json_data["lat"]
                )
        except KeyError:
            return

        return {'result': respond_data}
