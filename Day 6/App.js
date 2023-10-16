import './App.css';
// import HomePage from './Components/Homepage';
// import Sidebar from './Components/SideBar';
  import SignUp from './Components/SignUp';
 import {Routes, Route, BrowserRouter} from 'react-router-dom';
// import Dashboard from './Components/Dashboard';
// import EcommerceDashboard from './Redux/EcommerceDashboard';
import AdminLogin from './Components/AdminLogin';
import SideBar from './Components/SideBar';
import MAMMALS from './Components/Mammals';
import Contact from './Components/Contact';
import About from './Components/About';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<SignUp/>}/>
    <Route path='/Adminlogin' element={<AdminLogin/>}/>
    <Route path='/SideBar' element={<SideBar/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Mammals' element={<MAMMALS/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>  
    );
  }
  export default App;
  //