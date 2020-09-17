from selenium import webdriver
import time

class Webtender:
    def __init__(self):
        self.path = 'C:\\Users\\Zeljko\\PycharmProjects\\tender_python\\operadriver.exe'
        self.browser = webdriver.Opera(executable_path=self.path)
        self.browser.get('https://jnportal.ujn.gov.rs/oglasi-svi')
        self.arrayofvalues = None

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
        finally:
            print('')
    # def putinarray(self):   ovde planiram da stavim sva polja iz tabele koje su danasnjeg datuma(jer ih nema mnogo na dnevnom nivou)
                              # nakon toga trebam da ih sortiram po kljucnim recima