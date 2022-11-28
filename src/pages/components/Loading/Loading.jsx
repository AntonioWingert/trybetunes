import React, { Component } from 'react';
import { MainContent, Span } from './LoadingStyle';

export default class Loading extends Component {
  render() {
    return (
      <MainContent>
        <Span>
          Carregando...
        </Span>
      </MainContent>
    );
  }
}
