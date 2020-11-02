from mysql import connector

class sqlCom():
    def __init__(self):
        self.sql = connector.connect(
            user='naissteh_zeljko',
            password='jasamObilic2',
            host='host105.dwhost.net',
            database='naissteh_tender'
        )
        print (self.sql.server_status)
        self.mycoursor = self.sql.cursor()

    def login(self, name, email, pib):
        fun = "insert into login (name, email, pib) values (%s, %s, %s)"
        val = (name, email, pib)
        self.mycoursor.execute(fun, val)
        self.sql.commit()

    def checkmvalide(self):
        fun=""