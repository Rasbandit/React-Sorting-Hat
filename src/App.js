import React, { Component } from 'react';
import Sorter from './components/Sort';
import House from './components/House';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      members: [],
      houses: [
        {
          title: 'Gryffindor',
          background: '#740001',
          font: '#eeba30',
          border: '#d3a625'
        },
        {
          title: 'Slytherin',
          background: '#2a623d',
          font: '#aaaaaa',
          border: '#000000'
        }, 
        {
          title: 'Hufflepuff',
          background: '#f0c75e',
          font: '#372e29',
          border: '#372e29'
        },
        {
          title: 'Ravenclaw',
          background: '#222f5b',
          font: '#5d5d5d',
          border: '#5d5d5d'
        } ],
      gMembers: [],
      sMembers: [],
      hMembers: [],
      rMembers: [],
    }

    this.sort = this.sort.bind(this)
  }

  sort(member) {
    var houseNumber = Math.floor(Math.random() * 4);
    switch(houseNumber) {
      case 0:
        this.setState({
          members: [...this.state.members, member],
          gMembers: [...this.state.gMembers, member]
        })
        break;
      case 1:
        this.setState({
          members: [...this.state.members, member],
          sMembers: [...this.state.sMembers, member]
        })
        break;
      case 2:
        this.setState({
          members: [...this.state.members, member],
          hMembers: [...this.state.hMembers, member]
        })
        break;
      case 3:
        this.setState({
          members: [...this.state.members, member],
          rMembers: [...this.state.rMembers, member]
        })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="top">
          <h1 className="title">Sorting Hat</h1>
          <Sorter 
            sortMember={this.sort} 
          />
        </div>
        <div className="houses">
          <House
            home={this.state.houses[0]}
            members={this.state.gMembers}
          />
          <House
            home={this.state.houses[1]}
            members={this.state.sMembers}
          />
          <House
            home={this.state.houses[2]}
            members={this.state.hMembers}
          />
          <House
            home={this.state.houses[3]}
            members={this.state.rMembers}
          />
        </div>
      </div>
    );
  }
}

export default App;
