import React from 'react';
import './mainPage.css';


class MainPage extends React.Component {

    constructor(){
        super();

        this.state = {
        }
    }

    render(){
        return (
            <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">Tender</a>
              <ul id="nav-mobile" class="right">
              <li><a href="#"><i class="material-icons">home</i></a></li>
                <li><a href="#">Username</a></li>
                <li><a href="#">Log out</a></li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default MainPage;