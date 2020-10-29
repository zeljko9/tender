import

class sqlCom():
    def __init__(self):
        self.sql = connector.connect(
            host="host105.dwhost.net",
            user="naissteh_zeljko",
            password="690820MgMz!",
            database="naissteh_tender"
        )
        self.mycoursor = self.sql.cursor()

    def login(self, name, email, pib):
        fun = "insert into login (name, email, pib) values (%s, %s)"
        val = (name, email, pib)
        self.mycoursor.execute(fun, val)
        self.sql.commit()
