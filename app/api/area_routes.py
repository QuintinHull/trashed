import datetime
from flask import Blueprint, jsonify, request, Response
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

@area_routes.route("/<id>/edit", methods=["PUT"])
def edit_location(id):
    area = Area.query.get(id)

    new_area = request.get_json()
    # print("------->", new_area)
    area.address = new_area["address"]
    area.city = new_area["city"]
    area.state = new_area["state"]
    area.zipcode = new_area["zipcode"]
    area.description = new_area["description"]
    # area = new_area["clean"]
    area.latitude = new_area["latitude"]
    area.longitude = new_area["longitude"]
    # area = new_area["created_at"]
    # area = new_area["user_id"]

    db.session.commit()
    return {"area": area.to_dict()}

   
@area_routes.route('/delete/<id>', methods=["DELETE"])
def delete_area(id):
    area = Area.query.get(id)
    print("---area--->", area)
    db.session.delete(area)
    db.session.commit()
    return {'area': area.to_dict()}

        

