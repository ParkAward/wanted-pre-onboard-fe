import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";

const Home = () => {
  const [type, setType] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main role={"main"}>
      <Center>
        <Container>
          <Text>{type ? "로그인" : "회원가입"}</Text>
          <Input
            width={"18rem"}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            width={"18rem"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button readonly>{type ? "로그인" : "가입하기"}</Button>
        </Container>
        <Trigger onClick={() => setType((f) => !f)} readonly>
          {type ? "가입하기" : "로그인"}
        </Trigger>
      </Center>
    </main>
  );
};
const Text = styled.h3`
  margin: 1rem;
  font-weight: 600;
`;
const Center = styled.article`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column;
  align-items: center;

  justify-content: center;
`;
const Container = styled.form`
  padding: 6rem 3rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  border: grey 1px solid;
`;
const Trigger = styled.button`
  border: 0px;
  background: none;
  padding-left: 20rem;
`;
export default Home;
