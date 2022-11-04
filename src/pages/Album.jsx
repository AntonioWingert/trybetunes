import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import getMusics from '../services/musicsAPI';
import MusicCard from './components/MusicCard/MusicCard';

class Album extends Component {
  state = {
    musicsList: [],
    albumArt: '',
    albumName: '',
    artistName: '',
    isLoading: false,
    musicsReturn: false,
  };

  componentDidMount() {
    this.getMusicAPI();
  }

  getMusicAPI = async () => {
    this.setState({ isLoading: true });
    const { match: { params: { id } } } = this.props;
    const music = await getMusics(id);
    this.setState({
      musicsList: music,
      albumArt: music[0].artworkUrl100,
      albumName: music[0].collectionName,
      artistName: music[0].artistName,
      isLoading: false,
      musicsReturn: true,
    });
  };

  render() {
    const { isLoading,
      musicsList,
      albumArt,
      albumName,
      artistName,
      musicsReturn,
    } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {isLoading && <Loading />}
        <div>
          <img src={ albumArt } alt={ albumName } />
          <p data-testid="artist-name">
            {artistName}
          </p>
          <p data-testid="album-name">
            {albumName}
          </p>
          {
            musicsReturn && musicsList.slice(1).map((music) => (
              <MusicCard
                trackName={ music.trackName }
                previewUrl={ music.previewUrl }
                key={ music.trackId }
              />
            ))
          }
        </div>

      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default Album;
