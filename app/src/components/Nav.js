import React from 'react'
import '../App.css';



const Nav = (props) => {

    return (
      <div className="buttons">
        <button className="nav-button-previous" onClick={props.decrease}> {'<'} Previous</button>
        <button className="nav-button-next" onClick={props.increase}>Next {'>'}</button>
      </div>
    )
  }




export default Nav