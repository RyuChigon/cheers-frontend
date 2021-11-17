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
  top: 30px;
  left: 20px;
`;

export const CharacterImage = styled.img`
  height: 100px;
  outline: 0;
  border: 0;
`;

export const CharacterName = styled.p`
  margin: 0;
`;

export const MyCharacter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 5px;
`;
