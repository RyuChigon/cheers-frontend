import styled from 'styled-components';

export const EmoticonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const EmoticonButton = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;

  position: relative;
  top: 10px;
`;

export const ExpandField = styled.div`
  width: 193px;
  height: 38px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

  position: relative;
  top: 10px;
  left: 45px;
`;

export const EmoticonIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 3px;
  cursor: pointer;
`;
