import { Component } from 'react';
import axios from 'axios';
import './App.css';


class SearchPokemon extends Component {
  state = {
    searchPokemon: '',
  }

  onChange = (event) =>{
    this.setState({searchPokemon:event.target.value})
  }

  onSubmit = (event) =>{
    event.preventDefault();
    this.getPokemon(this.state.searchPokemon)
  }

  getPokemon (pokemon){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        console.log(response.data)
      })
  }
  render () {
    return(
      <div className="App">
        <h1>POKEMON</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange}/>
        </form>
      </div>

    )
  }
}

export default SearchPokemon;
