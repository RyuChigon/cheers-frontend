import styled from 'styled-components';

export const ViewPointButton = styled.button`
  width: 40px;
  height: 40px;
  background: #f7ff9d;
  border: transparent;
  border-radius: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  font-size: 0.7rem;
  cursor: pointer;

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
