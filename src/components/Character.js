import React, { Component } from 'react';
import 'tachyons';
import './Character.css'

class Character extends Component {
  render() {
    console.log(this.props.name);
    return (
      <div className="courier dib outline w-20 pa2 ma2 single_char grow">
        <h3 className='f3'>{this.props.char.name}</h3>
        <p><span className='fw8'>Gender: </span> {this.props.char.gender}</p>
        <p><span className='fw8'>Number of movies: </span> {this.props.char.films ? this.props.char.films.length: ''}</p>
        <p><span className='fw8'>Birth Year: </span> {this.props.char.birth_year}</p>
        <p><span className='fw8'>Height: </span> {this.props.char.height}</p>
        <p><span className='fw8'>Mass: </span> {this.props.char.mass}</p>
        <p><span className='fw8'>Skin Color: </span> {this.props.char.skin_color}</p>
        <p><span className='fw8'>Hair Color: </span> {this.props.char.hair_color}</p>
        <p><span className='fw8'>Eye Color: </span> {this.props.char.eye_color}</p>
      </div>
    );
  }
}

export default Character;
