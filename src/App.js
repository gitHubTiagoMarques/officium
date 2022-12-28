import './App.css';
import Navbar from './components/navbar.js'
import {Footer} from './components/footer.js'
import {Hero} from './components/hero.js'
import { Carro } from './components/carro.js';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Hero></Hero>
        <Carro></Carro>
        <Footer></Footer>
    </div>
  );
}

export default App;
