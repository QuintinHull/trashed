from app.models import db, Area

def seed_areas():
    
    area_1 = Area(address="White Plains", city="Ewa Beach", state="HI", zipcode="96706", description="White Plains Beach", clean=False, latitude=21.3035, 
                longitude=-158.0452, created_at="2021-03-03 04:05:06", user_id="2")
    area_2 = Area(address="91-1450 Renton Rd", city="Ewa Beach", state="HI", zipcode="96706", description="Asing Community Park", clean=False, latitude=21.3508, 
                longitude=-158.0253, created_at="2021-03-01 10:15:04", user_id="2")
    area_3 = Area(address="2199 Kalia Rd", city="Honolulu", state="HI", zipcode="96815", description="The stretch of Kalia road by Lewers Lounge", clean=False, latitude=21.2779, 
                longitude=-157.8323, created_at="2021-02-26 12:00:00", user_id="2")

    db.session.add(area_1)            
    db.session.add(area_2)            
    db.session.add(area_3)

    db.session.commit()

def undo_areas():
    Area.query.delete()
    db.session.commit()            