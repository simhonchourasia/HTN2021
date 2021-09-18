rom flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_restful import Api
import requests
import json

from . import services

app = Flask(__name__)
app.debug=True
CORS(app)
api = Api(app)