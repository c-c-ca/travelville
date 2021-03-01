import React, { Component } from 'react';

class IconBoxes extends Component {
  renderCardPanels() {
    const cards = [
      {
        iconName: 'room',
        title: 'Pick Where',
      },
      {
        iconName: 'store',
        title: 'Travel Shop',
      },
      {
        iconName: 'flight',
        title: 'Fly Cheap',
      },
    ];

    return cards.map(({ iconName, title }) => (
      <div className="col s12 m4">
        <div className="card-panel">
          <i className="material-icons large teal-text">{iconName}</i>
          <h4>{title}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <section className="section section-icons grey lighten-4 center">
        <div className="container">
          <div className="row">{this.renderCardPanels()}</div>
        </div>
      </section>
    );
  }
}

export default IconBoxes;
