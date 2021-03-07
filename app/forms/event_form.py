from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SelectField, FloatField, BooleanField, DateTimeField
from wtforms.validators import DataRequired
from app.models import Event

class EventForm(FlaskForm):
    title = 
    date_time = 
    description = 