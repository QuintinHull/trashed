from app.models import db, Area

def seed_areas():
    
    area_1 = Area(address="White Plains", city="Ewa Beach", state="HI", zipcode="96706", description="White Plains Beach", clean=False, latitude=21.3035, 
                longitude=-158.0452, created_at="2021-03-03 04:05:06", user_id="1")
    area_2 = Area(address="91-1450 Renton Rd", city="Ewa Beach", state="HI", zipcode="96706", description="Asing Community Park", clean=False, latitude=21.3508, 
                longitude=-158.0253, created_at="2021-03-01 10:15:04", user_id="2")
    area_3 = Area(address="2199 Kalia Rd", city="Honolulu", state="HI", zipcode="96815", description="The stretch of Kalia road by Lewers Lounge", clean=False, latitude=21.2779, 
                longitude=-157.8323, created_at="2021-02-26 12:00:00", user_id="4")
    area_4 = Area(address="Lower Saki Mana Rd", city="Waimea", state="HI", zipcode="96796", description="Polihale State Park", clean=False, latitude=22.0795, 
                longitude=-159.7648, created_at="2021-04-01 07:03:12", user_id="1")            
    area_5 = Area(address="200 W. Kawili St", city="Hilo", state="HI", zipcode="96720", description="Campus of University of Hawaii at Hilo", clean=False, latitude=19.7018462, 
                longitude=-155.0791607, created_at="2021-04-01 07:27:44", user_id="2")            
    area_6 = Area(address="", city="", state="HI", zipcode="", description="", clean=False, latitude=, 
                longitude=-, created_at="", user_id="4")            
    area_7 = Area(address="", city="", state="HI", zipcode="", description="", clean=False, latitude=, 
                longitude=-, created_at="", user_id="1")            
    area_8 = Area(address="", city="", state="HI", zipcode="", description="", clean=False, latitude=, 
                longitude=-, created_at="", user_id="2")            
    area_9 = Area(address="", city="", state="HI", zipcode="", description="", clean=False, latitude=, 
                longitude=-, created_at="", user_id="5")            
    area_10 = Area(address="", city="", state="HI", zipcode="", description="", clean=False, latitude=, 
                longitude=-, created_at="", user_id="3")            

    db.session.add(area_1)            
    db.session.add(area_2)            
    db.session.add(area_4)
    db.session.add(area_5)
    db.session.add(area_6)
    db.session.add(area_7)
    db.session.add(area_8)
    db.session.add(area_9)
    db.session.add(area_10)

    db.session.commit()

def undo_areas():
    Area.query.delete()
    db.session.commit()            