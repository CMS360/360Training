import React from 'react'
import API from '../utils/API'
// import { Nav } from '../components/Nav'

export class TestPage extends React.Component{

  constructor(props){
    super(props)

      this.state = {
      }
  }
  
  testRoute = id =>{
    API.saveOne("users",{first_name:"Jason", last_name:"Navarro",email:"NoEmail@yahoo.com",fbID:1})
    .then(res => console.log(res))
  }

  testRoute2 = id =>{
    API.getAll("users")
    .then(res => console.log(res))
  }

  testRoute3 = id =>{
    API.getOne("users", id)
    .then(res => console.log('gotOne', res))
  }

  testRoute4 = SendId =>{
      
    API.deleteOne("users", SendId)
    .then(res => API.getAll("users")
    .then(res2 => console.log('Deleted',res2)))
  }
  
  testRoute5 = SendId =>{
    var sendObj = {
        'last_name' : "Pasquanel",
        'email':'MoreEmail@email.com'

    }
  API.updateOne("users", SendId, sendObj)
  .then(res => API.getAll("users")
  .then(res2 => console.log('Updated',res2)))
}

render(){

    return(
      <div>
       <button onClick={()=>this.testRoute(5)}>Create</button>
       <button onClick={()=>this.testRoute2(5)}>Get All</button>
       <button onClick={()=>this.testRoute3(4)}>Get One</button>
       <button onClick={()=>this.testRoute4(3)}>Delete</button>
       <button onClick={()=>this.testRoute5(4)}>Update</button>
      </div>
          )

 }
}
