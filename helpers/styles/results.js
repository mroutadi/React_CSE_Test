import styled from 'styled-components';

export const ResultBar = styled.div`
  width: 100%;
  overflow-y: auto;
  & > img {
    width: 100px;
    position: relative;
    top: 25vh;
  }
 
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(255, 0, 0, 3);
    background-color: transparent;
  }
`