import styled from 'styled-components';

export const KingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 0;
`;

export const VideoContainer = styled.div`
  width: 700px;
  height: 450px;
  display: flex;
  left: ${props => `${props.x}px`};
  top: ${props => `${props.y}px`};
  //position: relative;
  position: absolute;
  z-index: 2;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 0;
`;
