import styled from 'styled-components';

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChatList = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChatContent = styled.div`
  width: 300px;
  // width: 100%;
  height: 40px;
  margin: 0;
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #ffffff;
  border: transparent;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
`;

export const Input = styled.input`
  // width: 230px;
  width: 50%;
  height: 30px;
  margin-left: 20px;
  margin-right: 15px;
  background: #ffffff;
  border: transparent;
  font-size: 0.9rem;
  justify-content: flex-start;

  ::-webkit-input-placeholder {
    color: #b7b7b7;
  }

  &:focus {
    outline: none;
  }
`;

export const Enter = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;
