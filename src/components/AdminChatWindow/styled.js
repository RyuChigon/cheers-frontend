import styled from 'styled-components';

export const WindowContainer = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  margin: 1%;
  background: #bdd99c;
`;

export const Text = styled.div`
  display: flex;
  font-family: 'Noto Sans';
  font-size: 1.2rem;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-shadow: 1px 1px 2px #444444;
`;

export const ChatList = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
