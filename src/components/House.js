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
          color: this.props.home.font, background: this.props.home.background, borderColor: this.props.home.border
        }}
      >
        <h1>{this.props.home.title}</h1>
        <ul>
          {members}
        </ul>
      </div>
    )
  }
}