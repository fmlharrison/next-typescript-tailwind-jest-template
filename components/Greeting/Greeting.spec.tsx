import { render, screen } from "@utils/test-utils";

import { Greeting } from "./Greeting";

describe("Greetings", () => {
  it("should render the heading", () => {
    render(<Greeting tools={["Jest", "React Testing Library"]} />);

    const heading = screen.getByTestId("greeting");

    expect(heading).toMatchSnapshot();
  });

  it("should render the heading", () => {
    render(<Greeting tools={["Jest", "React Testing Library"]} />);

    const heading = screen.getByTestId("greeting");

    expect(heading.textContent).toBe(
      "Hello Next.js with Jest and React Testing Library 👋"
    );
  });
});
