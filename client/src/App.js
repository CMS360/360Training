import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {TestPage, Home} from './pages'



const App = () => 
 
<Router>
  
      <div>
       <Route exact path ="/" component={Home}/>
       <Route exact path ="/TestPage" component={TestPage}/>
      </div>

</Router>
    
export default App;