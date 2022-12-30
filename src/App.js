import './App.css';
import { Homepage } from './pages/Homepage.js';
import {Finder} from './pages/Job_Finder.js';
import {Results} from './pages/Results.js'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/'element={<Homepage/>}/>
          <Route path='/Finder' element={<Finder/>}/>
          <Route path='/Results' element={<Results/>}/>

        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
