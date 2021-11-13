import styled from 'styled-components';

export const UserListContainer = styled.div`
  width: 97%;
  height: 90%;
  background: #bdd99c;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const UserListHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.div`
  display: flex;
  font-family: 'Noto Sans';
  font-size: 1.3rem;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-shadow: 1px 1px 2px #444444;
  padding-left: 20px;
`;

export const List = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: scroll;
  background: #ffffff;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  &::-webkit-scrollbar {
    // width: 100%;
    // height: 80%;
    // height: 100px;
    width: 10px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

export const TrashCan = styled.img`
  height: 40%;
  display: flex;
  padding-left: 20px;
`;
