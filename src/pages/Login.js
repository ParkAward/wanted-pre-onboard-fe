import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
  return (
    <Center>
      <Container>
        <Input width={"15rem"} />
        <Input width={"15rem"} />
        <Button>로그인</Button>
      </Container>
    </Center>
  );
};
const Center = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;

  justify-content: center;
`;
const Container = styled.article`
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: grey 1px solid;
`;

export default Login;
