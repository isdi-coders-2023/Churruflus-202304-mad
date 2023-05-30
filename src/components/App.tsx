import { Footer } from "./footer/footer";
import { Header } from "./header/Header";
import { List } from "./list/List";
import "../sass/styles.scss";

export function App() {
  return (
    <>
      <Header></Header>
      <main className="main-container">
        <List></List>
      </main>
      <Footer></Footer>
    </>
  );
}
