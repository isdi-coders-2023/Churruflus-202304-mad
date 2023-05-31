import { Header } from "../header/Header";
import { Card } from "../list/Card";
import { Footer } from "../footer/footer";

export function App() {
  return (
    <>
      <Header></Header>
      <main className="main-container">
        <Card></Card>
      </main>
      <Footer></Footer>
    </>
  );
}
