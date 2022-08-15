import React, { useState } from "react";
import {
  render,
  fireEvent,
  screen,
  waitFor,
  prettyDOM,
} from "@testing-library/react";
import ChangeButton from "../ChangeButton";
import userEvent from "@testing-library/user-event";

describe("ChangeButton 테스트", () => {
  const Wrapper = () => {
    const [type, setMode] = useState(true);
    return <ChangeButton type={type} setType={setMode} />;
  };
  render(<Wrapper />);
  let button = screen.getByText("가입하기");
  it("ChangeButton은 잘 렌더링 됐는가?", () => {
    expect(button).toHaveTextContent("가입하기");
  });
});
