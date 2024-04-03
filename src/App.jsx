import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login"; // Cambia la importación para quitar las llaves

function App() {
  return (
    <div className="bg-[#333333] w-full min-h-screen">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes> 
      </Router>
    </div>
  )
}

export default App;
