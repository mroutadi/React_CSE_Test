import styled from 'styled-components';

export const MainInput = styled.input`
  width: 100%;
  border: none;
  color: #EEE;
  border-bottom: 1px solid #CCC;
  background-color: transparent;
  height: 100px;
  font-size: 4rem;
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
  padding: 0 15px;
  position: relative;
  @media screen and (max-width: 600px) {
    font-size: 3rem;
    height: 70px;
    top: 15px;
  }
`