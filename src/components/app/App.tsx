import Header from "../header/Header";
import { Footer } from "../footer/footer";
import { AppRoutes } from "../app.routes/app.routes";

export function App() {
  return (
    <>
      <Header></Header>
      <AppRoutes></AppRoutes>

      <Footer></Footer>
    </>
  );
}
