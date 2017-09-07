import React, { Component } from 'react';

export default class House extends Component {
  constructor() {
    super()

    this.state = {
      
    }
  }

  render() {

    const members = this.props.members.map(member => <li key={member}> {member} </li>)

    return (
      <div className="house" 
      style={
        {
          color: this.props.house.font, background: this.props.house.background, borderColor: this.props.house.border
        }}
      >
        <h1>{this.props.house.title}</h1>
        <ul>
          {members}
        </ul>
      </div>
    )
  }
}