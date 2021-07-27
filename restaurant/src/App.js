import "./App.css";
import { Menu, Header, Navigation, About } from "./Components/index";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <About/>
      <Menu />
    </Fragment>
  );
}

export default App;
