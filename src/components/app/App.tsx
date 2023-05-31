import { Header } from "../header/Header";
import { Footer } from "../footer/footer";
import { List } from "../list/List";
import { Menu } from "../menu/Menu";

export function App() {
  const title = "The Simpsons API"
  return (
    <>
      <Header title={title}>
        <Menu></Menu>
      </Header>
      <main className="main-container"></main>
      <List></List>
      <Footer></Footer>
    </>
  );
}
