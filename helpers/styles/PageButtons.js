import styled from 'styled-components';

export const PageButtons = styled.div`
  height: 70px;
  width: 100%;
  text-align: center;
  span {
    font-family: 'Dosis', sans-serif;
    font-size: 1.25rem;
  }
  @media screen and (max-width: 600px) {
    span {
      font-size: 1rem;
    }
  }
`

export const PageButton = styled.button`
  width: 120px;
  height: 40px;
  margin: 15px;
  font-size: 0.8rem;
  font-weight: bolder;
  background-color: #FFF;
  border: 0.5px solid #9570d855;;
  border-radius: 5px;
  color: #9570d8;
  transition: 0.3s;
  &:hover:enabled {
    transition: 0.3s;
    cursor: pointer;
    background-color: #9570d855;
    color: #FFF;
  }
  &:disabled {
  background-color: #EEEA;
  }
  @media screen and (max-width: 600px) {
    width: 70px;
    height: 30px;
    font-size: 0.75rem
  }
`
