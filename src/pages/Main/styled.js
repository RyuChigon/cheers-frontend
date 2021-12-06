import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  min-height: 700px;
  background: linear-gradient(90deg, #fb5d23 50%, #0f6ab0 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContainer2 = styled.div`
  width: 95vw;
  height: 90vh;
  min-width: 1140px;
  min-height: 630px;
  background: #9ac167;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  // align-items: center;
  align-items: end;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const NoticeBox = styled.div`
  width: 100vw;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  opacity: 0.7;
  font-size: 2rem;
  color: #9f9f9f;
  position: absolute;
  bottom: 100px;

  z-index: 11;
`;

export const HanhwaLogo = styled.img`
  position: absolute;
  top: 70px;
  left: 100px;
  opacity: 0.7;
`;

export const SamsungLogo = styled.img`
  position: absolute;
  top: 70px;
  right: 100px;
  opacity: 0.7;
`;
