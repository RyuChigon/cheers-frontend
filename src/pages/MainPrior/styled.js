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

export const HeaderContainer = styled.div`
  width: 100vw;
  min-width: 1200px;
  height: 50px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 20;
`;

export const CommunicationContainer = styled.div`
  display: flex;
  align-items: end;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 20;
`;

export const ViewPointContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 20;
`;
