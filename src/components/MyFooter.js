import React, { Component } from 'react';
class MyFooter extends Component {
    render(){
    return(
        <div className="info">
            <h2>Jessica Waltz</h2>
            <div className="job">Full stack developer</div>
            <div className="phone">(360)567-5682</div>
            <div>
                <span>
                    <span>
                        <a className="portfolio dont-link" href="https://jessicawaltzsportfolio.herokuapp.com/">My Portfolio</a>
                    </span>
                </span>
                <span>
                    <span className="px-2">•</span>
                    <span>
                        <a className="github dont-link" href="https://github.com/JessicaWaltz">Github</a>
                    </span>
                </span>
                <span>
                    <span className="px-2">•</span>
                    <span>
                        <a className="email dont-link" href="mailto:jessicawaltz93@gmail">Email</a>
                    </span>
                </span>
            </div>
        </div>
    )
    }
}
export default MyFooter;