from .db import db


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    date_time = db.Column(db.DateTime, nullable=False)
    description = db.Column(db.String(250), nullable=False)
    area_id = db.Column(db.Integer, db.ForeignKey("areas.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    event_area = db.relationship("Area", back_populates="area_event")
    event_user = db.relationship("User", back_populates="user_event")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "date_time": self.date_time,
            "description": self.description,
            "area_id": self.area_id
        }


