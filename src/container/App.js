import React, { Component } from 'react';
import './App.css';
import CharacterList from '../components/CharacterList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import 'tachyons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/').then(response => {
      return response.json();
    })
    .then(char => {
      console.log(char);
      return char;
    })
    .then(char => {
      this.setState({characters: char.results});
    })
  }

  onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredChar = this.state.characters.filter((char) => {
      return char.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title h2 i courier"> Starwars Characters Infos </h1>
          <SearchBox searchChange = {this.onSearchChange}/>
        </header>
        <div className='container'>
          <Scroll >
            <CharacterList chars = {filteredChar} />
          </ Scroll>
        </div>
      </div>
    );
  }
}

export default App;
