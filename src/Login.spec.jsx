import React from "react";
import { Login } from "./Login";
import { render } from "@testing-library/react";

describe("Login", () => {
    it("renders form", () => {
      const { getByLabelText } = render(<Login />);

      expect(getByLabelText("Email:")).toHaveAttribute("name", "email");
      expect(getByLabelText("Password:")).toHaveAttribute("name", "password");
    
    });
  });
