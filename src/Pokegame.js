import React, { Component } from "react";
import Pokedex from "./Pokedex";

export class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: "004", name: "Charmander", type: "fire", base_experience: 62 },
      { id: "007", name: "Squirtle", type: "water", base_experience: 63 },
      { id: "011", name: "Metapod", type: "bug", base_experience: 72 },
      { id: "012", name: "Butterfree", type: "flying", base_experience: 178 },
      { id: "025", name: "Pikachu", type: "electric", base_experience: 112 },
      { id: "039", name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: "094", name: "Gengar", type: "poison", base_experience: 225 },
      { id: "133", name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };
  render() {
    const hand1 = [];
    const hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      const raid = Math.floor(Math.random() * hand2.length);
      const rancard = hand2.splice(raid, 1)[0];
      hand1.push(rancard);
    }
    const exp1 = hand1.reduce(
      (exp, pokemon) => (exp += pokemon.base_experience),
      0
    );
    const exp2 = hand2.reduce(
      (exp, pokemon) => (exp += pokemon.base_experience),
      0
    );
    return (
      <div>
        <h1>Pokegame</h1>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;
