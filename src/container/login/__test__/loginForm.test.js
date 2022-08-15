import React, { useState } from "react";
import {
  render,
  fireEvent,
  screen,
  waitFor,
  prettyDOM,
  getByRole,
} from "@testing-library/react";
import LoginForm from "../LoginForm";
import { ThemeProvider } from "styled-components";
const theme = {
  red: {
    primary: "#f1505f",
    dark: "#903039",
    light: "#F8A7AF",
    background: "#FEF6F7",
  },
};
describe("LoginForm 테스트", () => {
  const WrapperLogin = ({ type }) => {
    return (
      <ThemeProvider theme={theme}>
        <LoginForm navigate={() => {}} type={type} />
      </ThemeProvider>
    );
  };

  it("제목이 잘 구현되었는가?", () => {
    const { rerender } = render(<WrapperLogin type={true} />);

    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("로그인");
    rerender(<WrapperLogin type={false} />);
    expect(title).toHaveTextContent("회원가입");
  });

  it("버튼 활성화 테스트", () => {
    const { debug } = render(<WrapperLogin type={true} />);
    const email = screen.getByLabelText("email");
    const password = screen.getByLabelText("password");
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.change(password, { target: { value: "123456789" } });
    expect(button).toBeEnabled();
  });
});
