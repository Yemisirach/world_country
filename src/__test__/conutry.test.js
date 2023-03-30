import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../redux/store";
import Country from "../components/conutry";

describe("testing country components", () => {
  it("test country component", () => {
    const data = render(
      <Provider store={Store}>
        <Country />
      </Provider>
    );
    expect(data).toMatchSnapshot();
  });
});
