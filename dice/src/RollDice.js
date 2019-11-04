import React, {Component} from "react"
import Die from "./Die"

class RollDice extends Component{
   constructor(props){
      super(props)
      this.state = {
         
      }
   }
   
   render(){
      var dieRoll = Math.floor(Math.random() * 6) + 1
      return <Die face={dieRoll} />
   }
}

export default RollDice