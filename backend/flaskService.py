import json
from flask import request,Flask,jsonify


app = Flask(__name__)

/generisiLinkZaPromenuSifre GET
id firme
"Proemnu sifre odradite preko ovog linka www.tender.com/promenaSifre?id=4643298563896458"

/promenaSifre
head.info.id
@app.route('/promenaSifre', methods=['POST'])
def getjson():
    data=request.get_json()
    print(req) 200
    return jsonify({'result':'Success!'})

if __name__ == '__main__':
    app.run(ssl_context='adhoc' )