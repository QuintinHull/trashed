import datetime
from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import db, Area
from app.forms import AreaForm
from sqlalchemy import and_

area_routes = Blueprint("areas", __name__)

@area_routes.route("/")
def all_areas():
    areas = Area.query.all()
    return {"all_areas": {area.id: area.to_dict() for area in areas}}
@area_routes.route("/<id>")
def single_area(id):
    area = Area.query.get(id)
    return {"area": area.to_dict()}    

@area_routes.route("/", methods=["POST"])
def create_area():
    form = AreaForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        area = Area(
            address=form.data["address"],
            city=form.data['city'],
            state=form.data['state'],
            zipcode=form.data['zipcode'],
            description=form.data['description'],
            clean=False,
            latitude=form.data['latitude'],
            longitude=form.data['longitude'],
            created_at=datetime.datetime.now(),
            user_id=current_user.id,   
        )
        db.session.add(area)
        db.session.commit()
        return {"area": area.to_dict()}
    return {"errors": "error with area form / post route"}


        

