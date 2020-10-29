import React from 'react';
import { Button, Card, Col, Row, Table } from 'react-materialize';
import { Input } from 'reactstrap';
import './mainPage.css';
import { Pagination } from '@material-ui/lab';
import axios from 'axios';
import KeyWords from "./keyWords";

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
        this.onBtnCountPagClicked = this.onBtnCountPagClicked.bind(this);
        this.getOffers = this.getOffers.bind(this);
        this.pageChanged = this.pageChanged.bind(this);
        this.tableTenderThClicked = this.tableTenderThClicked.bind(this);
        this.onProfileTabClicked = this.onProfileTabClicked.bind(this);
        this.onKeyWordAdded = this.onKeyWordAdded.bind(this);
        this.iconCancelKeywordClicked = this.iconCancelKeywordClicked.bind(this)

        this.state = {
          inputKeywordValue: "",
          tableData:[{name: "lazar", prezime: "minic", godina: "2019.", narucilac: "Lazar  kompani", status: "Objavljen", datum: "12.3.2019."},
          {name: "laza", prezime: "mini", godina: "2019.", narucilac: "Lazar  kompani", status: "Objavljen", datum: "12.3.2019."},
          {name: "laz", prezime: "min", godina: "2019.", narucilac: "Lazar  kompani", status: "Objavljen", datum: "12.3.2019."},
          {name: "la", prezime: "min", godina: "2019.", narucilac: "Lazar  kompani", status: "Objavljen", datum: "12.3.2019."},],
          keyWordsList: ["prvi", "drugij vec malo duzi","jhfyjf hhg  gghd gh dd gdgdgh hgdgtdghdghd  gd hd ghfdg d","jvfjh gcfghfcg", "hkvfjghc"],
          count: 5,
          pageCount: 20,
          selectedPage: 1,
          sortBy: "",
          isAsc: true
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
                  <Col className="offset-s1 s12">
                    <KeyWords onKeyWordAdded={this.onKeyWordAdded} iconCancelKeywordClicked = {this.iconCancelKeywordClicked} keyWordsList = {this.state.keyWordsList}></KeyWords>
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