import React, { Component } from 'react';
/**
 * Footer conatins info about me with links to my portfolio,github,and email
 * includes API credit
 */
class MyFooter extends Component {
    render(){
    return(
        <div className="info">
            <div className="stay-left">
                <div>Made with the help of 
                    <span>
                        <b><a className="pokeAPI dont-link" href="https://pokeapi.co/"> The RESTful Pokémon API</a></b>
                    </span>
                </div>
                <div>Pokémon and Pokémon character names are trademarks of Nintendo.</div>
            </div>
            <div className="stay-right">
                <div>Jessica Waltz</div>
                <div>
                    <span>
                        <a className="portfolio dont-link" href="https://jessicawaltzsportfolio.herokuapp.com/">My Portfolio</a>
                    </span>
                </div>
                <div>
                    <span>
                        <a className="github dont-link" href="https://github.com/JessicaWaltz">My Github</a>
                    </span>
                </div>
                <div>
                    <span>
                        <a className="email dont-link" href="mailto:jessicawaltz93@gmail">My Email</a>
                    </span>
                </div>
            </div>
        </div>
    )
    }
}
export default MyFooter;