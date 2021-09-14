import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Navbar from "./index";
import { persistor, store } from "../../stores";

afterEach(cleanup);

const MockNavbar = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Navbar />
    </PersistGate>
  </Provider>
);

describe("Navbar", () => {
  it("renders title", () => {
    render(<MockNavbar />);
    const appTitle = screen.getByText("FakeStore");
    expect(appTitle).toBeInTheDocument();
  });

  it("renders cart button", () => {
    render(<MockNavbar />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/Cart/i);
  });
});
