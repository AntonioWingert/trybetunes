import React, { Component } from 'react';
import getMusics from '../services/musicsAPI';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import MusicCard from './components/MusicCard/MusicCard';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Album extends Component {
  state = {
    musicList: [],
    favoriteList: [],
    albumArt: '',
    albumName: '',
    artistName: '',
    isLoading: false,
    mscFetched: false,
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
    }, this.requestMusics);
  };

  requestMusics = async () => {
    this.setState({ isLoading: true });
    const { favoriteList } = this.state;
    const { match: { params: { id } } } = this.props;

    const musics = await getMusics(id);
    const musicsWithFavs = musics.map((music) => {
      let isChecked = false;
      const findMusic = favoriteList.find((m) => m.trackId === music.trackId);
      if (findMusic) isChecked = true;
      return ({ ...music, checked: isChecked });
    });
    this.setState({
      musicList: musicsWithFavs,
      albumArt: musics[0].artworkUrl100,
      albumName: musics[0].collectionName,
      artistName: musics[0].artistName,
      isLoading: false,
      mscFetched: true,
    });
  };

  favoriteMusics = async (music) => {
    const { musicList } = this.state;
    const selectedMusic = musicList.findIndex(({ trackId }) => trackId === music.trackId);

    this.setState({ isLoading: true });
    if (musicList[selectedMusic].checked) {
      musicList[selectedMusic].checked = false;
      await removeSong(music);
    } else {
      musicList[selectedMusic].checked = true;
      await addSong(music);
    }
    this.setState({ isLoading: false, musicList });
  };

  render() {
    const {
      isLoading,
      musicList,
      albumArt,
      albumName,
      artistName,
      mscFetched,
    } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        {isLoading && <Loading />}
        <div>
          <img src={ albumArt } alt={ albumName } />
          <h2 data-testid="album-name">
            { albumName }
          </h2>
          <h2 data-testid="artist-name">
            { artistName }
          </h2>
        </div>
        <div>
          {mscFetched && musicList.slice(1).map((music) => (
            <MusicCard
              trackName={ music.trackName }
              previewUrl={ music.previewUrl }
              trackId={ music.trackId }
              favoriteMusic={ () => this.favoriteMusics(music) }
              checked={ music.checked }
              key={ music.trackId }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Album;
