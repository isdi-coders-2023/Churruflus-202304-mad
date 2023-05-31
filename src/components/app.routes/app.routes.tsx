import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { List } from "../list/List";

const Header = lazy(() => import("../header/Header"));
const Form = lazy(() => import("../form/Form"));
const ErrorPage = lazy(() => import("../Error/Errorpage"));
export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<List></List>}></Route>
        <Route path="/form" element={<Form></Form>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
