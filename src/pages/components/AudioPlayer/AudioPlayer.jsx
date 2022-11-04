import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends Component {
  render() {
    const { previewUrl } = this.props;
    return (
      <audio
        data-testid="audio-component"
        src={ previewUrl }
        controls
      >
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
        .
      </audio>
    );
  }
}

AudioPlayer.propTypes = {
  previewUrl: PropTypes.string.isRequired,
};

export default AudioPlayer;
