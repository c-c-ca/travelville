import React, { Component } from 'react';

class Follow extends Component {
  renderIcons() {
    const icons = [
      {
        domain: 'facebook.com',
        iconName: 'facebook',
      },
      {
        domain: 'twitter.com',
        iconName: 'twitter',
      },
      {
        domain: 'linkedin.com',
        iconName: 'linkedin',
      },
      {
        domain: 'googleplus.com',
        iconName: 'google-plus',
      },
      {
        domain: 'pinterest.com',
        iconName: 'pinterest',
      },
    ];

    return icons.map(({ domain, iconName }) => (
      <a href={`https://${domain}`} target="_blank" class="white-text">
        <i className={`fab fa-${iconName} fa-4x`}></i>
      </a>
    ));
  }

  render() {
    return (
      <section className="section section-follow teal darken-2 white-text center">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h4>Follow Travelville</h4>
              <p>Follow us on social media for special offers</p>
              {this.renderIcons()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Follow;
