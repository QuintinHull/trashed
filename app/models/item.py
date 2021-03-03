from .db import db

class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    type_id = db.Column(db.Integer, db.ForeignKey("types.id"), nullable=False)

    user = db.relationship("User", cascade="all, delete", backref="items")
    item_type = db.relationship("Type", cascade="all, delete", backref="items")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "user_id": self.user_id,
            "type_id": self.type_id
        }
