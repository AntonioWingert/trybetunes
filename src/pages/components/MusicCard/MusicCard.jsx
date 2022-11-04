import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

class MusicCard extends Component {
  render() {
    const {
      trackName,
      previewUrl,
      trackId,
      checked,
      favoriteMusic,
    } = this.props;

    return (
      <div>
        <h3>{trackName}</h3>
        <div>
          <AudioPlayer previewUrl={ previewUrl } />
          <label htmlFor={ trackId }>
            <input
              type="checkbox"
              name="favorita"
              id={ trackId }
              data-testid={ `checkbox-music-${trackId}` }
              onChange={ favoriteMusic }
              checked={ checked }
            />
            Favorita
          </label>
        </div>
      </div>
    );
  }
}

MusicCard.defaultProps = {
  checked: false,
  favoriteMusic: () => console.log('default favoriteMusic'),
  trackId: 0,
};

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number,
  checked: PropTypes.bool,
  favoriteMusic: PropTypes.func,
};

export default MusicCard;
