from .db import db


class Type(db.Model):
    __tablename__ = "types"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    item = db.relationship("Item", cascade="all, delete", backref="types")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }