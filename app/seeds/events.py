from app.models import db, Event

def seed_events():

    event_1 = Event(title="Ka Makana Swim Club", date_time="2021-04-03 08:00:00", 
                description="The Ka Makana Swim Club is getting together to clean up the neighboring beach the first weekend in April", area_id=1, user_id=2)
    
    event_2 = Event(title="Family of Five", date_time="2021-04-04 12:00:00", description="My family will be spending the first Sunday in April picking up litter on the beach. Come join us!", area_id=1, user_id=2)
    
    event_3 = Event(title="Ewa Makai Middle School", date_time="2021-04-07 09:00:00", description="Our Ewa Makai eighth graders are spending a day in April cleaning up White Plains Beach.", area_id=1, user_id=2)

    db.session.add(event_1)
    db.session.add(event_2)
    db.session.add(event_3)

    db.session.commit()

def undo_events():
    Event.query.delete()
    db.session.commit()    