import { MemoryRouter as Router } from "react-router-dom";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppRoutes } from "./app.routes";

const MockedComponent = jest.fn().mockReturnValue(<h1>List</h1>);

jest.mock("../list/List", () => MockedComponent);
jest.mock("../form/Form", () => MockedComponent);
jest.mock("../detail/Detail", () => MockedComponent);
jest.mock("../error/Errorpage", () => MockedComponent);
jest.mock("../api.private/Api.private", () => MockedComponent);

describe("Given AppRoutes component", () => {
  describe("When it is instantiate with a route / ", () => {
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("List");
    });
    test("Then it should render 'List'", () => {
      expect(MockedComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route /form ", () => {
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/form"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("List");
    });
    test("Then it should render 'List'", () => {
      expect(MockedComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route /details/:id", () => {
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/details/:id"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("List");
    });
    test("Then it should render 'List'", () => {
      expect(MockedComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route *", () => {
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/*"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("List");
    });
    test("Then it should render 'List'", () => {
      expect(MockedComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route /apiPrivate", () => {
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/apiPrivate"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("List");
    });
    test("Then it should render 'List'", () => {
      expect(MockedComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
});
