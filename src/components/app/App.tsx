import { Header } from "../header/header";
import { List } from "../list/List";
import { Footer } from "../footer/footer";
import { Menu } from "../menu/menu";

export function App() {
  const title = "The Simpsons API";
  return (
    <>
      <Header title={title}>
        <Menu></Menu>
      </Header>
      <main className="main-container">
        <List></List>
      </main>
      <Footer></Footer>
    </>
  );
}
