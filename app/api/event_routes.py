from flask import Blueprint, jsonify, request, Response
from flask_login import current_user
from app.models import db, Event
from app.forms import EventForm
from sqlalchemy import and_

event_routes = Blueprint("events", __name__)


@event_routes.route("/")
def all_events():
    events = Event.query.all()
    return {"all_events": {event.id: event.to_dict() for event in events}}

@event_routes.route("/area/<id>")
def events_for_area(id):
    events = Event.query.filter(Event.area_id == id).all()    
    return {"all_area_events": {event.id: event.to_dict() for event in events}}


@event_routes.route("/<id>")
def single_event(id):
    event = Event.query.get(id)
    return {"event": event.to_dict()}


@event_routes.route("/<areaId>", methods=["POST"])
def create_event(areaId):
    form = EventForm()
    print("---------------form title------->", form.data['title'])
    print("---------------form datetime------->", form.data['date_time'])
    print("---------------form desc------->", form.data['description'])
    print("---------------form areaId------->", areaId)
    print("---------------form current user------->", current_user.id)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        event = Event(
            title=form.data['title'],
            date_time=form.data['date_time'],
            description=form.data['description'],
            area_id=areaId,
            user_id=current_user.id,   
        )
        print("---event route, event--->", event)
        db.session.add(event)
        db.session.commit()
        return {"event": event.to_dict()}
    return {"errors": "error with event form validation"}


@event_routes.route("/<id>/edit", methods=["PUT"])
def edit_location(id):
    event = Event.query.get(id)

    new_event = request.get_json()
   
    event.title = new_event["title"]
    event.date_time = new_event["date_time"]
    event.description = new_event["description"]
    
    db.session.commit()
    return {"event": event.to_dict()}    


@event_routes.route('/delete/<id>', methods=["DELETE"])
def delete_event(id):
    event = Event.query.get(id)
    db.session.delete(event)
    db.session.commit()
    return {'event': event.to_dict()}    