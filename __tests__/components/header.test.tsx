import { render, screen } from "@testing-library/react";
import Header from "@/components/header/header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("should have the authors first and second name in capital letters", () => {
    render(<Header />);

    const header = screen.getByRole("heading");
    const headerText = "David Bell";
    const headerLength = headerText.length;

    expect(header).toHaveTextContent(headerText);
  });

  it("should not be an empty string", () => {});
});
