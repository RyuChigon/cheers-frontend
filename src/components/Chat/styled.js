import styled from 'styled-components';

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export const Expand = styled.img`
  width: 48px;
  height: 24px;
  cursor: pointer;
  position: relative;
  top: 2.5px;
  z-index: 3;
`;

export const NotExpand = styled.img`
  width: 14;
  height: 9;
  cursor: pointer;
  position: relative;
  bottom: 420px;
  z-index: 3;
`;

export const ExpandField = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.5);
  border: transparent;
  border-radius: 18px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  overflow: auto;
  overflow-x: hidden;
  padding-bottom: 40px;
  padding-top: 30px;

  position: relative;
  top: 40px;
  z-index: 2;
`;

export const ChatContent = styled.div`
  width: 300px;
  height: 35px;
  margin: 0;
  display: flex;
  align-items: center;
  background: #ffffff;
  border: transparent;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
  z-index: 2;
`;

export const Input = styled.input`
  width: 230px;
  height: 30px;
  margin-left: 20px;
  margin-right: 15px;
  background: #ffffff;
  border: transparent;
  font-size: 0.9rem;

  ::-webkit-input-placeholder {
    color: #b7b7b7;
  }

  &:focus {
    outline: none;
  }

  z-index: 5;
`;

export const Output = styled.input`
  width: 200px;
  height: 100px;
  margin-left: 20px;
  margin-right: 15px;
  background: #ffffff;
  border: transparent;
  font-size: 0.9rem;

  ::-webkit-input-placeholder {
    color: #b7b7b7;
  }

  &:focus {
    outline: none;
  }

  z-index: 10;
`;

export const Enter = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 6;
`;

export const Balloon_me = styled.div`
  position: relative;
  margin: 5px 10px 5px 10px;
  width: 280px;
  background: #67794f;
  border-radius: 10px;
  color: #ffffff;

  z-index: 20;
`;

export const Balloon_a = styled.div`
  position: relative;
  margin: 5px 10px 5px 10px;
  width: 280px;
  // height: 50px;
  background: #cc8345;
  border-radius: 10px;
  color: #ffffff;

  z-index: 20;
`;

export const Balloon_b = styled.div`
  position: relative;
  margin: 5px 10px 5px 10px;
  width: 280px;
  // height: 50px;
  background: #5372b4;
  border-radius: 10px;
  color: #ffffff;

  z-index: 20;
`;
