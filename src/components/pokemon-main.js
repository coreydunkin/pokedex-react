import React from 'react';
import {Animated} from 'react-animated-css';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(pokemon) {
    this.setState(prevState => ({
      
    }));
  }
  render() {
    let pokemon = this.props.pokemon;
    let num = this.props.id;

    switch (pokemon) {
      case "nidoran-f":
        pokemon = "nidoran♀";
        break;
      case "nidoran-m":
        pokemon = "nidoran♂";
        break;
    }
    const id = this.props.id;

    return (
        <li
          className={'pokemon-single-container col-md-3 col-sm-6 ' + pokemon}
          onClick={() => this.handleClick(pokemon)}
        >
          <div className="pokebox">
            <img
              className="sprites"
              src={process.env.PUBLIC_URL + `/img/${id}.png`}
            />
            <p className="name"> #{num}: {pokemon}</p>
          </div>
        </li>
    );
  }
}


export default Pokemon;
