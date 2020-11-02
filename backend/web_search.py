from selenium import webdriver
import os

class Webtender:
    def __init__(self):
        self.path = 'C:\\Users\\Zeljko\\PycharmProjects\\tender_python\\operadriver.exe'
        self.browser = webdriver.Opera(executable_path=self.path)
        self.browser.get('https://jnportal.ujn.gov.rs/oglasi-svi')
        self.arrayofvalues = None
        self.oldDataR=[]
        self.newDataR = []
        self.twenty = self.browser.find_element_by_xpath('//*[@id="searchGridContainer"]/div/div[11]/div[1]/div[3]')
        self.twenty.click()
        self.changedRowNumber = []
        self.content = []
        self.tablepath = '//*[@id="searchGridContainer"]/div/div[6]/div/div/div[1]/div/table/tbody'
        self.table = self.browser.find_element_by_xpath(self.tablepath)

    def find_keyword(self, keyword):
        self.str1 = '//*[@id="searchGridContainer"]/div/div[5]/div'
        self.str2 = '/table/tbody/tr[2]/td[5]/div/div[2]/div/div/div[1]/input'
        self.str = self.str1 + self.str2
        self.searchbar = self.browser.find_element_by_xpath(self.str)
        self.searchbar.send_keys(keyword)

    def login(self):
        try:
            self.link = self.browser.find_element_by_link_text('Пријава')
            self.link.click()
            self.inputname = self.browser.find_element_by_xpath('//*[@id="uiUsername"]')
            self.inputpass = self.browser.find_element_by_xpath('//*[@id="uiPassword"]')
            self.inputname.send_keys('zeljko9')
            self.inputpass.send_keys('jasamObilic1')
            self.login = self.browser.find_element_by_xpath('//*[@id="uiLogin"]')
            self.login.click()
            self.browser.get('https://jnportal.ujn.gov.rs/oglasi-svi')
            self.twenty=self.browser.find_element_by_xpath('//*[@id="searchGridContainer"]/div/div[11]/div[1]/div[3]')
            self.twenty.click()
        finally:
            print('')

    def find_table_rows(self,keyword):
        self.find_keyword(keyword)
        self.oldDataR=self.newDataR
        str1 = '//*[@id="searchGridContainer"]'
        self.table = self.browser.find_element_by_xpath(str1+'/div/div[6]/div/div/div[1]/div/table/tbody')
        str1="/div/div[6]/div/div/div["+str1
        for i in range(3, 21):
            self.ro = []
            for j in range(1, 9):
                self.ro.append(self.table.find_element_by_xpath(str1+""+str(i)+"]/div/table/tbody/tr["+str(j)+"]").text)
            self.newDataR.append(self.ro)

    def old_new_rows_equal(self):
        k = True
        j = 0
        for i in range(10):
            if self.oldDataR[i] != self.newDataR[i]:
                k = False
                self.changedRowNumber[j] = i
                j = j+1
        return k

    def save_contents(self):
        for i in self.changedRowNumber:
            self.table.find_element_by_xpath("/tr[" + i + "]/td[2]").click()
            content_table = self.browser.find_element_by_xpath('//*[@id="tenderBasicInfoPanelTemplate"]/table')
            self.ro = []
            for j in range(1, 9):
                 self.ro.append(content_table.find_element_by_xpath("/tr["+str(j)+"]/td[2]").text)
                 self.browser.find_element_by_xpath('//*[@id="documentControl_uiMainContentPH_uiMainContentPH_uiDocumentControl"]/div/div/div[1]/a').click()
                 os.rename(r"C:\\Users\\Zeljko\\Downloads\\Konkursna dokumentacija za ponuđača.zip",r"C:\\Users\\Zeljko\\Downloads\\"+str(i)+".zip")
            self.browser.back()
            self.newDataR.append(self.ro)