from flask import Flask, request, jsonify, render_template, send_from_directory
from requests import get, post
from ua_parser import user_agent_parser
#import pymongo

url = "https://api.telegram.org/bot5027101207:AAEZGFBbMxF8zZnHYuQtcTj9CKqCTWeIkkk/sendMessage?chat_id=-1001664183927&parse_mode=Markdown&text="
ttt = 0
uas = []

#client = pymongo.MongoClient("mongodb+srv://tqwera231:tqwa231@cluster0.tewnqxq.mongodb.net/?retryWrites=true&w=majority")
app = Flask(__name__)

@app.route("/", methods=['GET'])
def msg():
    ua = request.headers.get('User-Agent')
    msg = f"Someone Tryinggg!"
    ua = db(ua, msg)
    return render_template('index.html', data="PAnDA")

@app.route('/<name>', methods=['GET'])
def mm(name):
    print("name:  " , name)
    ua = request.headers.get('User-Agent')
    print(ua)
    msg = ""
    if name == "eme":
        msg = "EMEESSES"
    elif name == "panda":
        msg = "PANDA"
        return render_template('panda.html', data=name)
    elif name == "nnns":
        msg = "NNNS"
    elif name == "favicon.ico":
        return send_from_directory("static", 'favicon.ico')
    else: 
        msg = name
    ua = db(ua, msg)
    print(ua)
    return render_template('index.html', data=name)
    

@app.route("/edit", methods=['GET'])
def web():
    name = request.args.get('name', default="u")
    ua = request.headers.get('User-Agent')
    msg = f"Someone EDDITING! {name}"
    ua = db(ua, msg)
    return render_template('edit.html')

def increment_visited_times(db_name, collection_name, name):
   db = client[db_name]
   collection = db[collection_name]

   collection.update_one(
        {},
        {"$inc": {"visited_times": 1}, "$addToSet": {"names": name}},
        upsert=True
    )

   updated_document = collection.find_one({})  # Retrieve the updated document
   visited_times = updated_document["visited_times"]

   return visited_times

def db(ua, mmm):
    x = user_agent_parser.Parse(ua)
    device = f"{x['os']['family']} {x['os']['major']} {x['device']['family']} {x['device']['model']}"

    #update db
    global ttt
    ttt = ttt + 1
    #times = increment_visited_times("your_database_name", "visit_times", device)
    msg = f"{mmm}\n\n\nSomeone Tryinggg!\n\ntime: {ttt}\nDevice: {device}"
    i = get(url + msg)
    return msg

app.run()