import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";

let regEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

const Home = () => {
  const navigate = useNavigate();
  const [type, setType] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const disable = useMemo(
    () => !(email.match(regEmail) && password.length >= 8),
    [email, password]
  );

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/todo");
  }, []);
  return (
    <main role={"main"}>
      <Center>
        <Container
          onSubmit={async (e) => {
            e.preventDefault();
            console.log(email, password);
            if (type) {
              try {
                const result = await axios.post("/auth/signin", {
                  email,
                  password,
                });
                if (result.data) {
                  const { access_token } = result.data;
                  localStorage.setItem("token", access_token);
                  navigate("/todo");
                }
              } catch (e) {
                console.log(e.request.response);
              }
            } else {
              try {
                const result = await axios.post(
                  "/auth/signup",
                  {
                    email,
                    password,
                  },
                  { headers: { "Content-Type": "application/json" } }
                );
                if (result.data) {
                  const { access_token } = result.data;
                  localStorage.setItem("token", access_token);
                  navigate("/todo");
                }
              } catch (e) {
                alert(e.request.response);
              }
            }
          }}
        >
          <Text>{type ? "로그인" : "회원가입"}</Text>
          <Input
            width={"18rem"}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            width={"18rem"}
            type={"password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button disabled={disable}>{type ? "로그인" : "가입하기"}</Button>
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
