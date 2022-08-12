import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import theme from "../styles/theme";

const Todo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof localStorage.getItem("token") === "object") navigate("/");
  }, []);
  return (
    <Main role="main">
      <Container>
        <Header>
          <h1>Todo List</h1>
          <h5>Get things done, one item at a time</h5>
        </Header>
        <Contents>
          <TodoList></TodoList>
          <InputText>Add Todo</InputText>
          <InputBox>
            <Input width={"80%"} height={"2.7rem"} />
            <Button
              width={"20%"}
              height={"2.7rem"}
              marginTop="0px"
              background={theme.red.light}
            >
              추가
            </Button>
          </InputBox>
        </Contents>
      </Container>
    </Main>
  );
};
const TodoList = styled.div`
  height: 80%;
`;
const Contents = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column;
`;
const InputText = styled.p`
  padding: 0.3rem;
`;
const InputBox = styled.div`
  display: flex;
  flex-flow: row;
  self-item: center;
`;
const Main = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column;
  align-items: center;
  background: ${({ theme }) => theme.red.background};
  color: white;
  justify-content: center;
`;

const Container = styled.article`
  height: 70%;
  width: 25%;
  padding: 3rem;
  background: #f1505f;

  box-shadow: -2rem -2rem ${({ theme }) => theme.red.light};
`;
const Header = styled.header`
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 0.5px solid white;
  h1 {
    font-weight: 700;
    font-size: 40px;
  }
  h5 {
    font-weight: 400;
    font-size: 15px;
  }
`;
export default Todo;
