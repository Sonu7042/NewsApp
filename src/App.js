import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import UserContextProvider from './context/UserContextProvider';


function App() {
  
  return (

      <UserContextProvider>
      <Router>
        <Navbar />

        <div className='container'>
          <Routes>

            <Route path='/' Component={Home}></Route>
            <Route path='/about' Component={About} ></Route>

          </Routes>
        </div>

      </Router>
      </UserContextProvider>
   


  );
}

export default App;
