
import React from 'react';
import {connect} from 'react-redux';
import {getpokemons} from '../../src/actions/index';
import {Link} from 'react-router';

import logo from '../img/pokeball.png'
import bg from '../img/hero-background.jpg';
import {Animated} from 'react-animated-css';
import SearchBar from './search';
import Palette from 'react-palette';
import Modal from 'react-modal';
import { debounce, inRange, isNil, omit } from 'lodash';


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')


let loaded;

class ModalBox extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(pokemon) {
    return (
            <Palette image={process.env.PUBLIC_URL + `/img/${this.props.pokeNum}.png`}>
      {palette => (
      <div>

        <button className="info-btn" style={{ backgroundColor: palette.darkVibrant }} onClick={this.openModal}>View Info</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          testData={this.state.testData}
          style={{ backgroundColor: palette.lightVibrant }}
        >
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}> 
        <div className="pokeBox" style={{ backgroundColor: palette.lightVibrant }}>
          <button onClick={this.closeModal}><p>x</p></button>
          <p className="num">{this.props.pokeNum}</p>
              <h2 style={{ color: palette.darktVibrant }}>{this.props.pokeName}</h2>

              <Animated animationIn="shake" isVisible={true}> 
              <img
                className="sprites large"
                src={process.env.PUBLIC_URL + `/img/${this.props.pokeNum}.png`}
              />
              </Animated>

         </div> 
         </Animated>    
        </Modal>
        
      </div>
        )}
       </Palette>       
    );
  }
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons
    }
}

export default connect(mapStateToProps, {getpokemons})(ModalBox);