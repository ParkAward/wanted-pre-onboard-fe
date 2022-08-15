import axios from "axios";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";

const LoginForm = ({ navigate, type }) => {
  let regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const disable = useMemo(
    () => !(email.match(regEmail) && password.length >= 8),
    [email, password]
  );

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
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
        alert(e.request.response);
      }
    } else {
      try {
        const result = await axios.post("/auth/signup", {
          email,
          password,
        });
        if (result.data) {
          const { access_token } = result.data;
          localStorage.setItem("token", access_token);
          navigate("/todo");
        }
      } catch (e) {
        alert(e.request.response);
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handleLoginSubmit}>
        <header>
          <Text>{type ? "로그인" : "회원가입"}</Text>
        </header>
        <label>
          email
          <Input
            role={"email"}
            width={"18rem"}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          password
          <Input
            role={"password"}
            width={"18rem"}
            type={"password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button disabled={disable}>{type ? "로그인" : "가입하기"}</Button>
      </form>
    </Container>
  );
};
const Text = styled.h3`
  margin: 1rem;
  font-weight: 600;
`;

const Container = styled.article`
  padding: 6rem 3rem;
  border-radius: 0.2rem;
  border: grey 1px solid;

  & > form {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;
export default LoginForm;
