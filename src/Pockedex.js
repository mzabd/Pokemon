import React, {Component} from 'react';
import Pockecard from './Pockecard';
import './Pockedex.css';


class Pockedex extends Component{
    //set default props for all used pockemon
    // static defaultProps = {
    //     pockemon: [
    //         {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    //         {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    //         {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    //         {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    //         {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    //         {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    //         {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    //         {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    //       ]
    // }
    render(){

        return(
            <div className="Pockedex">
                <h1>Pockedex</h1>
                <p>Total experience: {this.props.exp}</p>
                <p>{this.props.isWinner ? 'Winner' : 'Looser'}</p>
                {/* looping pockemong array form the default props */}
                <div className="Pockedex-cards">
                    {this.props.pockemon.map( (p) =>(
                        // use single pockecard component
                        <Pockecard id={p.id} name={p.name} type={p.type} experience={p.base_experience} />
                    ) )}
                </div>

                
            </div>
        );
    }
}

export default Pockedex;