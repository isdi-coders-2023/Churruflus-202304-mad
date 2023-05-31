import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const List = lazy(() => import("../list/List"));
const Form = lazy(() => import("../form/Form"));
const ErrorPage = lazy(() => import("../Error/Errorpage"));
const DetailPage = lazy(() => import("../detail/Detail"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<List></List>}></Route>
        <Route path="/form" element={<Form></Form>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        <Route path="/details/:id" element={<DetailPage></DetailPage>}></Route>
      </Routes>
    </Suspense>
  );
}
