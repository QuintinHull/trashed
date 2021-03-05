from .db import db


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    date_time = db.Column(db.DateTime, nullable=False)
    description = db.Column(db.String(250), nullable=False)
    area_id = db.Column(db.Integer, db.ForeignKey("areas.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    area = db.relationship("Area", cascade="all, delete", backref="events")
    user = db.relationship("User", cascade="all, delete", backref="events")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "date_time": self.date_time,
            "description": self.description,
            "area_id": self.area_id
        }


