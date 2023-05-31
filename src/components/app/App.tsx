import { Footer } from "../footer/footer";
import { AppRoutes } from "../app.routes/app.routes";
import { Menu } from "../menu/Menu";
import { Button } from "../button/Button";
import { Header } from "../header/Header";

export function App() {
  const title = "The Simpsons API";
  return (
    <>
      <Header title={title}>
        <Menu></Menu>
      </Header>
      <AppRoutes></AppRoutes>
      <Button></Button>
      <main className="main-container"></main>

      <Footer></Footer>
    </>
  );
}
