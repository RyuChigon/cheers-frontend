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

export const SpaceBar = styled.img`
  padding-top: 5px;
  align-items: bottom;
  padding-top: 100px;
`;

export const ScoreFont_left = styled.div`
  font-size: 100px;
  position: center;
  padding-left: 100px;
`;

export const ScoreFont_right = styled.div`
  font-size: 100px;
  position: center;
  padding-right: 100px;
`;

export const Logo_left = styled.img`
  position: center;
  padding-left: 100px;
  bottom: 0px;
  left: 0px;
`;

export const Logo_right = styled.img`
  position: center;
  padding-right: 100px;
  bottom: 0px;
  left: 0px;
`;
