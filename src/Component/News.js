import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
    <>
        <div className="container my-3">
            <div className="row">
                <div className="col-md-4 my-3">
                <NewsItem  title="1st" description="1st Desc"/>
                </div>
                <div className="col-md-4 my-3">
                <NewsItem  title="2nd" description="2nd Desc"/>
                </div>
                <div className="col-md-4 my-3">
                <NewsItem  title="3rd" description="3rd Desc"/>
                </div>
                <div className="col-md-4 my-3">
                <NewsItem  title="4th" description="4th Desc"/>
                </div>
                <div className="col-md-4 my-3">
                <NewsItem  title="4th" description="4th Desc"/>
                </div>
                <div className="col-md-4 my-3">
                <NewsItem  title="4th" description="4th Desc"/>
                </div>
            </div>
        </div>
    
    
    
    
    
    
    
    </>
    )
  }
}

export default News