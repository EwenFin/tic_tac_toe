import React from 'react'
import ReactDOM from 'react-dom'
import Board from '../components/Board.jsx'



class BoardContainer extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state ={

  //   }
  // } 

  render(){
    return(
      <div>
        <Board/>
      </div>
      )
  }
}

export default BoardContainer