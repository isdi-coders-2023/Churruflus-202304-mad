import { Header } from "../header/Header";
import { List } from "../list/List";
import { Footer } from "../footer/footer";
import { Card } from "../card/card";

export function App() {
  return (
    <>
      <Header></Header>
      <main className="main-container">
        <List></List>
        <Card>
          <Card item={Simpson.Ima} key={item.id}></Card>
        </Card>
      </main>
      <Footer></Footer>
    </>
  );
}
