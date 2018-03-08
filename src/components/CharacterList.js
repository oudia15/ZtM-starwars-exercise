import React, { Component } from 'react';
import Character from './Character';
import 'tachyons';

class CharacterList extends Component {
  render() {
    const characters = this.props.chars ? this.props.chars: [];
    return (
      <div className="">
        {
          characters.map((char, i) => {
            return (
                  <Character
                    key = {i}
                    char = {char}
                    />
            );
          })
         }
      </div>
    );
  }
}

export default CharacterList;
