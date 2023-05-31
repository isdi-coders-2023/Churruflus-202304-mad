import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {List} from "./list"
import { Simpson } from "../../models/simpson";


describe("Given List component", () => {
  describe("When it is intantiate", () => {
    const simpson = [
      {Nombre: "Bart Simpson", Estado: "Vivo"},
      {Nombre: "Hommer Simpson", Estado: "Muerto"}
    ] as Simpson []

  })
})
