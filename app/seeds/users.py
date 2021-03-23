from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(first_name="Demo", last_name="User", 
                email='demo@aa.io', password='password')
    
    quintin = User(first_name="Quintin", last_name="Hull", 
                    email="quintinhull92@gmail.com", password='password')

    olivia = User(first_name="Olivia", last_name="Jones",
                    email="olivia21@gmail.com", password='passOJ21')

    tito = User(first_name="Tito", last_name="Makani",
                    email="tito@shoreshack.com", password="alohatothat")

    reggie = User(first_name="Reggie", last_name="Smoove",
                    email="smoovereg@gmail.com", password="smoove24")                            

    db.session.add(demo)
    db.session.add(quintin)
    db.session.add(olivia)
    db.session.add(tito)
    db.session.add(reggie)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
