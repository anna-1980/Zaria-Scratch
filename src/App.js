import './styles/main.css';
import { Routes, Route } from 'react-router-dom';
import { Outlet, NavLink } from "react-router-dom";
import Iframes from './components/Iframes';
import BackToTopButton from './components/BackToTopButton';

function App() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
  console.log("scroll")
  }
  return (
    <div className='homepage maindiv'>
      <header>
       
      <div className="container-column">
        <h2 id="top">
            Zaria's   
          </h2>
          <h2>
            Scratch projects
          </h2>
      </div>
      <Routes>           
            <Route index element= {<h1></h1>} />
            <Route path='/' element= {<h1></h1>} />       
      </Routes>
       
      </header>
        < Iframes />

 
       
    </div>
    
  );
}

export default App;
