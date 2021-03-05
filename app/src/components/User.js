import React, { Component } from 'react'
import Nav from './Nav'
import data from '../data'
import '../App.css';



class User extends Component {
  constructor() {
    super ();
    
    this.state = {
      index: 0,
      data: data,
    }
    
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }
  
  
  
  increase () { 
    if (this.state.index < this.state.data.length - 1){
      this.setState({ index: this.state.index + 1 })
      console.log(this.state.index)
    }
  }
  
  decrease () {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 })
    }
  }
  
  
  render () {
    
    let favoriteOne = this.state.data[this.state.index].favoriteMovies[0]
    let favoriteTwo = this.state.data[this.state.index].favoriteMovies[1]
    let favoriteThree = this.state.data[this.state.index].favoriteMovies[2]
    
    return (
      <div className="userBody">
        
        <section className="user-section">
        <span className="counter">{this.state.index + 1}/{this.state.data.length}</span>
          <p className='user'>{this.state.data[this.state.index].name.first + " "}{this.state.data[this.state.index].name.last}</p>
          <p className="user-info">{"From: " + this.state.data[this.state.index].city + ", " + this.state.data[this.state.index].country}</p>
          <p className="user-info">{"Job Title: " + this.state.data[this.state.index].title}</p>
          <p className="user-info">{"Employer: " + this.state.data[this.state.index].employer}</p>
          <section className="movie-favs">
            <span class="movies">Favorite Movies:</span>
            <span className="list-items">{"1. " +favoriteOne}</span>
            <span className="list-items">{'2. ' + favoriteTwo}</span>
            <span className="list-items">{'3. ' +favoriteThree}</span>
            <Nav increase={this.increase} decrease={this.decrease}/>
          </section>
         



        </section>
      </div>
    )
  }

}


export default User

//User:

//Display user at a set index


