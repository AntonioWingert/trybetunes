import styled from 'styled-components';
import bgImage from '../assets/bgImage.svg';

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url(${bgImage});
  background-size: cover;
  background-position: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 46.875rem;
  height: 28.125rem;
  border-radius: 1rem;
  border: 1px solid #003BE5;
  gap: .5rem;

  > img {
    margin-bottom: 2rem;
  }


  > input {
    border: 1px solid #003BE5;
    border-radius: 1rem;
    width: 25rem;
    height: 2.5rem;
    outline: none;
  }

  > input::placeholder {
    text-align: center;
    color: #003BE5;
  }

  > button {
    font-weight: 700;
    cursor: pointer;
    color: white;
    border-radius: 1rem;
    width: 25rem;
    height: 2.5rem;
    background-color: #003BE5;
  }
`;
