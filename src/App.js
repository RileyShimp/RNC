import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './MainNavbar';
import About from './pages/About';
import Events from './pages/Events';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <>
      <MainNavbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
