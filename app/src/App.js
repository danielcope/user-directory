import React, { Component } from 'react'
import User from './components/User'
import Header from './components/Header'
import './App.css';
import data from './data'

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      page: 1,
      data: data
    }
  }



  
  render () {



    return (
      <div className="App">
        <Header />
        <User />
      </div>
    );
  }
}
export default App;
