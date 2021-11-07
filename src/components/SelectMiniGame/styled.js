import styled from 'styled-components';

export const GameContainer = styled.div`
  width: 90%;
  height: 80%;
  background: #bdd99c;
  border-radius: 30px;
  margin: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding-top: 10px;
`;

export const TextContainer = styled.div`
  width: 100%
  height: 30%
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const Text = styled.div`
  display: flex;
  font-family: 'Noto Sans';
  font-size: 1rem;
  color: #ffffff;
  align-items: center;
  justify-items: center;
  font-weight: bold;
  text-shadow: 1px 1px 2px #444444;
`;

export const Games = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Game = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  background: #ffffff;
  margin: 2%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
  align-items: center;
  justify-content: center;
  // cursor: pointer;
`;
