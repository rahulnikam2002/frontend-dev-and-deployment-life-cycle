import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("App", () => {
    it("render button", async () => {
        window.alert = jest.fn(); //mock karna
        render(<App />);
        const button = screen.getByRole("button", { name: /Shared Button/i });
        await userEvent.click(button);
        expect(window.alert).toHaveBeenCalled()
    })
})