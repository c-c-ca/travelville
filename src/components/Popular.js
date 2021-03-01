import React, { Component } from 'react';

import resort1 from '../assets/img/resort1.jpg';
import resort2 from '../assets/img/resort2.jpg';
import resort3 from '../assets/img/resort3.jpg';

class Popular extends Component {
  renderCards() {
    const cards = [
      {
        image: resort1,
        location: 'Cancun, Mexico',
      },
      {
        image: resort2,
        location: 'The Bahamas',
      },
      {
        image: resort3,
        location: 'Nova Scotia',
      },
    ];

    return cards.map(({ image, location }) => (
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={image} alt="" />
            <span class="card-title">{location}</span>
          </div>
          <div className="card-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <section id="popular" className="section section-popular scrollspy">
        <div className="contaienr">
          <div className="row">
            <h4 className="center">
              <span className="teal-text">Popular</span> Places
            </h4>
            {this.renderCards()}
          </div>
          <div className="row">
            <div className="col s12 center">
              <a href="#contact" className="btn btn-large grey darken-3">
                <i className="material-icons left">send</i> Contact For Booking
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Popular;
