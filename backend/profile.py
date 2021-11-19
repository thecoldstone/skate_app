from flask_restful import Resource

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
