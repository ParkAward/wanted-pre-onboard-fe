import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import theme from "../styles/theme";

import { MdDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

const mockData = [
  {
    id: 1,
    todo: "todo2",
    isCompleted: true,
    userId: 1,
  },
  {
    id: 2,
    todo: "todo3",
    isCompleted: false,
    userId: 1,
  },
];
const TodoItem = ({ data }) => {
  const itemRef = useRef();
  useEffect(() => {
    if (data.isCompleted) {
      itemRef.current.classList.add("done");
    }
  }, []);
  return (
    <TodoItemContainer>
      <TodoItemLabel ref={itemRef}>{data.todo}</TodoItemLabel>
      <TodoItemEventBox>
        <button>
          <FaPencilAlt size={20} />
        </button>
        <button>
          <MdDone size={25} />
        </button>
        <button>
          <MdDelete size={25} />
        </button>
      </TodoItemEventBox>
    </TodoItemContainer>
  );
};
const TodoItemContainer = styled.div`
  width: 100%;
  height: 4rem;
  background: ${({ theme }) => theme.red.light}55;
  margin-top: 0.3rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
`;
const TodoItemLabel = styled.p`
  font-weight: 500;
  font-size: 25px;
  position: relative;
  &.done {
    opacity: 0.6;
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: -0.5rem;
      display: block;
      width: 0%;
      height: 1px;
      background: #fff;
      animation: strikeitem 0.5s ease-out 0s forwards;
    }
  }
`;
const TodoItemEventBox = styled.div`
  display: flex;
  margin-left: auto;
  button {
    display: block;
    border: 0px;
    background: none;
    color: #fff;
    padding: 0.3rem;
    :hover {
      color: ${({ theme }) => theme.red.light};
    }
  }
`;

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
          <TodoList>
            {mockData.map((data) => (
              <TodoItem key={data.id} data={data} />
            ))}
          </TodoList>
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
  display: flex;
  flex-flow: column;
`;
const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-flow: column;
`;
const InputText = styled.p`
  padding: 3rem 0 0.3rem 3rem;
`;
const InputBox = styled.div`
  padding: 0 3rem 3rem 3rem;

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
  width: 25%;
  background: #f1505f;

  box-shadow: -1.4rem -1.4rem ${({ theme }) => theme.red.light};
`;
const Header = styled.header`
  padding: 3rem;

  text-align: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
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
