from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_restful import Api
import requests
import json

# from . import services

app = Flask(__name__)
app.debug=True
CORS(app)
api = Api(app)


@app.route('/')
def index(): 
    return "Hello, World!"


@app.route('/dummy', methods=['GET']) 
def index2():
     return "Dummy endpoint!"


# @app.route('/time', method=['GET'])
# def get_current_time():
#     return {'time': time.time()}

if __name__ == "__main__":
    app.run(debug=True)
