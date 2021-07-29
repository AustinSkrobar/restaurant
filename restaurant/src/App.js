import "./App.css";
import { Menu, Header, Navigation, About, ImageGallery } from "./Components/index";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <About/>
      <Menu />
      <ImageGallery/>
    </Fragment>
  );
}

export default App;
