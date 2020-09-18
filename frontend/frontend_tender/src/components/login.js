import React from 'react';
import './login.css';
import { Container , Row, Col, Card, Button } from 'react-materialize';
import { Input } from 'reactstrap';

class Login extends React.Component{
    constructor(){
        super();
        this.inputEmailChanged = this.inputEmailChanged.bind(this);
        this.inputPasswordChanged = this.inputPasswordChanged.bind(this);
        this.btnCreateAccountClicked = this.btnCreateAccountClicked.bind(this);
        this.state = {
            inputEmailValue: " ",
            inputPasswordChanged: " "
        }
    }

    inputEmailChanged(e) {
        this.setState({inputEmailValue: e.target.value})
    }

    inputPasswordChanged(e) {
        this.setState({inputPasswordChanged: e.target.value})
    }
    btnCreateAccountClicked(){
        window.location.replace('/createAccount')
    }

    //TODO:slogan prebaci na eng
    render(){
        return (
            <Container className = "loginContainer">
                <Row>
                    <Col className="m12 l6">
                        <p className = "slogan">SVE NABAVKE NA JEDNOM MESTU</p>
                    </Col>
                    <Col className="m12 l4">
                        <Card className = "cardLogin">
                            <Row>
                                <Col className = "inputEmailContainer s12">
                                    <Input onChange={this.emailInputChanged}
                                            value={this.state.inputEmailValue}
                                            type="email"
                                            className = "inputLogin"
                                            placeholder = "Email address"
                                    ></Input>
                                </Col>
                                <Col className = "inputPasswordContainer s12">
                                    <Input onChange={this.inputPasswordChanged}
                                            value={this.state.inputPasswordValue}
                                            type="password"
                                            className = "inputLogin"
                                            placeholder = "Password"
                                    ></Input>
                                </Col>
                                <Col className = "btnLoginContainer s12">
                                    <Button className = "btnLogin red">
                                        Login
                                    </Button>
                                </Col>
                                <Col className = "fPassContainer s12">
                                    <a className = "fPass" href="https://www.w3schools.com/">Forgotten password?</a>
                                </Col>
                                <Col className = "hLineContainer s12">
                                    <hr className = "hLine"></hr>
                                </Col>
                                <Col className = "btnRegisterContainer s12">
                                    <Button className = "btnRegister grey" onClick = {this.btnCreateAccountClicked}>
                                        Create account
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;