import "./App.css";
import { Menu, Header, Navigation, About, Map, ImageGallery } from "./Components/index";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <About />
      <Menu />
      <Map />
      <ImageGallery/>
    </Fragment>
  );
}

export default App;
