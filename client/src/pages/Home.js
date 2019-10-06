import React from 'react'
import API from '../utils/API'
import { Nav } from '../components/Nav'

export class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  testRoute = id =>{
    let sentQuery = 'SELECT * FROM dbo.Companies WHERE id = 2030;'
      API.sales360Query("users", {query: sentQuery})
      .then(res => {console.log(res); return})
    }
    testRoute2 = id =>{
      let sentQuery2 = 'SELECT * FROM dbo.CMS_Articles WHERE ArticleID = 31;'
        API.classic360Query("users", {query: sentQuery2})
        .then(res => {console.log(res); return})
      }
  render() {

    return (
      <div id='mainDiv'>
        <Nav />
        <div className="mainSection">
          <h1>Hello World</h1>
          <br />
          <button onClick={()=>this.testRoute(5)}>Sales 360 Test</button>
          <br/>
          <br/>
          <button onClick={()=>this.testRoute2(5)}>Classic 360 Test</button>
        </div>

      </div>
    )

  }
}
