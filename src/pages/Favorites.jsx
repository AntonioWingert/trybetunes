import React, { Component } from 'react';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import MusicCard from './components/MusicCard/MusicCard';

class Favorites extends Component {
  state = {
    isLoading: false,
    favoriteList: [],
  };

  componentDidMount() {
    this.catchFavorites();
  }

  catchFavorites = async () => {
    this.setState({ isLoading: true });
    const favoriteMusics = await getFavoriteSongs();
    this.setState({
      favoriteList: favoriteMusics,
      isLoading: false,
    });
  };

  removeMusic = async (music) => {
    this.setState({ isLoading: true });
    await removeSong(music);
    this.setState({
      isLoading: false,
    }, this.catchFavorites);
  };

  render() {
    const { isLoading, favoriteList } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {isLoading ? <Loading /> : favoriteList.map((music) => (
          <MusicCard
            trackName={ music.trackName }
            previewUrl={ music.previewUrl }
            trackId={ music.trackId }
            favoriteMusic={ () => this.removeMusic(music) }
            checked={ music.checked }
            key={ music.trackId }
          />))}
      </div>
    );
  }
}

export default Favorites;
