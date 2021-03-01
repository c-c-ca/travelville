import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

class Search extends Component {
  componentDidMount() {
    M.Autocomplete.init(document.querySelectorAll('.autocomplete'), {
      data: {
        Aruba: null,
        Cancun: null,
        Hawaii: null,
        Florida: null,
        California: null,
        Jamaica: null,
        Europe: null,
        Bahamas: null,
      },
    });
  }

  render() {
    return (
      <section
        id="search"
        className="section section-search teal darken-1 white-text center scrollspy"
      >
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h3>Search Destinations</h3>
              <div className="input-field">
                <input
                  className="white grey-text autocomplete"
                  type="text"
                  placeholder="Aruba, Cancun, etc..."
                  id="autocomplete-input"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
