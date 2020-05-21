import React, { Component } from "react";
import "./PokeCard.css";
const baseUrl = " https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
class PokeCard extends Component {
  render() {
    const url = `${baseUrl}${this.props.id}.png`;
    // console.log(url)
    return (
      <div className="Pokecard">
        <h2>{this.props.name}</h2>

        <img src={url} alt={this.props.name} />
        <h4 className="pokecard-data">{this.props.type}</h4>
        <h4 className="pokecard-data">{this.props.exp}</h4>
      </div>
    );
  }
}

export default PokeCard;
