import React from "react";
import { Registration } from "./Registration";
import { render } from "@testing-library/react";

describe("Registration", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Registration />);
    expect(getByLabelText('Имя:')).toHaveAttribute('name', 'name')
    expect(getByLabelText('Фамилия:')).toHaveAttribute('name', 'lastname')
    expect(getByLabelText('Email:')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Пароль:')).toHaveAttribute('name', 'password')
  });
});