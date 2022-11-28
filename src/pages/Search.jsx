import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Main, MainSearch } from '../Styles/Search';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import MusicCard from './components/MusicCardSearch/MusicCardSearch';

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
      <Main>
        <Header />
        <MainSearch data-testid="page-search">
          <div className="search-header">
            <input
              value={ inputArtistName }
              name="inputArtistName"
              type="text"
              data-testid="search-artist-input"
              onChange={ handleChange }
              placeholder="nome do artista"
            />
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ !isValid }
              onClick={ getAlbumAPI }
            >
              procurar
            </button>
          </div>
          <div className="search-results">
            <h2>
              {success && `Resultado de álbuns de ${searchArtistName}`}
            </h2>
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
        </MainSearch>
      </Main>
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
