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
        this.btnLoginClicked = this.btnLoginClicked.bind(this);
        this.btnForgottenPasswordClicked = this.btnForgottenPasswordClicked.bind(this);
        this.inputLoginEnterPressed = this.inputLoginEnterPressed.bind(this);

        this.state = {
            inputEmailValue: "",
            inputPasswordValue: ""
        }
    }

    inputEmailChanged(e) {
        this.setState({inputEmailValue: e.target.value})
    }

    inputPasswordChanged(e) {
        this.setState({inputPasswordValue: e.target.value})
    }
    btnCreateAccountClicked(){
        window.location.replace('/createAccount')
    }

    btnForgottenPasswordClicked(){
        window.location.replace('/forgottenPassword')
    }
     
    btnLoginClicked(){
        //TODO: smisli lepse ime umesto mainPage
        window.location.replace('/mainPage')
    }

    inputLoginEnterPressed(e){
        let code = e.keyCode || e.which;
        if (code === 13) {
            this.btnLoginClicked()
        }
    }

    //TODO: slogan prebaci na eng
    render(){
        return (
            <Container className = "loginContainer">
                <Row className="loginRow">
                    <Col className="offset-m2 s12 m8 l5 xl6">
                        <p className = "slogan">SVE NABAVKE NA JEDNOM MESTU</p>
                    </Col>
                    <Col className="offset-m2 s12 m8 l7 xl5">
                        <Card className = "cardLogin">
                            <Row>
                                <Col className = "inputEmailContainer s12">
                                    <Input onChange={this.inputEmailChanged}
                                            value={this.state.inputEmailValue}
                                            type="email"
                                            className = "inputStyle"
                                            placeholder = "Email address"
                                            onKeyPress={this.inputLoginEnterPressed}
                                    ></Input>
                                </Col>
                                <Col className = "inputPasswordContainer s12">
                                    <Input onChange={this.inputPasswordChanged}
                                            value={this.state.inputPasswordValue}
                                            type="password"
                                            className = "inputStyle"
                                            placeholder = "Password"
                                            onKeyPress={this.inputLoginEnterPressed}
                                    ></Input>
                                </Col>
                                <Col className = "btnLoginContainer s12">
                                    <Button className = "btnLogin red" onClick={this.btnLoginClicked}>
                                        Login
                                    </Button>
                                </Col>
                                <Col className = "fPassContainer s12">
                                    <a className = "fPass" href="/forgottenPassword">Forgotten password?</a>
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