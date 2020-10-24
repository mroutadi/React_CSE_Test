import styled from 'styled-components';

export const ItemStyle = styled.a`
  width: 225px;
  border: 0.5px solid #a66fb64a;
  display: inline-grid;
  grid-template-rows: 170px 200px;
  height: 375px;
  margin: 10px;
  transition: 0.3s;
  border-radius: 25px;
  text-decoration: none;
  &:hover {
    transition: 0.3s;
    cursor: pointer;
    box-shadow: 0 0 2px 1px #4F4B7CAA;
  }
  img {
    height: 150px;
    max-width: 175px;
    max-height: 175px;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    position: relative;
    border-radius: 15px;
    padding: 10px;
    margin-top: 5px;
    box-shadow: 0 0 1px 0 rgba(63,116,193,0.5);
  }
  div {
    text-align: left;
    margin: 7.5px 10px;
    span {
      color: #4F4B7C;
      font-family: 'Gotu', sans-serif;
      font-size: 1.15rem;
    }
    p {
      color: #8B5F94;
      font-family: 'Open Sans Condensed', sans-serif;
      margin-top: 5px;
      line-height: 1.2rem;
      font-size: 0.9rem
    }
  }
`