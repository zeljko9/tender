import React from 'react';
import './keyWords.css';
import { Container , Row, Col, Card, Button } from 'react-materialize';
import { Input } from 'reactstrap';

//ca = create account
class KeyWords extends React.Component{

    constructor(){
        super();
        this.addKeyword = this.addKeyword.bind(this)
        this.inputKeywordChanged = this.inputKeywordChanged.bind(this)
        this.inputKeywordEnterPressed = this.inputKeywordEnterPressed.bind(this)
        this.state ={
            inputKeywordValue: ""
        }
    }

    inputKeywordChanged(e) {
        this.setState({inputKeywordValue: e.target.value})
    }

    addKeyword(){
        if (this.state.inputKeywordValue !== "") {
            this.props.onKeyWordAdded(this.state.inputKeywordValue)
            this.setState({
                inputKeywordValue: ""
            })
        }
    }

    inputKeywordEnterPressed(e){
        let code = e.keyCode || e.which;
        if (code === 13) {
           this.addKeyword()
        }
    }
    
    render(){
        let inputClassname = this.props.isProfile ? "s4 kwInput" : "s2 kwInput"
        return (
            <div>
                 <Col className="s12 keyWordsInputContainer valign-wrapper">
                    <Col className={inputClassname}>
                      <Input onChange={this.inputKeywordChanged}
                              value={this.state.inputKeywordValue}
                              type="text"
                              className = "inputStyle inputKeyword"
                              placeholder = "Dodaj kljucnu rec"
                              onKeyPress={this.inputKeywordEnterPressed}>
                      </Input>
                    </Col>
                    <Col className="s1 btnAddKeywordContainer" style = {{margin: 0}}>
                      <Button className = "btnAddKeyword red" onClick={this.addKeyword}>
                          Dodaj
                      </Button>
                    </Col>
                  </Col>
                  <Col className="s12 keyWordsContainer">
                    <Col className="s10" style={{marginTop: "10px"}}>
                        <div className="keyWordCardsContainer">
                        {this.props.keyWordsList.map((keyWord, key) => 
                            <Card key = {key} className = "keyWordCard">
                                <p className = "pKeyWord">{keyWord}</p>
                                <a href="#" className = "cancelKeyWord"onClick={() => this.props.iconCancelKeywordClicked(key)}><i className="material-icons cancelKeyWordIcon">close</i></a>
                            </Card>
                        )}
                        </div>
                    </Col>
                  </Col>
            </div>
        )
    }
}

export default KeyWords;