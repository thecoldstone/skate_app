import os

from flask import Flask, render_template

from backend.profile import Profile, EditProfile
from backend.spot import Spot, Comment_add, Edit_spot
from backend.authorization import Login, Logout

def add_api_resources(app):
    from flask_restful import Api
    api = Api(app)

    ''' /api/ is a basement of this restapi ! '''
    api.add_resource(Profile, '/profile')
    api.add_resource(EditProfile, '/editProfile')
    api.add_resource(Spot, '/spot')
    api.add_resource(Edit_spot, '/edit_spot')
    api.add_resource(Comment_add, '/comment_add')
    api.add_resource(Login, '/authorization_login')
    api.add_resource(Logout, '/authorization_logout')


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
