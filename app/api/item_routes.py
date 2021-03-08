from flask import Blueprint, jsonify, request, Response
from flask_login import current_user
from app.models import db, Item
from app.forms import ItemForm

item_routes = Blueprint("items", __name__)

@item_routes.route("/")
def all_items():
    items = Type.query.all()
    return {"all_types": {item.id: item.to_dict() for item in items}}

@item_routes.route("/area/<id>")
def items_for_type(id):
    items = Item.query.filter(Item.type_id == id).all()    
    return {"all_type_items": {item.id: item.to_dict() for item in items}}    

@item_routes.route("/<id>")
def single_item(id):
    item = Item.query.get(id)
    return {"item": item.to_dict()}    


@item_routes.route("/<typeId>", methods=["POST"])
def create_item(typeId):
    form = ItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        item = Item(
            name=form.data["address"],
            description=form.data['city'],
            user_id=current_user.id,   
            type_id=typeId,
        )
        db.session.add(item)
        db.session.commit()
        return {"item": item.to_dict()}
    return {"errors": "error with item form / post route"}


@item_routes.route("/<id>/edit", methods=["PUT"])
def edit_item(id):
    item = Item.query.get(id)

    new_item = request.get_json()
   
    item.name = new_item["name"]
    item.description = new_item["description"]
    
    db.session.commit()
    return {"item": item.to_dict()}


@item_routes.route('/delete/<id>', methods=["DELETE"])
def delete_item(id):
    item = Item.query.get(id)
    db.session.delete(item)
    db.session.commit()
    return {'item': item.to_dict()}    
