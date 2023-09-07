import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import ControlPanel  from './components/Admin/ControlPanel'
import Dashboard  from './components/Admin/Dashboard'
import 'bootstrap/dist/css/bootstrap.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import 'primeicons/primeicons.css';
        
function App() {
  return (

   <Routes>
    <Route path='about' element={<About/>}></Route>
    <Route path='admin'  element={<Dashboard/>}>
      <Route path = 'dashboard' elements={<Dashboard/>}></Route>
      <Route path = 'controlPanel' elements={<ControlPanel/>}></Route>
    </Route>
    <Route path='/' element={<Home/>}></Route>
   </Routes>
  
     
  );
}

export default App;
