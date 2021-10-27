import styled from "styled-components";

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
  top: ${props => (props.position[0] + 100) + "px"};
  left: ${props => (props.position[1] + 80) + "px"};
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