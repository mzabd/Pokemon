import React, {Component} from 'react';
import './Pockecard.css';


//this component will retrun a single pokce card
//const for pockemon api from : https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'; //for this api the id is in three digit 

//functio to make id in three digit like 2 -> 002, 222 -> 22
//if the number is less than or equal we put 00 infront of it and then slice it from back like 22 -> 0022 -> 002
let padToThree = (number) => ( number <= 999 ? `00${number}`.slice(-3) : number);
class Pockecard extends Component{
    render(){
        //define image source with api and id
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;


        return(
            <div className="Pockecard">
                <h2 className="Pockecard-title">{this.props.name}</h2>
                <div className="Pockecard-img">
                    <img  src={imgSrc} alt={this.props.name}   /> 
                </div>
                
                <div className="Pockecard-data">Type: {this.props.type}</div>
                <div className="Pockecard-data">EXP: {this.props.experience}</div>
            </div>
        )
    }
}

export default Pockecard;

// width="150" height="150"