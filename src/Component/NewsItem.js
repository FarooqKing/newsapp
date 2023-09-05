import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description} = this.props
    return (
        <>
      <div>
        <div className="card" style={{width: "18rem"}}>
         < img src="https://images.barrons.com/im-791405/social" className="card-img-top" alt="..."/>
             <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 <p className="card-text">{description}</p>
                 <a href ="/newsDetails" className="btn btn-primary">News Details</a>
             </div>
        </div>
      </div>
      </>
    )
  }
}

export default NewsItem