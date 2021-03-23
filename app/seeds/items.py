from app.models import db, Item

def seed_items():
    #Bathroom
    item_1 = Item(name="Toothpaste", description="Instead of buying a tube of toothpaste every month or so you can shop for plastic free toothpaste as a better alternative. Bite is the brand I use and it gets the job done!", 
                user_id="4", type_id="3") 
    item_2 = Item(name="Soap", description="I recently switched back to using soap bars instead of the liquid soap that comes in plastic bottles. Schmidt's is the brand that I currently use and it smells great!", 
                user_id="1", type_id="3") 
    item_3 = Item(name="Face pads", description="I finally switched from my single use face pads I use to wash my face and purchased washable face pads that feel great and work just as well! Seek Bamboo is the brand I use.", 
                user_id="2", type_id="3")
    item_4 = Item(name="Q-Tips", description="If you haven't heard...toss the q-tips! They only push the wax further in to your ear and are a needless use of plastic.", 
                user_id="3", type_id="3")
    #Kitchen             
    item_5 = Item(name="Food Covers", description="I stopped buying ziplock bags because I only use stretchy silicone food lids. They come in many sizes and in square and circlular shapes. Just stretch over your casserole dish or salad bowl and you're set.", 
                user_id="5", type_id="1")             
    item_6 = Item(name="Multi-Surface Cleaner", description="I bought the multi-surface starter kit from Blueland and they sent me a reusable spray bottle that I fill on my own and drop in one of their provided tablets.", 
                user_id="4", type_id="1")             
    item_7 = Item(name="Reusable Bags", description="Buy reusable grocery bags as well as reusable produce bags for when you go to the grocery store. This may seem simple but its a great place to start!", 
                user_id="1", type_id="1")             
    item_8 = Item(name="Milk", description="Oat and/or Soy milk uses significantly less land and water to produce than dairy milk.", 
                user_id="3", type_id="1")    
    #Office                     
    item_9 = Item(name="Highlighters", description="You can now find eco friendly wooden highlighters pretty much anywhere online.", 
                user_id="1", type_id="2")             
    item_10 = Item(name="Electronic Recycling", description="Electronic stores like Best Buy will actually take your old electronics and recycle them. They typically have drop off boxes at the store front.", 
                user_id="2", type_id="2")             
    item_11 = Item(name="Go Digital", description="I noticed a huge decrease in my paper usage after I made a conscious effort to switch to digital files. Google Drive is what I use but there are other options.", 
                user_id="1", type_id="2")             
    item_12 = Item(name="Pens", description="You can bring your old pens, highlighters, and mechanical pencils to most office supply stores to recycle them. I take mine to Staples.", 
                user_id="4", type_id="2")
    #Closet  
    item_13 = Item(name="Old Clothes", description="Some retail stores will offer you credit if you send them old clothes. Marine Layer will give you $5 credit per tee that you send in (up to $25). Of course you can send them more than 5 tee's if you want.", 
                user_id="3", type_id="4")             
    item_14 = Item(name="Jeans", description="Save water and stop washing your jeans. You'd be surprised how long you can go before you actually need to wash your jeans. If you're just wearing them occassionally you could go up to 6 months or more before needing them washed.", 
                user_id="2", type_id="4")             
    item_15 = Item(name="Micro Plastics", description="Fabrics that release microplastics: Polyester, Nylon, Acrylic, Fleece, Spandex, Acetate. Fabrics that dont: Cotton, Flax, Hemp, Jute, Linen, Ramie, Sisal, Kenaf.", 
                user_id="1", type_id="4")             
    item_16 = Item(name="Hangers", description="Recycled fiber board hangers are a nice substitute for plastic hangers, but before you buy them, ask yourself if all the clothes currently on hangers actually need hangers. Ditto Hangers are the brand I use.", 
                user_id="5", type_id="4")
    #Laundry             
    item_17 = Item(name="Soap Nuts", description="Instead of buying laundry detergent in plastic containers you can use soap nuts (from Soapberry trees) instead. You can reuse soap nuts up to 6 loads of laundry and they are compostable.", 
                user_id="1", type_id="5")             
    item_18 = Item(name="Lemons", description="I recently discovered that you can avoid using bleach by soaking stained clothes overnight in one gallon of hot water and a half cup of lemon juice. It gets the stains out, and you can avoid the harsh chemicals.", 
                user_id="2", type_id="5")             
    item_19 = Item(name="Dryer Balls", description="Dryer balls retain heat, help clothes stay separated, and reduce drying time by 25%. Wool dryer balls, which are easy to find, can last up to 1,000 loads.", 
                user_id="3", type_id="5")             
    item_20 = Item(name="Hang Dry", description="If you dont need youre clothes dry right away, consider hanging them out to dry. Your dryer is more than likely one of the top energy-hungry appliances in your house...and your clothes will last longer!", 
                user_id="4", type_id="5")
    #Other             
    item_21 = Item(name="Broom", description="When your broom begings to fray and it doesnt sweep like it used to, you can extend its life by simply trimming the frayed ends with a pair of scissors.", 
                user_id="5", type_id="6")             
    item_22 = Item(name="Composting", description="Divert waste from the landfill and start composting items like food scraps, coffee grinds, and grass clippings.", 
                user_id="1", type_id="6")             
    item_23 = Item(name="Bicycle", description="If can swing it, start commuting on your bike. You'd be surprised the effect it can have on emmissions and fuel consumption if we all rode our bikes. Not to mention you'll be in better shape and save on gas!", 
                user_id="2", type_id="6")             
    item_24 = Item(name="Paperless Billing", description="This one might seem simple, but save some trees and enroll in paperless billing.", 
                user_id="3", type_id="6")             
  
    db.session.add(item_1)
    db.session.add(item_2)
    db.session.add(item_3)
    db.session.add(item_4)
    db.session.add(item_5)
    db.session.add(item_6)
    db.session.add(item_7)
    db.session.add(item_8)
    db.session.add(item_9)
    db.session.add(item_10)
    db.session.add(item_11)
    db.session.add(item_12)
    db.session.add(item_13)
    db.session.add(item_14)
    db.session.add(item_15)
    db.session.add(item_16)
    db.session.add(item_17)
    db.session.add(item_18)
    db.session.add(item_19)
    db.session.add(item_20)
    db.session.add(item_21)
    db.session.add(item_22)
    db.session.add(item_23)
    db.session.add(item_24)

    db.session.commit()

def undo_items():
    Item.query.delete()
    db.session.commit()    
