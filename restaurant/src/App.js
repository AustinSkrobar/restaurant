import "./App.css";
import { Menu, Header, Navigation, About, Map } from "./Components/index";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <About />
      <Menu />
      <Map />
    </Fragment>
  );
}

export default App;
