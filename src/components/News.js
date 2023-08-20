import React, { Component } from "react";
import Newsitem from "./Newsitem.js";
import Spinner from "./Spinner.js";

export class News extends Component {
  capitalize = (string)=>{
      let str = string.charAt(0).toUpperCase();
      return str + string.slice(1);
  }
  constructor(props) {
    super(props);
    document.title = this.capitalize(this.props.category);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async updateNews(){
    try {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=e9db3275b76d4da594cdd2f46f3dd8d1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    
    } catch (error) {
      alert("Something went wrong.Please try again later");
    }
  }  
  
  async componentDidMount() {
    console.log(this.state.page);
    this.updateNews();
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e9db3275b76d4da594cdd2f46f3dd8d1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      alert("Something went wrong.Please try again later");
    }
  }
  handleNextClick = async () => {
    console.log("Next click");
    await this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
    this.updateNews();

  };
  handlePrevClick = async () => {
    console.log("Previous click");
    await this.setState({ page: this.state.page - 1 });
    console.log(this.state.page);
    this.updateNews();

  };
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center">NewsBuzz - Top {this.capitalize(this.props.category)} Headlines</h2>
          <div className="text-center">
            {this.state.loading === true ? <Spinner /> : ""}
          </div>
            <div className="row">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <Newsitem
                        title={element.title !== null ? element.title : ""}
                        description={
                          element.description !== null
                            ? element.description.slice(0, 77)
                            : ""
                        }
                        imgUrl={
                          element.urlToImage !== null
                            ? element.urlToImage
                            : "https://tse1.mm.bing.net/th?id=OIP.aV3_1sg9QEdADlu5byNWbwAAAA&pid=Api&rs=1&c=1&qlt=95&w=149&h=110"
                        }
                        newsUrl={element.url !== null ? element.url : ""}
                        author={
                          element.author !== null ? element.author : "Unknown"
                        }
                        date={
                          element.publishedAt !== null
                            ? element.publishedAt
                            : ""
                        }
                        source={
                          element.source.name !== null
                            ? element.source.name
                            : "New"
                        }
                      />
                    </div>
                  );
                })}
            </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-success"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
