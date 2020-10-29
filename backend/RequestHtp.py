import socketserver
import json
from http.server import BaseHTTPRequestHandler


def some_function():
    print("some_function got called")


class MyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/captureImage':
            # Insert your code here
            some_function()

            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()

            neki_json = {
                'a': 'vuk',
                'b': ['lazar', 'zeljko']
            }
            neki_json['b'].append('uros')

            json_str = json.dumps(neki_json)
            self.wfile.write(bytes(json_str, 'utf-8'))
            self.wfile.flush()
            self.wfile.close()
        elif self.path == '/drugipath':
            print('asfas')
        else:
            self.send_response(404)

    def do_POST(self):
        url="https://web.postman.co/build/workspace/My-Workspace~aa252b7f-ae6b-4c65-818c-c48a9a64829d"
        url=url+"/naspost"
        if self.path == url:
            content_len = int(self.headers.get('Content-Length'))
            post_body = self.rfile.read(content_len) # ovde smo primili json string
            json_obj = json.loads(post_body) # ovde iz json stringa prebacujemo u ekvivalentni python object
            print(json_obj)



httpd = socketserver.TCPServer(("", 8080), MyHandler)
httpd.serve_forever()
