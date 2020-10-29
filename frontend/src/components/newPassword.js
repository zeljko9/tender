import React from 'react';
import { Button, Col, Container, Row } from 'react-materialize';
import { Input } from 'reactstrap';
import './mainPage.css';

//np = new password
//RPassword = repeated password

class NewPassword extends React.Component {

    constructor(){
        super();
        this.inputPasswordChanged = this.inputPasswordChanged.bind(this);
        this.inputRPasswordChanged = this.inputRPasswordChanged.bind(this);
        this.btnNpClicked = this.btnNpClicked.bind(this);

        this.state = {
            inputPasswordValue: "",
            inputRPasswordValue: "",
        }

    }

    inputPasswordChanged(e) {
        this.setState({inputPasswordValue: e.target.value})
    }
    
    inputRPasswordChanged(e) {
        this.setState({inputRPasswordValue: e.target.value})
    }
    btnNpClicked(){
        window.location.replace('/')
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col className = "s12">
                        <h5>Unesite novu šifru</h5>
                    </Col>
                    <Col className = "npInputPasswordContainer  offset-m1 offset-l2  offset-xl3 s12 m10 l8 xl6">
                        <Input onChange={this.inputPasswordChanged}
                                value={this.state.inputPasswordValue}
                                type="password"
                                className = "inputStyle"
                                placeholder = "Nova sifra"
                        ></Input>
                     </Col>
                     <Col className = "npInputRPasswordContainer  offset-m1 offset-l2  offset-xl3 s12 m10 l8 xl6">
                        <Input onChange={this.inputRPasswordChanged}
                                value={this.state.inputRPasswordValue}
                                type="password"
                                className = "inputStyle"
                                placeholder = "Ponovite novu sifru"
                        ></Input>
                     </Col>
                     <Col  className = "s12">
                        <Button className = "btnNp red" onClick={this.btnNpClicked}>
                            Promeni
                        </Button>
                     </Col>
                </Row>
            </Container>
        )
    }
}

export default NewPassword;