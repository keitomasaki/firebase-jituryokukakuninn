import React, { useState } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "./reducks/store/createStore";
import { App } from "./App";
import { renderHook, act } from "@testing-library/react-hooks";

afterEach(() => cleanup());

describe("test", () => {
  test("renders learn react link", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // const [count, setCount] = useState(0);
    const button = screen.getByRole("button");
    const p = screen.getByTestId("count");
    userEvent.click(button);
    console.log(store.getState);
    // expect(screen.getByRole("button")).toBeTruthy();
    expect(p).toHaveTextContent(1);
  });
  // test("test hooks", () => {
  //   const { result } = renderHook(() => App());
  //   expect(result.current.count).toBe(1);
  // });
});
