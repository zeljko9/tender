import React from 'react';
import './profile.css';
import { Container , Row, Col, Card, Button } from 'react-materialize';
import { Input } from 'reactstrap';
import KeyWords from "./keyWords";

//ca = create account
class Profile extends React.Component{

    constructor(){
        super();
        this.inputEmailChanged = this.inputEmailChanged.bind(this);
        this.inputPasswordChanged = this.inputPasswordChanged.bind(this);
        this.inputCompanyNameChanged = this.inputCompanyNameChanged.bind(this);
        this.inputRetypePasswordChanged = this.inputRetypePasswordChanged.bind(this);
        this.btnCaClicked = this.btnCaClicked.bind(this);
        this.inputRetypePasswordEnterPressed = this.inputRetypePasswordEnterPressed.bind(this);
        this.onKeyWordAdded = this.onKeyWordAdded.bind(this);
        this.iconCancelKeywordClicked = this.iconCancelKeywordClicked.bind(this)
        this.btnResetPassClicked = this.btnResetPassClicked.bind(this)

        this.state = {
            inputCompanyNameValue: "",
            inputEmailValue: "",
            inputPasswordValue: "",
            inputRetypePasswordValue: "",
            keyWordsList: ["prvi", "drugij vec malo duzi","jh tdghdghd  gd hd ghfdg d","jvfjh gcfghfcg", "hkvfjghc"],
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

    onKeyWordAdded(keyWord){
        let tmpKeyWordsList = this.state.keyWordsList
        tmpKeyWordsList.push(keyWord)
        this.setState({
            keyWordsList: tmpKeyWordsList
        })
    }

    iconCancelKeywordClicked(key){
        let tmpKeyWordsList = this.state.keyWordsList
        tmpKeyWordsList.splice(key, 1)
        this.setState({
            keyWordsList: tmpKeyWordsList
        })
    }

    btnResetPassClicked(){
        window.location.replace('/forgottenPassword')
    }

    render(){
        return (
            <Container className = "caContainer">
                <Row className="caRow">
                    <Col className="offset-xl2 s12 m11 l11 xl8">
                        <Card className = "cardCa">
                            <Row>
                                <h5>Profil</h5>
                                <Col className="offset-s1 s11">
                                    <Col className = "labelCompanyNameContainer s10">
                                        <p align="left" className="caLabel tLabel">Ime kompanije</p>
                                    </Col>
                                    <Col className = "inputCompanyNameContainer s10">
                                        <Input onChange={this.inputCompanyNameChanged}
                                                value={this.state.inputCompanyNameValue}
                                                type="text"
                                                className = "inputStyle"
                                                placeholder = "Ime kompanije"
                                        ></Input>
                                    </Col>
                                    <Col className = "labelCompanyNameContainer s10">
                                        <p align="left" className="caLabel tLabel">Kljucne reci</p>
                                    </Col>
                                    <Col className = "s12 pKwContainer">
                                        <KeyWords onKeyWordAdded={this.onKeyWordAdded} isProfile={true}
                                            iconCancelKeywordClicked = {this.iconCancelKeywordClicked} 
                                            keyWordsList = {this.state.keyWordsList}></KeyWords>
                                    </Col>
                                    <Col className = "labelCompanyNameContainer s10">
                                        <p align="left" className="caLabel tLabel">Email pretplata</p>
                                    </Col>
                                    <Col className="s12">
                                        <form action="#" className="profileRadioButtonsContainer">
                                            <p>
                                                <label>
                                                    <input className="with-gap" name="rbSubscription" type="radio" defaultChecked />
                                                    <span>Dnevno</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input className="with-gap" name="rbSubscription" type="radio"/>
                                                    <span>Nedeljno</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input className="with-gap" name="rbSubscription" type="radio" />
                                                    <span>Mesecno</span>
                                                </label>
                                            </p>
                                            
                                        </form>
                                    </Col>
                                </Col> 
                                <Col className = "pResetPassContainer offset-s1 s11 valign-wrapper">
                                        <p className="labelResetPass">Resetuj sifru</p>
                                        <Button className = "red center-align s3" onClick={this.btnResetPassClicked}>
                                            Promeni sifru
                                        </Button>
                                </Col>
                                <Col className = "btnCaContainer s12">
                                    <Button className = "btnCa red center-align s3" onClick={this.btnCaClicked}>
                                        Sacuvaj
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

export default Profile;