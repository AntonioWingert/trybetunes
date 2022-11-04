import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

class MusicCard extends Component {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <div>
        <p>{trackName}</p>
        <AudioPlayer previewUrl={ previewUrl } />
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};

export default MusicCard;
