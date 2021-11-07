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

export const HalfContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UserZone = styled.div`
  width: 45%;
  height: 80%;
  background: #a8c9d1;
  display: flex;
  flex-direction: row;
  justify-content: center:
  align-items: center;
  padding: 10px 50px 30px 0;
`;

export const U1Container = styled.div`
  width: 34%;
  height: 100%;
  background: #123123;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const U3Container = styled.div`
  width: 34%;
  height: 100%;
  background: #123123;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Logo1 = styled.img`
  width: 110px;
  height: 100px;
  top: 0px;
  left: 0px;
`;

export const Logo2 = styled.img`
  width: 150px;
  height: 100px;
  top: 0px;
  left: 0px;
`;

export const Character = styled.img`
  height: 100px;
  position: absolute;
  top: ${props => `${props.position[0] + 100}px`};
  left: ${props => `${props.position[1] + 80}px`};
`;

export const CheerGuide = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

export const CommunicationContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
