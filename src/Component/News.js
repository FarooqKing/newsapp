import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-08-06&sortBy=publishedAt&apiKey=67b50a31aad7403e94ac9ff75bbe194a&page=2&pageSize=30";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles:parseData.articles})
    
  }
  handlePrevbtn= async ()=>{
    console.log('p clicked')
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-08-06&sortBy=publishedAt&apiKey=67b50a31aad7403e94ac9ff75bbe194a&page=${this.state.page - 1}&pageSize=30`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page : this.state.page - 1,
      articles:parseData.articles
    })
  }
  handleNextbtn= async ()=>{
    console.log('N clicked')
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-08-06&sortBy=publishedAt&apiKey=67b50a31aad7403e94ac9ff75bbe194a&page=${this.state.page + 1}&pageSize=30`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page : this.state.page + 1,
      articles:parseData.articles
    })
  }
  render() {
    return (
    <>
        <div className="container my-4" >
        
            <div className="row">
              
            {this.state.articles.map((element, index)=>{
               return <div className="col-md-4" key={index}>
               <NewsItem  title={element.title} description={element.description}
               imageUrl={element.urlToImage} newsUrl={element.url}/>
               </div>
              })}
              
              
            </div>
            <div className="container d-flex justify-content-between my-4">
            <button type="button" disabled={this.state.page<1} className="btn btn-dark" onClick={this.handlePrevbtn}>Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextbtn}>Next</button>
            </div>
        </div>
           

    </>
    )
  }
}

export default News