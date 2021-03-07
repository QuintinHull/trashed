from .db import db


class Type(db.Model):
    __tablename__ = "types"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    type_item = db.relationship("Item", back_populates="item_type")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }