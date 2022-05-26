import './styles/main.css';
import { Routes, Route } from 'react-router-dom';
import { Outlet, NavLink } from "react-router-dom";
import Iframes from './components/Iframes';

function App() {
  return (
    <div className='homepage maindiv'>
      <header>
       
      <div className="container-column">
        <h2 is="top">
            Zaria's   
          </h2>
          <h2>
            Scratch projects
          </h2>
      </div>
      <Routes>           
            <Route index element= {<h1>Hello</h1>} />
            <Route path='/' element= {<h1>Hello</h1>} />       
      </Routes>
       
      </header>
        < Iframes />

        {/* <NavLink className="back" to="/">
         <button>&uarr;back to top</button> 
        </NavLink> */}
       
    </div>
    
  );
}

export default App;
