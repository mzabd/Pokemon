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
        //we can use condition here and use that in  return 
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pockedex-winner">Winning Hand</h1>
        }else{
            title = <h1 className="Pockedex-looser">Loosing Hand</h1>
        }
        return(
            <div className="Pockedex">
                {title}
                <h4>Total experience: {this.props.exp}</h4>
                {/* <p className={this.props.isWinner ? "Pockedex-winner":"Pockedex-looser"}>{this.props.isWinner ? 'WINNER!!' : 'LOOSER'}</p> */}
               {/* instead of above condtition */}
               
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