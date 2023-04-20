import './App.css';
import Homepage from './page/home';
import Eaproduct from './page/Eaproduct';
import About from './page/about';
import ArticleEa from './page/articleEa';

import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"element={<Homepage/>} ></Route>
          <Route path="/About" element={ <About/>} ></Route>
          <Route path="/Eaproduct" element={<Eaproduct/>} ></Route>
          <Route path="/ArticleEa" element={<ArticleEa/>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
