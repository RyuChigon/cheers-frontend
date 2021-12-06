import styled from 'styled-components';

export const Balloon_general = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Balloon_me = styled.div`
  position: relative;
  margin: 5px 10px 5px 10px;
  padding: 5px;
  background: #67794f;
  border-radius: 10px;
  color: #ffffff;
  justify-content: flex-end;
  word-break: break-all;

  z-index: 20;
`;

export const Balloon_a = styled.div`
  position: relative;
  margin: 5px 10px 5px 10px;
  padding: 5px;
  background: #cc8345;
  border-radius: 10px;
  color: #ffffff;
  justify-content: flex-start;
  word-break: break-all;

  z-index: 20;
`;

export const Balloon_b = styled.div`
  position: relative;
  margin: 5px 10px 5px 10px;
  padding: 5px;
  background: #5372b4;
  border-radius: 10px;
  color: #ffffff;
  justify-content: flex-start;
  word-break: break-all;

  z-index: 20;
`;

export const Report_ = styled.img`
  margin: 3px 1px 2px 15px;
  bottom: 0px;
  left: 0px;
  height: 20px;
  width: 20px;
  // justify-content: flex-end;
  flex: 1;
`;

export const ReportLetter = styled.div`
  margin: 0px 1px 0px 3px;
  bottom: 0px;
  left: 0px;
  height: 20px;
  width: 20px;
  // justify-content: flex-end;
  flex: 1;
  font-weight: bold;
  color: #ff0000;
`;

export const ReportContainer = styled.div`
  // margin: 5px 1px 1px 2px;
  // bottom: 0px;
  // left: 0px;
  // height: 20px;
  // width: 20px;
  // justify-content: flex-end;
  display: flex;
`;
