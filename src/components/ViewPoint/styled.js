import styled from 'styled-components';

export const ViewPointButton = styled.button`
  width: 40px;
  height: 40px;
  background: ${props => (props.expand ? '#e9fc11' : '#f7ff9d')};
  border: transparent;
  border-radius: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  font-size: 0.7rem;
  cursor: pointer;
  z-index: 1;

  position: absolute;
  top: 70px;
  left: 20px;

  &:hover {
    background: #f1fe61;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background: #e9fc11;
  }
`;

export const ViewContainer = styled.div`
  width: 193px;
  height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 10px 0;

  position: absolute;
  top: 80px;
  left: 35px;
`;

export const ViewContent = styled.div`
  width: 166px;
  height: 136px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f4f4;
  border-radius: 10px;
  padding: 5px 5px;
  font-size: 1rem;
`;

export const ViewImage = styled.img`
  width: 168px;
  height: 89px;
  margin-bottom: 5px;
`;
