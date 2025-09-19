import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './modules/home/pages/Home'

function App() {
  return (
    <div className="m-0 p-0 box-border">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
