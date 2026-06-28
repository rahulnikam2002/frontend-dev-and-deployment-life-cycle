import { render, screen } from "@testing-library/react";
import Header from "../../shared/components/Header/Header";

describe("Header", () => {
  it("renders logo, navigation links and action buttons", () => {
    render(<Header />);
    expect(screen.getByText("CA")).toBeInTheDocument();
    expect(screen.getByText("Code Architecture")).toBeInTheDocument();

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(5);

    expect(screen.getByRole("button", { name: /Sign In/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Get Started/i })).toBeInTheDocument();
  });
});
