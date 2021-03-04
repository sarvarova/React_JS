import React from "react";
import { Login } from "./Login";
import { render } from "@testing-library/react";

describe("Login", () => {
  describe("when logged out", () => {
    it("renders form", () => {
      const { getByLabelText } = render(<Login />);
      expect(getByLabelText("Email:")).toHaveAttribute("name", "email");
      expect(getByLabelText("Password:")).toHaveAttribute("name", "password");
    });

  })
  describe("when logged in", () => {
    it("renders profile link", () => {
      const { getByText } = render(<Login isLoggedIn />);
      expect(getByText("go to profile")).toBeInTheDocument()
    });
  });
});

/*import React from "react";
import { Login } from "./Login";
import { render } from "@testing-library/react";

describe("Login", () => {
    it("renders form", () => {
      const { getByLabelText } = render(<Login />);

      expect(getByLabelText("Email:")).toHaveAttribute("name", "email");
      expect(getByLabelText("Password:")).toHaveAttribute("name", "password");
    
    });
  });*/