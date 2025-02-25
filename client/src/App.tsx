
import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import SignIn from './pages/Signin'
import Home from './pages/Home'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
