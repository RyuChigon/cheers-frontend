import styled from 'styled-components';

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  // object-fit: contain;
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
  width: 100;
  height: 100;
  outline: 0;
  border: 0;
  object-fit: contain;
`;
