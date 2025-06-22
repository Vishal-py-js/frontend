import './App.css'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {

  return (
    <Router>
      <div className='w-full'>
        <Navbar />
        {/* <HomePage /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
