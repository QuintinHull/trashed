from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SelectField, FloatField, BooleanField, DateTimeField
from wtforms.validators import DataRequired
from app.models import Area

state = [("HI"), ("AL"), ("AK"), ("AZ"), ("AR"), ("CA"), ("CO"), ("CT"), ("DE"), ("FL"), ("GA"), ("ID"), ("IL"), ("IN"), ("IA"), ("KS"), ("KY"), ("LA"), ("ME"), ("MD"), ("MA"), ("MI"), ("MN"), ("MS"),
         ("MO"), ("MT"), ("NE"), ("NV"), ("NH"), ("NJ"), ("NM"), ("NY"), ("NC"), ("ND"), ("OH"), ("OK"), ("OR"), ("PA"), ("RI"), ("SC"), ("SD"), ("TN"), ("TX"), ("UT"), ("VT"), ("VA"), ("WA"), ("WV"), ("WI"), ("WY")]


class AreaForm(FlaskForm):
    address = StringField("address", validators=[DataRequired()])
    city = StringField("city", validators=[DataRequired()])
    state = SelectField("state", choices=state, validators=[DataRequired()])
    zipcode = IntegerField("zipcode", validators=[DataRequired()])
    description = TextAreaField("description", validators=[DataRequired()])
    latitude = FloatField("latitude")
    longitude = FloatField("longitude")