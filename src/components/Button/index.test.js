import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Componente bottone", () => {
    test("render", async () => {
        render(<Button>Prova</Button> );
        const myButton = await screen.findAllByText("Prova");
        expect(myButton).toHaveLength(1)
    })
});