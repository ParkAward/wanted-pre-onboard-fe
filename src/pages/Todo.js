import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import theme from "../styles/theme";
import TodoItem from "../container/todo/TodoItem";
import AddTodoBox from "../container/todo/AddTodoBox";

const Todo = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);
  const [execution, execute] = useState(false);
  useEffect(() => {
    if (typeof localStorage.getItem("token") === "object") navigate("/");
    else {
      execute(false);
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      axios
        .get("/todos", {})
        .then((res) => setTodoList(res.data))
        .catch(alert);
    }
  }, [execution, navigate]);
  return (
    <Main role="main">
      <Container>
        <LogoutBtn
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Logout
        </LogoutBtn>

        <Header>
          <h1>Todo List</h1>
          <h5>Get things done, one item at a time</h5>
        </Header>
        <Contents>
          <TodoList>
            {todoList.map((data) => (
              <TodoItem key={data.id} data={data} execute={execute} />
            ))}
          </TodoList>
          <AddTodoBox execute={execute} theme={theme} />
        </Contents>
      </Container>
    </Main>
  );
};
const LogoutBtn = styled.button`
  z-index: 9999;
  margin-left: auto;
  border: 0px;
  background: #775555;
  padding: 0.1rem;
`;

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

const Main = styled.main`
  padding: 10rem 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  background: ${({ theme }) => theme.red.background};
  color: white;
  justify-content: center;
`;

const Container = styled.article`
  width: 30%;
  background: #f1505f;
  min-width: 475px;

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
