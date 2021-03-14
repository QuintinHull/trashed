from app.models import db, Type

def seed_types():

    type_1 = Type(name="Kitchen")
    type_2 = Type(name="Office")
    type_3 = Type(name="Bathroom")
    type_4 = Type(name="Closet")
    type_5 = Type(name="Laundry")
    type_6 = Type(name="Miscellaneous")

    db.session.add(type_1)    
    db.session.add(type_2)    
    db.session.add(type_3)    
    db.session.add(type_4)    
    db.session.add(type_5)    
    db.session.add(type_6)    
    
    db.session.commit()       

def undo_types():
    Type.query.delete()
    db.session.commit()       
    

