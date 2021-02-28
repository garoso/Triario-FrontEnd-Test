import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      penguins: []
    };

    axios.get("https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&exlimit=5&format=json&origin=*&utf8=&srsearch=Ping%C3%BCinos_de_ficci%C3%B3n")
      .then(response => {
        this.setState({
          penguins: response.data.query.search
        })
      })
      .catch( error => {
        console.log(error);
      })
  }

render() {
  return (
    <div>
      <ul>
      <h1>Penguins</h1>
        {this.state.penguins.slice(0,5).map(penguin =>
          <li key={penguin.title}>{penguin.title}</li>
        )}
      </ul>
    </div>

    );
  }
}

export default App;
