import React from "react";
import styled from "styled-components";

const Button = ({ children, disabled = false, ...props }) => {
  return (
    <StyledButton disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  width: ${(props) => props.width ?? "150px"};
  height: ${(props) => props.height ?? "30px"};
  max-width: 100%;
  box-sizing: border-box;
  color: rgb(253, 249, 243);
  font-weight: 600;
  background: ${(props) => props.background ?? props.theme.red.primary};
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: ${(props) => props.marginTop ?? " 0.6rem"};
  box-shadow: 0 1px 3px #00000033, 0 1px 2px #00000033;
  transition: all 0.3s ease-out;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: rgb(200, 50, 70);
    animation: all 0.2s ease-out forwards;
  }
  :disabled {
    background: ${({ theme }) => theme.red.dark};
  }
`;
export default Button;
