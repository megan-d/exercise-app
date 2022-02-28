from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
import os

app = Flask(__name__)
# app.config["SQLALCHEMY_DATABASE_URI"] = os.environ["DATABASE_URL"]
engine = create_engine(os.environ["DATABASE_URL"])
db = SQLAlchemy(app)

app = Flask(__name__)
