import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const List = lazy(() => import("../list/List"));
const DetailPage = lazy(() => import("../detail/Detail"));
const ApiPrivate = lazy(() => import("../api.private/Api.private"));
const ErrorPage = lazy(() => import("../error/Errorpage"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="apiPrivate" element={<ApiPrivate></ApiPrivate>}></Route>
        <Route path="/" element={<List></List>}></Route>
        <Route path="/details/:id" element={<DetailPage></DetailPage>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
