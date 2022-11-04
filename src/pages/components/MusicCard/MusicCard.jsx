import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MusicCard extends Component {
  render() {
    const {
      artistName,
      collectionId,
      collectionName,
      artworkUrl,

    } = this.props;

    return (
      <Link
        to={ `album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <div>
          <img src={ artworkUrl } alt={ collectionName } />
          <p>{artistName}</p>
          <p>{collectionName}</p>
        </div>
      </Link>
    );
  }
}

MusicCard.propTypes = {
  artistName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  collectionName: PropTypes.string.isRequired,
  artworkUrl: PropTypes.string.isRequired,
};

export default MusicCard;
