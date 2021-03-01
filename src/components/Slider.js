import React, { Component, createRef } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import resort1 from '../assets/img/resort1.jpg';
import resort2 from '../assets/img/resort2.jpg';
import resort3 from '../assets/img/resort3.jpg';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = createRef();
  }

  componentDidMount() {
    M.Slider.init(this.sliderRef.current, {
      indicators: false,
      height: 500,
      transition: 500,
      interval: 6000,
    });
  }

  renderSlides() {
    const slides = [
      {
        image: resort1,
        title: 'Take Your Dream Vacation',
        align: 'center',
      },
      {
        image: resort2,
        title: 'We Work With All Budgets',
        align: 'left',
      },
      {
        image: resort3,
        title: 'Group And Individual Get Aways',
        align: 'right',
      },
    ];

    return (
      <ul id="home" className="slides scrollspy">
        {slides.map(({ image, title, align }) => (
          <li>
            <img src={image} alt="" />
            <div className={`caption ${align}-align`}>
              <h2>{title}</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </h5>
              <a href="#!" class="btn btn-large">
                Learn More
              </a>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <section className="slider" ref={this.sliderRef}>
        {this.renderSlides()}
      </section>
    );
  }
}

export default Slider;
