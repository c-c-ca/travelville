import React, { Component } from 'react';
import Card from './Card';

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

class Contact extends Component {
  renderCollection() {
    const items = [
      'Travelville Agency',
      '555 Beach rd, Suite 33',
      'Miami FL, 55555',
    ];

    return (
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Location</h4>
        </li>
        {items.map(item => (
          <li className="collection-item">{item}</li>
        ))}
      </ul>
    );
  }

  renderForm() {
    const inputNames = ['name', 'phone', 'email'];

    const inputFields = [
      ...inputNames.map(name => (
        <>
          <input type="text" id={name} />
          <label for={name}>{capitalize(name)}</label>
        </>
      )),
      <>
        <textarea className="materialize-textarea" id="message"></textarea>
        <label for="message">Message</label>
      </>,
    ];

    return (
      <Card color="grey" shade="lighten-3" title="Please fill out this form">
        {inputFields.map(field => (
          <div className="input-field">{field}</div>
        ))}
        <input type="submit" value="Submit" class="btn" />
      </Card>
    );
  }

  render() {
    return (
      <section id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Card
                color="teal"
                textColor="white-text"
                title="Contact Us For Booking"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </Card>
              {this.renderCollection()}
            </div>
            <div className="col s12 m6">{this.renderForm()}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
