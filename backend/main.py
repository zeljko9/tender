import flask

app = flask.Flask("__main__")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return flask.render_template("index.html")

@app.route('/settings')

app.run(debug=True)