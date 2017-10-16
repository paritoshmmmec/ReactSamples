import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';
import Welcome from './Welcome';

export default class App extends Component {
  constructor() {
    super()
    this.persons = [{ Id: 1, firstName: "Paritosh" },
    { Id: 2, firstName: "Service" }];
  }

  myFunction(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
  }

  render() {
    var args = [0, 1, 2];
    this.myFunction.apply(null, args);
    this.myFunction(...args);
    var element = this.persons.map((name, index) =>
      <ListItem key={name.Id} Name={name.firstName} index={index} />
    );

    return (
      <div>
        <Welcome name="paritosh"/>
        <ul>{element}</ul>
      </div>
    );
  }

}
