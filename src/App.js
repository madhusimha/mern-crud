
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Createuser from './components/Createuser';
import Allusers from './components/Allusers.js';
import Updateuser from './components/Updateuser';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Navbar/>
      <Routes>
          <Route path="/" element={<Createuser/>}/>
          <Route path="/allusers" element={<Allusers />} />
          <Route path="/edituser/:id" element={<Updateuser />} />
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
