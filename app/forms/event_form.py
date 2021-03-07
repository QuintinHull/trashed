from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateTimeField
from wtforms.validators import DataRequired
from app.models import Event

class EventForm(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    date_time = DateTimeField("date_time", validators=[DataRequired()])
    description = TextAreaField("description", validators=[DataRequired()])