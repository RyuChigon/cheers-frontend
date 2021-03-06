import styled from 'styled-components';

export const GameProgressContainer = styled.div`
  width: 90%;
  height: 40%;
  background: #bdd99c;
  border-radius: 30px;
  margin: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  // width: 100%
  // height: 30%
  display: flex;
  font-family: 'Noto Sans';
  font-size: 1rem;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  font-weight: bold;
  text-shadow: 1px 1px 2px #444444;
`;

export const Progress = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: #000000;
`;

export const NoticeBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  opacity: 0.7;
  font-size: 2rem;
  color: #9f9f9f;

  z-index: 11;
`;
