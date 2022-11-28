import styled from 'styled-components';
import bgImage from '../assets/bgImage.svg';

export const Main = styled.main`
  display: flex;
`;

export const MainSearch = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EFF3F9;
  width: 100%;
  height: 100vh;

  .search-header {
    background: rgb(0,59,229);
    background: url(${bgImage}) 
    no-repeat, linear-gradient(90deg, rgba(0,59,229,1) 0%, rgba(0,213,226,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25vh;
    gap: 1rem;

    > input {
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    width: 25rem;
    height: 2.5rem;
    border-radius: 1.438rem;
    outline: none;
  }

  > input::placeholder {
    color: white;
    padding: 1rem;
    font-size: 14px;
    line-height: 100%;
    text-transform: uppercase;
  }

  > button {
    border: none;
    background-color: #00D5E2;
    width: 7.063rem;
    height: 2.5rem;
    border-radius: 1.438rem;
    text-align: center;
    text-transform: uppercase;
    color: white;
    font-size: 14px;
    line-height: 14px;
    line-height: 100%;
  }
  }

  .search-results {
    > div {
      align-items: center;
      justify-content: center;
      height: auto;
      max-height: 40vh;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
