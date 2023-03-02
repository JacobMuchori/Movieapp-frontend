import './App.css';
import Homepage from '../Movies/Homepage';
import Login from '../Movies/Login';
import Dashboard from '../Movies/Dashboard';
import Registerpage from '../Movies/Registerpage';
import { Routes, Route } from 'react-router-dom';



function App() {

    return (
      <div className="overlay">
      <Routes>
        <Route exact path="/" element={<Homepage/>}></Route>
        <Route exact path="/dashboard" element={<Dashboard/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/registerpage" element={<Registerpage/>}></Route>
      </Routes>
    </div>
    )
}

export default App;
