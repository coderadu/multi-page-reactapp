import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './styles/App.css'

import Nav from './components/Nav'
import Home from './components/Home'
import Info from './components/Info'
import Error from './components/Error'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <div className="main">
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/info" component={Info}/>
              <Route component={Error}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default App