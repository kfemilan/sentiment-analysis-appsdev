from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS
import sentiment as st

app = Flask(__name__)
api = Api(app)
CORS(app)

class Sentiment(Resource):
    def get(self, text):
        scores = st.getScore(text)
        return scores

api.add_resource(Sentiment, '/sentiment/<string:text>')

if __name__ == '__main__':
    app.run()