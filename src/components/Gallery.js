import React, { Component } from 'react';

const IMAGES_PER_ROW = 4;

const images = [
  'beach',
  'travel',
  'nature',
  'beach,travel',
  'beaches',
  'traveling',
  'bridge',
  'boat',
  'water',
  'building',
  'trees',
  'cruise',
];

class Gallery extends Component {
  renderRow(images) {
    return (
      <div className="row">
        {images.map(image => (
          <div className="col s12 m3">
            <img
              className="materialboxed responsive-img"
              src={`https://source.unsplash.com/1600x900/?${image}`}
              alt=""
            />
          </div>
        ))}
      </div>
    );
  }

  renderImages(images) {
    const rows = [];

    for (let i = 0; i < images.length; i += IMAGES_PER_ROW) {
      rows.push(this.renderRow(images.slice(i, i + IMAGES_PER_ROW)));
    }

    return rows;
  }

  render() {
    return (
      <section id="gallery" className="section section-gallery scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="teal-text">Photo</span> Gallery
          </h4>
          {this.renderImages(images)}
        </div>
      </section>
    );
  }
}

export default Gallery;
