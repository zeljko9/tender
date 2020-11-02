import smtplib
import os
from email.message import EmailMessage


class MailSender:
    def __init__(self):
        self.mail = 'tender@naissteh.com'
        self.passw = 'jasamObilic1'
        try:
            self.server = smtplib.SMTP('smtp.gmail.com', 587)
            self.server.starttls()
            self.server.login(self.mail, self.passw)
        except:
            print ("failed to connect\n")

    def sendmail(self,subject,body,reciever):
        self.msg=EmailMessage()
        self.msg['Subject']=subject
        self.msg['From']=self.mail
        self.msg['To']=reciever
        self.msg.set_content(body)
        self.server.send_message(self.msg)

    def resetpassmail(self,code):
        self.sendmail("Reset password","Please go to this URL to reset your password: https://www.naissteh.com/tender/forgottenPassword/"+code)