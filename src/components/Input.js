import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  width: ${(props) => props.width ?? "200px"};
  height: ${(props) => props.height ?? "40px"};
  padding: ${(props) => props.padding || "11px 13px"};
  max-width: 100%;
  background: #f9f9fa;
  color: ${({ theme }) => theme.red.primary};
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;
export default Input;
