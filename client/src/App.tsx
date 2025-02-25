
import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import SignIn from './pages/Signin'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
