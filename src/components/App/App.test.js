import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import {searchPhotos as mockSearchPhotos} from "../../services/unsplash";
import App from "./App";


jest.mock("../../services/unsplash", () => {
  const sampleResult = [
    { id: 1, description: "This pic 1", urls: { small: "http://image" } },
    { id: 2, description: "This is pic 2", urls: { small: "http://image" } },
    { id: 3, description: "This is pic 3", urls: { small: "http://image" } }
  ];

  return {
    searchPhotos: jest.fn(subject =>
      Promise.resolve({ data: { results: sampleResult } })
    )
  };
});

test("ensure fetch called upon load", async () => {
  const { getByText, } = render(<App />);
  expect(mockSearchPhotos).toHaveBeenCalledTimes(1);
  expect(mockSearchPhotos).toHaveBeenCalledWith("flowers");
  // await wait(() => {
  //   expect(getByText("This pic 1")).toBeInTheDocument();
  //   expect(getByText("This pic 2")).toBeInTheDocument();
  //   expect(getByText("This pic 3")).toBeInTheDocument();
  // });
});
