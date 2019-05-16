import React, {Component} from 'react';
import './App.css';
import Pockedex from './Pockegame';
import Pockegame from './Pockegame';

class App extends Component{
  render(){
    return (
        <div className="App">
          {/* each pockecard includes id, name , type, and experience as props */}
          {/* <Pokecard id={4} name="Charmander" type="fire" experience="62" /> */}
          {/* <Pockedex /> */}
          <Pockegame />
        </div>
      );

  }


}

export default App;
