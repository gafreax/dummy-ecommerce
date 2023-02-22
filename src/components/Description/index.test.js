/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import Description from ".";

describe("Description component", () => {
    it("Deve renderizzare il componente Description", () => {
        const text = "Sono il tuo testo";
        const {getByTestId} =  render(<Description><p>{text}</p></Description>);
        expect(getByTestId("description")).toBeInTheDocument();
    });

    it("Deve renderizzare il contenuto del children", () => {
        const text = "Sono il tuo testo";
        const {getByText} =  render(<Description><p>{text}</p></Description>);
        expect(getByText(text)).toBeTruthy();
    })
});