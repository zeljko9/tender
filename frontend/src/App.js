import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Login from './components/login'
import CreateAccount from './components/createAccount'
import MainPage from "./components/mainPage";
import ForgottenPassword  from "./components/forgottenPassword";
import NewPassword from "./components/newPassword";
import Profile from "./components/profile"
import { Footer } from 'react-materialize';
import './App.css';


class App extends React.Component {

  constructor(){
    super();

    this.state = {
      isMainPageSelected: false
    }
  }

  componentDidUpdate(){
    
  }

  render() {
    let isMainPageSelected = window.location.href.includes("mainPage")
    return (
      <BrowserRouter>
        <div className="App" style={{minWidth: isMainPageSelected ? "1000px" : "0"}}>
          <Route exact path = '/' render={() => <Login />}/>
          <Route exact path = '/createAccount' render={() => <CreateAccount />}/>
          <Route exact path = '/mainPage' render={() => <MainPage />}/>
          <Route exact path = '/forgottenPassword' render={() => <ForgottenPassword />}/>
          <Route exact path = '/newPassword' render={() => <NewPassword />}/>
          <Route exact path = '/profile' render={() => <Profile />}/>
            <Footer className="footer" copyrights="© 2020 Copyright Text"
              links={
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              }>
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </Footer>
        </div>
      </BrowserRouter>
    )

  }
}

export default App;