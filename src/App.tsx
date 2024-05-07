import "./styles/global.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Fisical } from "./components/Fisical/Fisical";
import { Visual } from "./components/Visual/Visual";
import { Auditiv } from "./components/Auditiv/Auditiv";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Auditiv />
      <Visual />
      <Fisical />
    </>
  );
}

export default App;
