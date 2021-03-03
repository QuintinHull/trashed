from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(image_url="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg", 
                first_name="Demo", last_name="User", email='demo@aa.io', password='password')
    
    quintin = User(image_url="https://postimg.cc/sM7j3LJP", first_name="Quintin", last_name="Hull", email="quintinhull92@gmail.com",
                password='password')            

    db.session.add(demo)
    db.session.add(quintin)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
