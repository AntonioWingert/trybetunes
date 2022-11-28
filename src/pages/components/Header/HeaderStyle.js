import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 15.625rem;
  height: 100vh;

`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 2rem;

  > img {
    width: 10rem;
  }

 > h1 {
  text-transform: capitalize;
  color: #444955;
 }
`;

export const Links = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  color: #444955;
  align-items: flex-start;
  height: 8.8rem;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;
