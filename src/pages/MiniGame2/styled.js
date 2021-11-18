import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  min-height: 700px;
  background: #9ac167;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LowerContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  align-items: center;
  z-index: 0;
`;

export const C1 = styled.div`
  border-radius: 30px;
  display: flex;
  width: 9%;
  height: 270px;
  flex-grow: 1;
  align-items: top;
  position: absolute;
  left: ${props => `${props.position}%`};
  background: #015daf;
  opacity: 0.4;
  z-index: -1;
`;

export const CommunicationContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const RemainTurnTimer = styled.div`
  font-size: 2rem;
  // display: flex;
  position: absolute;
  left: 20px;
  bottom: 10px;
`;

export const Announce = styled.div`
  text-align: center;
`;
