import React, { Component, createRef } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.sideNavRef = createRef();
  }

  componentDidMount() {
    M.ScrollSpy.init(document.querySelectorAll('.scrollspy'), {});
    M.Sidenav.init(this.sideNavRef.current, {});
  }

  renderNavItems() {
    const navItems = [
      { hrefValue: '#home', text: 'Home' },
      { hrefValue: '#search', text: 'Search' },
      { hrefValue: '#popular', text: 'Popular Places' },
      { hrefValue: '#gallery', text: 'Gallery' },
      { hrefValue: '#contact', text: 'Contact' },
    ];

    return navItems.map(({ hrefValue, text }) => (
      <li>
        <a href={hrefValue}>{text}</a>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="teal">
            <div className="container">
              <div className="nav-wrapper">
                <a href="#home" className="brand-logo">
                  Travelville
                </a>
                <a
                  href="#!"
                  data-target="mobile-nav"
                  className="sidenav-trigger"
                >
                  <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                  {this.renderNavItems()}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="mobile-nav" ref={this.sideNavRef}>
          {this.renderNavItems()}
        </ul>
      </div>
    );
  }
}

export default Navigation;
