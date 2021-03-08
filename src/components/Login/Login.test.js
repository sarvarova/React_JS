import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import renderer from "react-test-renderer";
import Login from "./Login";
import {store} from '../../modules/store';
import {Provider} from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const NewLogin = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Login />
    </Provider>
  </BrowserRouter>
);

describe("Login works fine", () => {
  const { getByTestId } = render(<NewLogin />);
  it("Snapshot matches", () => {
    const mockLogin = renderer.create(<NewLogin />).toJSON();
    expect(mockLogin).toMatchSnapshot();
  });

  describe("Contains all the necessary inputs with basic setup", () => {
    expect(getByTestId("username")).toBeTruthy();
    expect(getByTestId("password")).toBeTruthy();
    expect(getByTestId("button")).toBeTruthy();
    expect(getByTestId("button")).toHaveAttribute('type','submit');
  });

  describe("On submit", () => {
    it('dispatches log in credentials', () => {
      
    })
  })
});