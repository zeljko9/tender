import React from 'react';
import { Button, Col, Container, Row } from 'react-materialize';
import { Input } from 'reactstrap';
import './mainPage.css';

//fp = forgotten password

class ForgottenPassword extends React.Component {

    constructor(){
        super();
        this.inputEmailChanged = this.inputEmailChanged.bind(this);
        this.btnFpClicked = this.btnFpClicked.bind(this);

        this.state = {
            inputEmailValue: "",
        }

    }

    inputEmailChanged(e) {
        this.setState({inputEmailValue: e.target.value})
    }
    btnFpClicked(){
        window.location.replace('/newPassword')
    }
    
    render(){
        return (
            <Container>
                <Row>
                    <Col className = "s12">
                        <h5>Zaboravljena lozinka?</h5>
                    </Col>
                    <Col className = "fpInputEmailContainer offset-m1 offset-l2  offset-xl3 s12 m10 l8 xl6">
                        <Input onChange={this.inputEmailChanged}
                                value={this.state.inputEmailValue}
                                type="email"
                                className = "inputStyle fpInputEmail" //koristim ovu klasu da ne bi pisao duplo kod za stilizovanje input-a
                                placeholder = "Email address"
                        ></Input>
                     </Col>
                     <Col  className = "s12">
                        <Button className = "btnFp grey" onClick={this.btnFpClicked}>
                            Pretrazi
                        </Button>
                     </Col>
                </Row>
            </Container>
        )
    }
}

export default ForgottenPassword;