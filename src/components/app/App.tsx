import Header from "../header/Header";
import { Footer } from "../footer/footer";

import { AppRoutes } from "../app.routes/app.routes";
import { List } from "../list/List";
import { Menu } from "../menu/Menu";
import { Button } from "../button/Button";

export function App() {
  const title = "The Simpsons API"
  return (
    <>
      <Header></Header>
      <AppRoutes></AppRoutes>
      <Header title={title}>
        <Menu></Menu>
      </Header>
      <Button></Button>
      <main className="main-container"></main>
      <List></List>
 <AppRoutes></AppRoutes>
      <Footer></Footer>
    </>
  );
}
