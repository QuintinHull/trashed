from app.models import db, Event

def seed_events():

    event_1 = Event(title="Ka Makana Swim Club", date_time="2021-04-03 08:00:00", description="The Ka Makana Swim Club is getting together to clean up the neighboring beach the first weekend in April",
                    area_id=1, user_id=2)
    
    event_2 = Event(title="Family of Five", date_time="2021-04-04 12:00:00", description="My family will be spending the first Sunday in April picking up litter on the beach. Come join us!",
                    area_id=1, user_id=1)
    
    event_3 = Event(title="Ewa Makai Middle School", date_time="2021-04-07 09:00:00", description="Our Ewa Makai eighth graders are spending a day in April cleaning up White Plains Beach.",
                    area_id=1, user_id=2)

    event_4 = Event(title="Fanciscan Vistas Apartments", date_time="2021-04-12 07:15:00", description="Some of us at Franciscan Vistas Ewa Apartments are going to meet up before work and pick up trash at Asing Park. Always need help!",
                    area_id=2, user_id=3)

    event_5 = Event(title="Service Hours", date_time="2021-04-15 12:00:00", description="I need to get more service hours for school so I'll be picking up trash at the park over lunch.",
                    area_id=3, user_id=1)

    event_6 = Event(title="Lewers Lounge Staff", date_time="2021-04-27 08:30:00", description="The staff at Lewers Lounge is going to be taking the morning off to clean up our surrounding area. If anyone is interested don't hesitate to join us!",
                    area_id=3, user_id=1)

    event_7 = Event(title="808 Cleanups", date_time="2021-05-01 09:00:00", description="808 Cleanups is going to be focusing on the Waikiki area for the month and we are going to start with the Int. Market Place area.",
                    area_id=3, user_id=3)

    event_8 = Event(title="Neighborhood Cleanup", date_time="2021-04-07 08:30:00", description="Our neighborhood is going to devote time to picking up Polihale State Park. We all visit the beach there regularly and take ownership in keeping it clean.",
                    area_id=4, user_id=4)

    event_9 = Event(title="Parks & Rec", date_time="2021-04-10 10:00:00", description="Kauai Parks & Recreation will be sending a team over to Polihale State Park to remove whatever trash and litter remains. We'd love the help and support of the community!",
                    area_id=4, user_id=1)

    event_10 = Event(title="Hale 'Alahonua", date_time="2021-04-15 17:00:00", description="Our dorm is going to spend the afternoon picking up trash throughout campus. Anyone is welcome!",
                    area_id=5, user_id=4)

    event_11 = Event(title="'92 Alumni", date_time="2021-04-20 12:20:00", description="The UH Hilo class of '92 is meeting on campus to take part in litter clean up. Lets go Vulcans!",
                    area_id=5, user_id=1)

    event_12 = Event(title="Family Clean Up", date_time="2021-04-17 10:00:00", description="Our entire family is coming together to clean up trash along Waihee Ridge Trail. We all frequent the trail and noticed the litter accumulating.",
                    area_id=6, user_id=1)

    event_13 = Event(title="Just Me", date_time="2021-04-20 15:30:00", description="I walk Waihee Ridge Trail every weekend and I can't stand to see it get covered with litter. I'll be going out to pick up what I can and anyone who wants to join me is welcome.",
                    area_id=6, user_id=5)

    event_14 = Event(title="Makena Golf & Beach Club", date_time="2021-05-05 13:15:00", description="We noticed a decent amount of trash washed up on shore of Makena Beach and our staff and members are going to spend the afternoon cleaning it up. Come join!",
                    area_id=7, user_id=2)

    event_15 = Event(title="Marine Ecology", date_time="2021-05-02 12:00:00", description="Our marine ecology class is taking a field trip to the pier to pick up trash in the area and keep it out of the ocean.",
                    area_id=8, user_id=4)

    event_16 = Event(title="O'okala Fellowship", date_time="2021-04-28 08:00:00", description="Our church members are going to take the initiative to clean up the mess that was left at the Lake Waiau Parking Lot.",
                    area_id=9, user_id=2)                    


    db.session.add(event_1)
    db.session.add(event_2)
    db.session.add(event_3)
    db.session.add(event_4)
    db.session.add(event_5)
    db.session.add(event_6)
    db.session.add(event_7)
    db.session.add(event_8)
    db.session.add(event_9)
    db.session.add(event_10)
    db.session.add(event_11)
    db.session.add(event_12)
    db.session.add(event_13)
    db.session.add(event_14)
    db.session.add(event_15)
    db.session.add(event_16)

    db.session.commit()

def undo_events():
    Event.query.delete()
    db.session.commit()    