import React, { Component } from "react";
import Newsitem from "./Newsitem.js";
// import PropTypes from 'prop-types'

export class News extends Component {
  //   static propTypes = {}
  constructor() {
    console.log("Hello");
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }
  async componentDidMount(){
    try {
      let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=e9db3275b76d4da594cdd2f46f3dd8d1&pageSize=20";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults}) 
    } catch (error) {
      alert("Something went wrong.Please try again later");
    }
  }
  handleNextClick= async()=>{
    console.log("logging");
    if (this.state.page + 1>Math.ceil(this.state.totalResults/20)){
      
    }
    else{

      try {
        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=e9db3275b76d4da594cdd2f46f3dd8d1&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState(
          {
            page:this.state.page + 1,
            articles:parsedData.articles
          });
      } 
      catch (error) {
        alert("Something went wrong.Please try again later");
      }

    }
      
        
      
  }
  handlePrevClick =async()=>{
    try {
      let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=e9db3275b76d4da594cdd2f46f3dd8d1&page=${this.state.page - 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState(
        {
          page:this.state.page - 1,
          articles:parsedData.articles
        });
    } 
    catch (error) {
      alert("Something went wrong.Please try again later");
    }
    
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title!==null?element.title:""}
                    description={element.description!==null?element.description.slice(0,77):""}
                    imgUrl={element.urlToImage!==null?element.urlToImage:"https://tse1.mm.bing.net/th?id=OIP.aV3_1sg9QEdADlu5byNWbwAAAA&pid=Api&rs=1&c=1&qlt=95&w=149&h=110"}
                    newsUrl={element.url}
                  />
                  
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
                  <button type="button" disabled={this.state.page<=1} className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
                  <button type="button" className="btn btn-success" onClick={this.handleNextClick} disabled={this.state.page + 1>Math.ceil(this.state.totalResults/20)}>Next &rarr;</button>
                  </div>
        </div>
      </div>
    );
  }
}

export default News;
