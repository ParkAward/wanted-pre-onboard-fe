import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChangeButton from "../container/login/ChangeButton";
import LoginForm from "../container/login/LoginForm";

const Home = () => {
  const navigate = useNavigate();
  const [type, setType] = useState(true);

  useEffect(() => {
    if (typeof localStorage.getItem("token") === "string") navigate("/todo");
  }, []);

  return (
    <Main role={"main"}>
      <LoginForm navigate={navigate} type={type} />
      <ChangeButton type={type} setType={setType} />
    </Main>
  );
};

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column;
  align-items: center;

  justify-content: center;
`;

export default Home;
