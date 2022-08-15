import React from "react";
import styled from "styled-components";

const ChangeButton = ({ type, setType }) => {
  return (
    <Trigger onClick={() => setType((f) => !f)}>
      {type ? "가입하기" : "로그인"}
    </Trigger>
  );
};

const Trigger = styled.button`
  border: 0px;
  background: none;
  padding-left: 20rem;
`;

export default ChangeButton;
