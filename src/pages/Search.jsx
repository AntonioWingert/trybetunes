import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';

class Search extends Component {
  render() {
    const { isValid, artistName, handleChange } = this.props;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            value={ artistName }
            name="artistName"
            type="text"
            data-testid="search-artist-input"
            onChange={ handleChange }

          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ !isValid }
          >
            Pesquisar

          </button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  isValid: PropTypes.bool.isRequired,
  artistName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Search;
