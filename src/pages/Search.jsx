import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import MusicCard from './components/MusicCard/MusicCard';

class Search extends Component {
  render() {
    const {
      isValid,
      inputArtistName,
      handleChange,
      getAlbumAPI,
      searchResults,
      isLoading,
      searchAux,
      searchArtistName,
    } = this.props;

    const success = searchAux && searchResults.length > 0;
    const empty = searchAux && searchResults.length === 0;

    return (
      <div data-testid="page-search">
        <Header />
        <input
          value={ inputArtistName }
          name="inputArtistName"
          type="text"
          data-testid="search-artist-input"
          onChange={ handleChange }
          placeholder="Insira o nome do Artista ou Banda"

        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ !isValid }
          onClick={ getAlbumAPI }
        >
          Pesquisar

        </button>

        <h2>
          {success && `Resultado de álbuns de: ${searchArtistName}`}
        </h2>
        <div>
          {isLoading && <Loading />}
          <div>
            {success && searchResults.map((music) => (
              <MusicCard
                artistName={ music.artistName }
                artworkUrl={ music.artworkUrl100 }
                collectionId={ music.collectionId }
                collectionName={ music.collectionName }
                key={ music.collectionId }
              />
            )) }
            { empty && <span>Nenhum álbum foi encontrado</span>}
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  isValid: PropTypes.bool.isRequired,
  inputArtistName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getAlbumAPI: PropTypes.func.isRequired,
  searchResults: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchAux: PropTypes.bool.isRequired,
  searchArtistName: PropTypes.string.isRequired,
};

export default Search;
