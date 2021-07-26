
import './App.css';
import { Menu, Header, Navigation } from './Components/index'
import { Fragment } from 'react'



function App() {
  return (
    <Fragment >
   <Navigation/>
      <Header />
      <Menu />
    </Fragment>
  );
}

export default App;
