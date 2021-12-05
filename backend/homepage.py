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

class Spots(Resource):
    def get(self):
        return {'result': db.get_homepage_contet("spots")}

class Videos(Resource):
    def get(self):
        return {'result': db.get_homepage_contet("videos")}

class Photos(Resource):
    def get(self):
        return {'result': db.get_homepage_contet("photos")}