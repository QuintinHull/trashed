from app.models import db, Item

def seed_items():

    item_1 = Item(name="Toothpaste", description="Instead of buying a tube of toothpaste every month or so you can shop for plastic free toothpaste as a better alternative. Bite is the brand I use and it gets the job done!", 
                user_id="2", type_id="3") 
    item_2 = Item(name="Soap", description="I recently switched back to using soap bars instead of the liquid soap that comes in plastic bottles. Schmidt's is the brand that I currently use and it smells great!", user_id="2", type_id="3") 
    item_3 = Item(name="Face pads", description="I finally switched from my single use face pads I use to wash my face and purchased washable face pads that feel great and work just as well! Seek Bamboo is the brand I use.", user_id="2", type_id="3") 
  
    db.session.add(item_1)
    db.session.add(item_2)
    db.session.add(item_3)

    db.session.commit()

def undo_items():
    Item.query.delete()
    db.session.commit()    