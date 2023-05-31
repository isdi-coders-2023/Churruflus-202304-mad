import { Header } from "../header/Header";
import { Footer } from "../footer/footer";
import { List } from "../list/List";

export function App() {
  return (
    <>
      <Header></Header>
      <main className="main-container"></main>
      <List></List>
      <Footer></Footer>
    </>
  );
}
