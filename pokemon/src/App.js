import { Component } from 'react';
import axios from 'axios';
import './App.css';


class SearchPokemon extends Component {
  state = {
    searchPokemon: '',
    pokemonData: []
  }

  onChange = (event) =>{
    this.setState({searchPokemon:event.target.value})
  }

  onSubmit = (event) =>{
    event.preventDefault();
    this.getPokemon(this.state.searchPokemon)
  }

  async getPokemon (pokemon){
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      this.setState({pokemonData: response.data})
  }
  render () {
    return(
      <div className="App">
        <h1>POKEMON</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange}/>
        </form>
        <h2>id:{this.pokemonData}</h2>
      </div>

    )
  }
}

export default SearchPokemon;
