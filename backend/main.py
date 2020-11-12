import flask
import uuid
import json
from backend import MailSender

app = flask.Flask("__main__")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return flask.render_template("index.html")

@app.route('/forgottenPassword',methods=["POST"])
def acceptpassrst(self):
    data=flask.request.get_json()
    email=json.loads(data)["email"]
    if sqlCom.checkmvalid(email):
        self.security=str(uuid.uuid4())
        sender=MailSender().resetpassmail(self.security)


app.run(debug=True)