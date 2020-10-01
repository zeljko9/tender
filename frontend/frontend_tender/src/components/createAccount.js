import React from 'react';
import './createAccount.css';
import { Container } from 'react-materialize';

//ca = create account
class CreateAccount extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <Container className = "caContainer">
                napravi nalog
            </Container>
        )
    }
}

export default CreateAccount;