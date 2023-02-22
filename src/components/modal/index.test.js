/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import Modal from "./index.js";

describe("Modal component", () => {
  it("Deve renderizzare il Carousel quando show = true", () => {
    const images = ["image1", "image2", "image3"];
    const modalState = { show: true, images };
    const setModalState = jest.fn();

    const { getByTestId } = render(
      <Modal modalState={modalState} setModalState={setModalState} />
    );

    expect(getByTestId("carousel")).toBeInTheDocument();
  });

  it("NON deve renderizzare il Carousel quando show != true", () => {
    const images = ["image1", "image2", "image3"];
    const modalState = { show: false, images };
    const setModalState = jest.fn();

    const { queryByTestId } = render(
      <Modal modalState={modalState} setModalState={setModalState} />
    );

    expect(queryByTestId("carousel")).toBeNull();
  });


});
