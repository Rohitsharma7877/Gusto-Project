import logo from './logo.svg';
import './App.css';
import {Routes,Route, Router} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <AllRoutes/>
    <Footer/>     
    </div>
  );
}

export default App;
