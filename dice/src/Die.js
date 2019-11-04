import React, { Component } from "react"
import "./Die.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiceOne} from '@fortawesome/free-solid-svg-icons'
import {faDiceTwo} from '@fortawesome/free-solid-svg-icons'
import {faDiceThree} from '@fortawesome/free-solid-svg-icons'
import {faDiceFour} from '@fortawesome/free-solid-svg-icons'
import {faDiceFive} from '@fortawesome/free-solid-svg-icons'
import {faDiceSix} from '@fortawesome/free-solid-svg-icons'



class Die extends Component {
   
   render() {

      if(this.props.face === 1){return <span className="Die-piece"><FontAwesomeIcon icon={faDiceOne} /></span>}
      else if(this.props.face === 2){return <span className="Die-piece"><FontAwesomeIcon icon={faDiceTwo} /></span>}
      else if(this.props.face === 3){return <span className="Die-piece"><FontAwesomeIcon icon={faDiceThree} /></span>}
      else if(this.props.face === 4){return <span className="Die-piece"><FontAwesomeIcon icon={faDiceFour} /></span>}
      else if(this.props.face === 5){return <span className="Die-piece"><FontAwesomeIcon icon={faDiceFive} /></span>}
      else{return <span className="Die-piece"><FontAwesomeIcon icon={faDiceSix} /></span>}

   }
}

export default Die