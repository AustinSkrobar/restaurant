import "./App.css";
import { Menu, Header, Navigation, About, Map, ImageGallery, Footer } from "./Components/index";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <About />
      <Menu />
      <ImageGallery/>
      <Map />
      <Footer/>
    </Fragment>
  );
}

export default App;
