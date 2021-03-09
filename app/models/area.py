from .db import db


class Area(db.Model):
    __tablename__ = 'areas'

    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(2), nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(250), nullable=False)
    clean = db.Column(db.Boolean, nullable=False)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    created_at = db.Column(db.DateTime, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    area_user = db.relationship("User", back_populates="user_area")
    area_event = db.relationship("Event", back_populates="event_area")

    def to_dict(self):
        return {
            "id": self.id,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "zipcode": self.zipcode,
            "description": self.description,
            "clean": self.clean,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "created_at": self.created_at,
            "user_id": self.user_id,
            "first_name": self.area_user.first_name,
            "last_name": , self.area_user.last_name,
        }