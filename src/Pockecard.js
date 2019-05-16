import React, {Component} from 'react';
import './Pockecard.css';


//this component will retrun a single pokce card
//const for pockemon api from : https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pockecard extends Component{
    render(){
        //define image source with api and id
        let imgSrc = `${POKE_API}${this.props.id}.png`;
        console.log(imgSrc);

        return(
            <div className="Pockecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/> 
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.experience}</div>
            </div>
        )
    }
}

export default Pockecard;