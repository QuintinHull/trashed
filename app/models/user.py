from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  image_url = db.Column(db.String(20083))
  first_name = db.Column(db.String(50), nullable=False)
  last_name = db.Column(db.String(50), nullable=False)
  email = db.Column(db.String(255), nullable=False, unique=True)
  hashed_password = db.Column(db.String(255), nullable=False)

  # relationships here
  area = db.relationship("Area", cascade="all, delete", backref="users")
  event = db.relationship("Event", cascade="all, delete", backref="users")
  item = db.relationship("Item", cascade="all, delete", backref="users")

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "image_url": self.image_url,
      "first_name": self.first_name,
      "last_name": self.last_name,
      "email": self.email
    }
