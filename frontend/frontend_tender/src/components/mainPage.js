import React from 'react';
import { Button, Card, Col, Row, Table } from 'react-materialize';
import { Input } from 'reactstrap';
import './mainPage.css';
import { Pagination } from '@material-ui/lab';
import axios from 'axios';

//kw = keyword

//TODO: username strana

const tableTenderTh = ["Link",
  "Pdf",
  "Narucilac",
  "Naziv postupka",
  "Status",
  "Datum objave",
  "Rok",
  "Budzet"]

class MainPage extends React.Component {

    constructor(){
        super();
        this.inputKeywordChanged = this.inputKeywordChanged.bind(this);
        this.btnAddKeywordClicked = this.btnAddKeywordClicked.bind(this);
        this.iconCancelKeywordClicked = this.iconCancelKeywordClicked.bind(this);
        this.inputKeywordEnterPressed = this.inputKeywordEnterPressed.bind(this);
        this.onBtnCountPagClicked = this.onBtnCountPagClicked.bind(this);
        this.getOffers = this.getOffers.bind(this);
        this.pageChanged = this.pageChanged.bind(this);
        this.tableTenderThClicked = this.tableTenderThClicked.bind(this);
        this.onProfileTabClicked = this.onProfileTabClicked.bind(this);

        this.state = {
          inputKeywordValue: "",
          tableData:[{name: "lazar", prezime: "minic", godina: "2019.", narucilac: "Lazar  kompani", status: "Objavljen", datum: "12.3.2019."},
          {name: "laza", prezime: "mini", godina: "2019.", narucilac: "Lazar  kompani", status: "Objavljen", datum: "12.3.2019."},
          {name: "laz", prezime: "min", godina: "2019.", narucilac: "Lazar  kompani", status: "Objavljen", datum: "12.3.2019."},
          {name: "la", prezime: "min", godina: "2019.", narucilac: "Lazar  kompani", status: "Objavljen", datum: "12.3.2019."},],
          keyWordsList: ["prvi", "drugij vec malo duzi","jhfyjf hhg  gghd gh dd gdgdghdhgdgtdghdghd dg dghd ghd gd hd ghfdg d","jvfjh gcfghfcg", "hkvfjghc"],
          count: 5,
          pageCount: 20,
          selectedPage: 1,
          sortBy: "",
          isAsc: true
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

    getOffers(){
      axios.get('https://jsonplaceholder.typicode.com/posts',{
        params: { 
          keyWords: this.state.keyWordsList,
          page: this.state.selectedPage,
          sortBy: this.state.sortBy,
          isAsc: this.state.isAsc
         }
      })
      .then((response) => console.log(response.request))
      .catch(err => console.log(err))
    }

    pageChanged(page){
      this.setState({selectedPage: page}, this.getOffers)
    }

    componentDidMount() {
      this.getOffers()
    }

    tableTenderThClicked(sortBy){
        this.setState({
          isAsc: !this.state.isAsc,
          sortBy: sortBy
        }, this.getOffers)
    }

    onProfileTabClicked(){
      window.location.replace('/profile')
    }

    render(){
        return (
          <div>
            <nav>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">Tender</a>
                <ul id="nav-mobile" className="right">
                  <li><a href="#"><i className="material-icons">home</i></a></li>
                  <li onClick={this.onProfileTabClicked}><a href="#">Profile</a></li>
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
                    <Col className="s1 btnAddKeywordContainer" style = {{margin: 0}}>
                      <Button className = "btnAddKeyword red" onClick={this.btnAddKeywordClicked}>
                          Dodaj
                      </Button>
                    </Col>
                  </Col>
                  <Col className="offset-s1 s10" style={{marginTop: "10px"}}>
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
                          {tableTenderTh.map((el, key) => 
                            <th key={key} data-field={el} onClick={()=> this.tableTenderThClicked(el)}>
                              <div className="thDataContainer">
                                {el}
                                {this.state.sortBy === el ? 
                                (this.state.isAsc === true ? <a><i className="sortArrow material-icons">arrow_downward</i></a> : <a><i className="sortArrow material-icons">arrow_upward</i></a>) 
                                : null}
                              </div>
                            </th>
                          )}  
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
                  <Col className="offset-s1 s10 paginationContainer">
                    <Col className="s7 pagPageContainer">
                        <Pagination count = {this.state.pageCount}  className = "pagPage" onChange = {(e, page) => {this.pageChanged(page)}}></Pagination>
                      </Col>
                  </Col>
                </Col>
            </Row>
          </div>
        )
    }
}
/*
<Col className="s5 pagCountBtnContainer">
                      <div className="">
                        <Button style = {{backgroundColor: this.state.count === 5 ? "red" : "white"}} className = "btnCountPag" id = "btnCountPag5" onClick = {()=> this.onBtnCountPagClicked(5)}>5</Button>
                        <Button style = {{backgroundColor: this.state.count === 10 ? "red" : "white"}} className = "btnCountPag"  id = "btnCountPag10" onClick = {()=> this.onBtnCountPagClicked(10)}>10</Button>
                        <Button style = {{backgroundColor: this.state.count === 20 ? "red" : "white"}} className = "btnCountPag"  id = "btnCountPag20" onClick = {()=> this.onBtnCountPagClicked(20)}>20</Button>
                      </div>
                    </Col> */
export default MainPage;