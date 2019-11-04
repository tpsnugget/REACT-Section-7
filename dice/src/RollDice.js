import React, { Component } from "react"
import Die from "./Die"
import "./RollDice.css"

class RollDice extends Component {
   constructor(props) {
      super(props)
      this.state = {
         die1: 1,
         die2: 2,
         rolling: false
      }
      this.dieRoll = this.dieRoll.bind(this)
   }
   dieRoll() {
      this.setState({
         die1: Math.floor(Math.random() * 6) + 1,
         die2: Math.floor(Math.random() * 6) + 1,
         rolling: true
      })
      setTimeout(() => {
         this.setState({ rolling: false })
      }, 1000)
   }


   render() {
      return (
         <div className="RollDice">
            <span><Die face={this.state.die1} rolling={this.state.rolling} /></span>
            <span><Die face={this.state.die2} rolling={this.state.rolling} /></span>
            <div><button className="RollDice-button" onClick={this.dieRoll} disabled={this.state.rolling}>
               {this.state.rolling ? "Rolling..." : "Roll Dice"}
            </button></div>
         </div>
      )
   }
}

export default RollDice