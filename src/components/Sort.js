import React, {Component} from 'react';

export default class Sorter extends Component{
 constructor() {
   super()

  this.state = {
    userInput: ''
  }
 }

 
 handleChange(userInput) {
  this.setState({
    userInput
  })
 }


  render() {
    return (
      <div>
        <input type="text" 
          onChange={(event)=>{this.handleChange(event.target.value)}}
        />
        <button 
          onClick={()=> {this.props.sortMember(this.state.userInput)} }
        >Sort </button>
      </div>
    )
  }
}