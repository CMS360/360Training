import React from 'react'
// import API from '../utils/API'
// import { Nav } from '../components/Nav'

export class Home extends React.Component{

  constructor(props){
    super(props)

      this.state = {
      }
  }
  
 
render(){

    return(
      <div id='mainDiv'>
       <h1>Hello World</h1>
       <br/>
       <a href="/TestPage">Test Page found at '/TestPage'</a>
      </div>
          )

 }
}
