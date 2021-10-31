import styled from 'styled-components';

export const CharacterContainer = styled.div`
  width: 970px;
  height: 604px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Noto Sans';
  font-size: 1.8rem;
  color: #9f9f9f;
  padding-top: 10px;
`;

export const CharacterContent = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled.img`
  margin: 0 100px;
  cursor: pointer;
`;

export const CharacterFrame = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Character = styled.img`
  height: 235px;
  display: flex;
  justify-content: center;
`;

export const TeamButtonContent = styled.div``;

export const TeamButton = styled.button`
  width: 150px;
  height: 44px;
  background: ${props => (props.team === 'Hanwha' ? '#fb5d23' : '#2196f3')};
  margin: 0 30px;
  border-radius: 10px;
  border: transparent;
  font-size: 1.3rem;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: ${props => (props.team === 'Hanwha' ? '#ef4304' : '#0c85e8')};
  }
`;

export const InputContent = styled.div`
  width: 380px;
  background: #818181;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: transparent;
  border-radius: 10px;
  margin: 40px 0;
`;

export const InputNickname = styled.input`
  width: 305px;
  height: 53px;
  background-color: #ffffff;
  border: transparent;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
  font-size: 1.3rem;
  padding-left: 20px;

  ::-webkit-input-placeholder {
    color: #b7b7b7;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  }
`;

export const EnterFrame = styled.div``;

export const Enter = styled.img`
  margin-top: 1px;
  margin-left: 5px;
  cursor: pointer;
`;
