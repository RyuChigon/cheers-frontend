import styled from 'styled-components';

export const CharacterContainer = styled.div`
  position: absolute;
  top: ${props => `${props.position[0] + 100}px`};
  left: ${props => `${props.position[1] + 80}px`};
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
`;

export const Emoticon = styled.img`
  width: 30px;
  height: 30px;
  display: inline-block;
  content: '';
  border: 0px;
  position: relative;
  top: 15px;
  left: 20px;
`;

export const CharacterImage = styled.img`
  height: 100px;
  outline: 0;
  border: 0;
`;

export const SpaceBar = styled.img`
  position: center;
  bottom: 0px;
  left: 0px;
`;

export const SpaceBarContainer = styled.div`
  width: 100%;
  height: 100%;
  // display: flex;
  justify-content: center;
  bottom: 0px;
`;
