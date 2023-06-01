import { Footer } from "../footer/Footer";
import { AppRoutes } from "../app.routes/app.routes";
import { Menu } from "../menu/Menu";
import { Header } from "../header/Header";

export function App() {
  const title = "The Simpsons API";
  return (
    <>
      <Header title={title}>
        <Menu></Menu>
      </Header>

      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </>
  );
}
