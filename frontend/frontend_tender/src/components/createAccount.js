import React from 'react';
import './createAccount.css';
import { Container , Row, Col, Card, Button } from 'react-materialize';
import { Input } from 'reactstrap';

//ca = create account
class CreateAccount extends React.Component{

    constructor(){
        super();
        this.inputEmailChanged = this.inputEmailChanged.bind(this);
        this.inputPasswordChanged = this.inputPasswordChanged.bind(this);
        this.inputCompanyNameChanged = this.inputCompanyNameChanged.bind(this);
        this.inputRetypePasswordChanged = this.inputRetypePasswordChanged.bind(this);
        this.btnCaClicked = this.btnCaClicked.bind(this);
        this.inputRetypePasswordEnterPressed = this.inputRetypePasswordEnterPressed.bind(this);

        this.state = {
            inputCompanyNameValue: "",
            inputEmailValue: "",
            inputPasswordValue: "",
            inputRetypePasswordValue: ""
        }
    }

    inputCompanyNameChanged(e) {
        this.setState({inputCompanyNameValue: e.target.value})
    }

    inputEmailChanged(e) {
        this.setState({inputEmailValue: e.target.value})
    }

    inputPasswordChanged(e) {
        this.setState({inputPasswordValue: e.target.value})
    }
    inputRetypePasswordChanged(e) {
        this.setState({inputRetypePasswordValue: e.target.value})
    }

    btnCaClicked(){
        window.location.replace('/')
    }

    inputRetypePasswordEnterPressed(e){
        let code = e.keyCode || e.which;
        if (code === 13) {
            this.btnCreateAccountClicked()
        }
    }

    render(){
        return (
            <Container className = "caContainer">
                <Row className="caRow">
                    <Col className="offset-xl2 s12 m8 l7 xl8">
                        <Card className = "cardCa">
                            <Row>
                                <h5>Napravite nalog</h5>
                                <Col className="offset-s1">
                                    <Col className = "labelCompanyNameContainer s10">
                                        <p align="left" className="caLabel">Ime kompanije</p>
                                    </Col>
                                    <Col className = "inputCompanyNameContainer s10">
                                        <Input onChange={this.inputCompanyNameChanged}
                                                value={this.state.inputCompanyNameValue}
                                                type="text"
                                                className = "inputStyle"
                                                placeholder = "Ime kompanije"
                                        ></Input>
                                    </Col>
                                    <Col className = "labelEmailContainer s10">
                                        <p align="left" className="caEmailLabel">Email</p>
                                    </Col>
                                    <Col className = "inputEmailContainer s10">
                                        <Input onChange={this.inputEmailChanged}
                                                value={this.state.inputEmailValue}
                                                type="text"
                                                className = "inputStyle"
                                                placeholder = "Email"
                                                onKeyPress={this.inputLoginEnterPressed}
                                        ></Input>
                                    </Col>
                                    <Col className = "labelEmailContainer s10">
                                        <p align="left" className="caEmailLabel caLabel">Sifra</p>
                                    </Col>
                                    <Col className = "inputEmailContainer s10">
                                        <Input onChange={this.inputPasswordChanged}                                   
                                            value={this.state.inputpasswordValue}
                                            type="password"
                                            className = "inputStyle"
                                            placeholder = "Sifra"
                                        ></Input>
                                    </Col>
                                    <Col className = "labelEmailContainer s10">
                                        <p align="left" className="caEmailLabel caLabel">Ponovite sifru</p>
                                    </Col>
                                    <Col className = "inputPasswordContainer s10">
                                        <Input onChange={this.inputRetypePasswordChanged}
                                                value={this.state.inputRetypePasswordValue}
                                                type="password"
                                                className = "inputStyle"
                                                placeholder = "Ponovite sifru"
                                                onKeyPress={this.inputRetypePasswordEnterPressed}
                                        ></Input>
                                    </Col>
                                </Col>
                                <Col className = "btnCaContainer s12">
                                    <Button className = "btnCa red center-align s3" onClick={this.btnCaClicked}>
                                        Napravi nalog
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

export default CreateAccount;