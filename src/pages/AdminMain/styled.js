import styled from 'styled-components';

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

export const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SubContainerLeft = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SubUserListGameLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SubContainerRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserListContainer = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GameContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center;
  padding-bottom: 10px;
`;
