import React from 'react';
import { Button, Card, Col, Row, Table } from 'react-materialize';
import { Input } from 'reactstrap';
import './mainPage.css';
import { Pagination } from '@material-ui/lab';

//kw = keyword

class MainPage extends React.Component {

    constructor(){
        super();
        this.inputKeywordChanged = this.inputKeywordChanged.bind(this);
        this.btnAddKeywordClicked = this.btnAddKeywordClicked.bind(this);
        this.iconCancelKeywordClicked = this.iconCancelKeywordClicked.bind(this);
        this.inputKeywordEnterPressed = this.inputKeywordEnterPressed.bind(this);
        this.onBtnCountPagClicked = this.onBtnCountPagClicked.bind(this);

        this.state = {
          inputKeywordValue: "",
          tableData:[{name: "lazar", prezime: "minic", godina: "2019.", narucilac: "Lazar  kompani", status: "Objavljen", datum: "12.3.2019."},
          {name: "laza", prezime: "mini", godina: "2019.", narucilac: "Lazar  kompani", status: "Objavljen", datum: "12.3.2019."},
          {name: "laz", prezime: "min", godina: "2019.", narucilac: "Lazar  kompani", status: "Objavljen", datum: "12.3.2019."},
          {name: "la", prezime: "min", godina: "2019.", narucilac: "Lazar  kompani", status: "Objavljen", datum: "12.3.2019."},],
          keyWordsList: ["prvi", "drugij vec malo duzi"],
          count: 5,
          pageCount: 20
        }
    }

    inputKeywordChanged(e) {
      this.setState({inputKeywordValue: e.target.value})
    }

    btnAddKeywordClicked(){
      let tmpKeyWordsList = this.state.keyWordsList
      tmpKeyWordsList.push(this.state.inputKeywordValue)
      this.setState({
        keyWordsList: tmpKeyWordsList,
        inputKeywordValue: ""
      })
    }

    iconCancelKeywordClicked(key){
      let tmpKeyWordsList = this.state.keyWordsList
      tmpKeyWordsList.splice(key, 1)
      this.setState({
        keyWordsList: tmpKeyWordsList
      })
    }

    inputKeywordEnterPressed(e){
      let code = e.keyCode || e.which;
      if (code === 13) {
        this.btnAddKeywordClicked()
      }
    }

    onBtnCountPagClicked(count){
      this.setState({
        count: count
      })
    }

    render(){
        return (
          <div>
            <nav>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">Tender</a>
                <ul id="nav-mobile" className="right">
                  <li><a href="#"><i className="material-icons">home</i></a></li>
                  <li><a href="#">Username</a></li>
                  <li><a href="#">Log out</a></li>
                </ul>
              </div>
            </nav>
            <Row className = "">
                <Col className="offset-s1 s10 mainPageContainer">
                  <Col className="s12" style = {{display: "flex", alignItems: "center"}}>
                    <Col className="offset-s1 s2">
                      <Input onChange={this.inputKeywordChanged}
                              value={this.state.inputKeywordValue}
                              type="text"
                              className = "inputStyle inputKeyword"
                              placeholder = "Dodaj kljucnu rec"
                              onKeyPress={this.inputKeywordEnterPressed}>
                      </Input>
                    </Col>
                    <Col className="s2" style = {{margin: 0}}>
                      <Button className = "btnAddKeyword red" onClick={this.btnAddKeywordClicked}>
                          Dodaj
                      </Button>
                    </Col>
                  </Col>
                  <Col className="offset-s1 s10" >
                    <div className="keyWordCardsContainer">
                      {this.state.keyWordsList.map((keyWord, key) => 
                          <Card key = {key} className = "keyWordCard">
                            <p className = "pKeyWord">{keyWord}</p>
                            <a href="#" className = "cancelKeyWord"onClick={() => this.iconCancelKeywordClicked(key)}><i className="material-icons cancelKeyWordIcon">close</i></a>
                          </Card>
                      )}
                    </div>
                  </Col>
                  <Col className="offset-s1 s10 tenderTableContainer">
                    <Table className = "tenderTable">
                      <colgroup>
                        <col span="1" className = "col1"></col>
                        <col span="1" className = "col2"></col>
                        <col span="1" className = "col3"></col>
                        <col span="1" className = "col4"></col>
                        <col span="1" className = "col5"></col>
                        <col span="1" className = "col6"></col>
                      </colgroup>
                      <thead>
                        <tr>
                          <th data-field="site">Sajt</th>
                          <th data-field="pdf">Pdf</th> 
                          <th data-field="year">Godina</th>
                          <th data-field="client">Narucilac</th>
                          <th data-field="status">Status</th>
                          <th data-field="datum">Datum poslednje objave</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.tableData.map((data, key) => 
                          <tr key = {key}>
                            <td>{data.name}</td>
                            <td>{data.prezime}</td>
                            <td>{data.godina}</td>
                            <td>{data.narucilac}</td>
                            <td>{data.status}</td>
                            <td>{data.datum}</td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </Col>
                  <Col className="s12 paginationContainer">
                    <Col className="offset-s1 s5 pagCountBtnContainer">
                      <div className="">
                        <Button style = {{backgroundColor: this.state.count == 5 ? "red" : "white"}} className = "btnCountPag" id = "btnCountPag5" onClick = {()=> this.onBtnCountPagClicked(5)}>5</Button>
                        <Button style = {{backgroundColor: this.state.count == 10 ? "red" : "white"}} className = "btnCountPag"  id = "btnCountPag10" onClick = {()=> this.onBtnCountPagClicked(10)}>10</Button>
                        <Button style = {{backgroundColor: this.state.count == 20 ? "red" : "white"}} className = "btnCountPag"  id = "btnCountPag20" onClick = {()=> this.onBtnCountPagClicked(20)}>20</Button>
                      </div>
                    </Col>
                    <Col className="offset-s3 s3 pagPageContainer">
                        <Pagination count={20} size="small" className = "pagPage"></Pagination>
                      </Col>
                  </Col>
                </Col>
            </Row>
          </div>
        )
    }
}
/* */
/*  */
export default MainPage;