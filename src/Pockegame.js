//determine whith group of pockemons win as per their experience

import React, {Component} from 'react';
import Pockedex from './Pockedex';

class Pockegame extends Component{
    static defaultProps = {
        pockemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }


    render(){
        // create two groups of cards
        let hand1 = [];
        let hand2 = [...this.props.pockemon];  //all elemnt of pockemon array inside defaultProps
        //now we will randomly pick one element form hand2 and push it to hand1 until equal number in both
        while(hand1.length < hand2.length){
            //get a random pockemon from hand2
            let randIndex = Math.floor(Math.random() * hand2.length); //select the index randomly
            let randPockemon = hand2.splice(randIndex, 1)[0]; //splice 1 element from hand2 by randIndex
            // console.log(randPockemon);
            hand1.push(randPockemon); //push it to hand1
        }

        //accumulate experience of two sets using reduce method
        let exp1 = hand1.reduce((exp, pockemon) => exp + pockemon.base_experience, 
        0);
        let exp2 = hand2.reduce((exp, pockemon) => exp + pockemon.base_experience, 
        0);

        return(
            <div>
                <Pockedex pockemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
                <Pockedex pockemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>

            </div>
        );
    }
}

export default Pockegame;