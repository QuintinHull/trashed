from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.fields.html5 import DateTimeLocalField
from wtforms.validators import DataRequired
from app.models import Event

class EventForm(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    date_time = DateTimeLocalField("date_time", validators=[DataRequired()])
    description = TextAreaField("description", validators=[DataRequired()])