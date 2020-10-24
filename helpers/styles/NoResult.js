import styled from 'styled-components';

export const NoResult = styled.div`
  display: grid;
  width: 320px;
  height: 320px;
  grid-template-rows: 150px 40px;
  transform: translate(-50%, -50%);
  position: relative;
  top: 50%;
  left: 50%;
  text-align: center;
  span {
    color: #3581a2;
    font-family: 'Dosis', sans-serif;
    font-size: 2rem;
  }
  svg {
    width: 100px;
    height: 100px;
    margin: auto;
  }
`