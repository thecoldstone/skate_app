"""
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
"""

import os

from flask import Flask, render_template

from backend.homepage import All, Events, Spots, Videos, Photos, JoinEvent, LeaveEvent
from backend.profile import Profile, EditProfile
from backend.spot import Spot, Comment_add, Edit_spot
from backend.authorization import Login

def add_api_resources(app):
    from flask_restful import Api
    api = Api(app, prefix='/api')

    api.add_resource(All, '/all')
    api.add_resource(Events, '/events')
    api.add_resource(Spots, '/spots')
    api.add_resource(Videos, '/videos')
    api.add_resource(Photos, '/photos')
    api.add_resource(Profile, '/profile')
    api.add_resource(JoinEvent, '/joinEvent')
    api.add_resource(LeaveEvent, '/leaveEvent')

    api.add_resource(EditProfile, '/editProfile')
    api.add_resource(Spot, '/spot')
    api.add_resource(Edit_spot, '/editSpot')
    api.add_resource(Comment_add, '/commentAdd')
    api.add_resource(Login, '/login')


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__,
                template_folder='../client/public',
                instance_relative_config=True)

    # ensure the instance folder exists
    os.makedirs(app.instance_path, exist_ok=True)

    @app.route('/', methods=['GET', 'POST'])
    @app.route('/<page>')
    def index(page=None):
        return render_template('index.html')

    add_api_resources(app)

    return app
