import './App.css';
import { Homepage } from './pages/Homepage.js';
import {Finder} from './pages/Job_Finder.js';
import {About_us} from './pages/About_us.js'
import {Results} from './pages/Results.js'
import { Countries } from './pages/Countries.js';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Searchpage} from "./pages/search.js";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/'element={<Homepage/>}/>
            <Route path='/Bruh' element={<Searchpage/>}/>
          <Route path='/Finder' element={<Finder/>}/>
            <Route path='/About_us'element={<About_us/>}/>
          <Route path='/Results' element={<Results/>}/>
          <Route path='/Comparison' element={<Countries/>}/>

        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
