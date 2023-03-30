import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "../redux/store";
import Country from "../components/conutry";

describe("testing country components", () => {
  it("test country component", () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={Store}>
          <Country />
        </Provider>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
