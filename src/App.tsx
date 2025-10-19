import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './modules/home/pages/Home.jsx'
import { Login } from './modules/login/pages/Login';
import { Register } from './modules/register/pages/Register';
import { Bounce, ToastContainer } from 'react-toastify';
import { ComponentProvider } from './context/ComponentContext';

function App() {
  return (
    <div className="m-0 p-0 box-border">
      <ComponentProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ComponentProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="dark"
        transition={Bounce}
      />
    </div>
  )
}

export default App
