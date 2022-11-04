import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import { createUser } from './services/userAPI';
import searchAlbumsAPI from './services/searchAlbumsAPI';

class App extends React.Component {
  state = {
    nickname: '',
    isLoading: false,
    redirect: false,
    inputArtistName: '',
    searchResults: [],
    searchAux: false,
    searchArtistName: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validateButton = () => {
    const { nickname } = this.state;
    const MIN_NUMBER = 3;
    const valid = nickname.length >= MIN_NUMBER;
    return valid;
  };

  validateButtonSearch = () => {
    const { inputArtistName } = this.state;
    const MIN_NUMBER = 2;
    const valid = inputArtistName.length >= MIN_NUMBER;
    return valid;
  };

  getUserAPI = () => {
    const { nickname } = this.state;
    this.setState({ isLoading: true }, async () => {
      await createUser({ name: nickname });
      this.setState({ isLoading: false, redirect: true });
    });
  };

  getAlbumAPI = async () => {
    const { inputArtistName } = this.state;
    this.setState({ searchArtistName: inputArtistName });
    this.setState({ isLoading: true, inputArtistName: '' });
    const results = await searchAlbumsAPI(inputArtistName);
    this.setState({
      searchResults: results,
      isLoading: false,
      searchAux: true,
    });
  };

  render() {
    const { nickname,
      isLoading,
      redirect,
      inputArtistName,
      searchResults,
      searchAux,
      searchArtistName,
    } = this.state;
    return (
      <Switch>
        <Route exact path="/">
          <Login
            nickname={ nickname }
            handleChange={ this.handleChange }
            isValid={ this.validateButton() }
            createUser={ this.getUserAPI }
            isLoading={ isLoading }
            redirect={ redirect }
          />
        </Route>
        <Route path="/search">
          <Search
            inputArtistName={ inputArtistName }
            isValid={ this.validateButtonSearch() }
            handleChange={ this.handleChange }
            getAlbumAPI={ this.getAlbumAPI }
            searchResults={ searchResults }
            isLoading={ isLoading }
            searchAux={ searchAux }
            searchArtistName={ searchArtistName }
          />
        </Route>
        <Route path="/album/:id">
          <Album />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/profile/edit">
          <ProfileEdit />
        </Route>
        <Route path="">
          <NotFound />
        </Route>
      </Switch>

    );
  }
}

export default App;
