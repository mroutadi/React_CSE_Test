import styled from 'styled-components';

export const Container = styled.div`
 background: rgb(124,81,202);
  background: linear-gradient(335deg, rgba(124,81,202,1) 0%, rgba(174,131,252,0.5)35%, #9998 50%, rgba(63,116,193,0.5) 65%, rgba(63,116,193,1) 100%); 
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 2.5% 10%;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  display: grid;
  grid-template-rows: 20% 80%;
  text-align: center;
  @media screen and (max-width: 600px) {
    padding: 2.5%;
  }
`