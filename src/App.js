import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/navbar.js'
import {Footer} from './components/footer.js'
import {Hero} from './components/hero.js'

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Hero></Hero>
        <Footer></Footer>
    </div>
  );
}

export default App;
