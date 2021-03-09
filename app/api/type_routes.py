from flask import Blueprint, jsonify, request, Response
from app.models import db, Type

type_routes = Blueprint("types", __name__)

@type_routes.route("/")
def all_types():
    types = Type.query.all()
    return {"all_types": {one_type.id: one_type.to_dict() for one_type in types}}


@type_routes.route("/<id>")
def single_type(id):
    one_type = Type.query.get(id)
    return {"one_type": one_type.to_dict()}    