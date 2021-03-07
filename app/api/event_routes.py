import datetime
from flask import Blueprint, jsonify, request, Response
from flask_login import current_user
from app.models import db, Event
from app.forms import EventForm
from sqlalchemy import and_