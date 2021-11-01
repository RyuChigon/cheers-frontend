import styled from 'styled-components';

export const CharacterContainer = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${props => `${props.position[0] + 100}px`};
  left: ${props => `${props.position[1] + 80}px`};
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
`;
