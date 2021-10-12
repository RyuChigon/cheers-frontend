import styled from "styled-components";

export const InitialContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 700px;
  background: #ffffff;
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
  width: 228px;
  height: 50px;
  background: ${props => props.admin ? '#818181' : '#ffffff'};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  color: ${props => props.admin ? '#ffffff' : '#000000'};
  border-color: transparent;
  border-radius: 50px;
  font-size: 1.5rem;
  margin: 10px;
  margin-top: ${props => props.admin ? '10px' : '150px'};
  cursor: pointer;

  &:hover {
    background: ${props => props.admin ? '#555555' : '#fcfcfc'}
  }

  &:active {
    background: ${props => props.admin ? '#555555' : '#fcfcfc'};
    transform: translateY(1px);
  }

`;