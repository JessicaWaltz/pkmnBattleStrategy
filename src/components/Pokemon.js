import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    pokemon: state.get('selectedPokemon'),
  }
}

class Pokemon extends Component {
  render() {
    return (
      <article className="Pokemon">
        <div className="Sprite">
          <p>{`http://www.pokestadium.com/sprites/xy/${this.props.pokemon.get('name')}.gif`}</p>
          <img
            src={this.props.pokemon.get('sprites').toJS().front_default}
            crossOrigin="anonymous"
            ref="sprite"
            id="sp"
          />
        </div>
        <div className="Detail">
          <div className="display-none">
            store types associated with pokemon type to use in results component
          </div>
          <h4 className="Detail-name">
            {this.props.pokemon.get('name')}
          </h4>
        </div>
      </article>
    )
  }
}

export default connect(mapStateToProps)(Pokemon);