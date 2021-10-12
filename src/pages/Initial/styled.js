import styled from "styled-components";

export const InitialContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 700px;
  background: #fff3ca;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 493px;
  height: 129px;
`;

export const JoinButton = styled.button`
  width: 271px;
  height: 68px;
  background: ${props => props.admin ? '#c4c4c4' : '#ffd3c6'};
  border-color: transparent;
  border-radius: 28px;
  font-size: 2rem;
  margin: 10px;
  margin-top: ${props => props.admin ? '10px' : '150px'};
  cursor: pointer;

  &:hover {
    background: ${props => props.admin ? '#a4a4a4' : '#ffa88f'}
  }

  &:active {
    box-shadow: 1px 5px 0px 1px rgba(0, 0, 0, 0.3);
    transform: translateY(1px);
  }

`;