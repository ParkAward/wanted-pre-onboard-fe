import axios from "axios";

import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";

const AddTodoBox = ({ execute, theme }) => {
  return (
    <>
      <InputText>Add Todo</InputText>
      <InputBox
        onSubmit={async (e) => {
          e.preventDefault();
          const todo = e.target.todo.value;
          try {
            const result = await axios.post("/todos", { todo });
            if (result) {
              console.log(result);
              execute(true);
              e.target.todo.value = "";
            }
          } catch (e) {
            alert(e);
          }
        }}
      >
        <Input width={"80%"} height={"2.7rem"} name={"todo"} />
        <Button
          width={"20%"}
          height={"2.7rem"}
          marginTop="0px"
          background={theme.red.light}
        >
          추가
        </Button>
      </InputBox>
    </>
  );
};

const InputText = styled.p`
  padding: 3rem 0 0.3rem 3rem;
`;
const InputBox = styled.form`
  padding: 0 3rem 3rem 3rem;

  display: flex;
  flex-flow: row;
  self-item: center;
`;

export default AddTodoBox;
