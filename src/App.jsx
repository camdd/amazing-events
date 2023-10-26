
import './App.css'
import '@radix-ui/themes/styles.css';
import Home from './pages/Home.jsx'
import Past from './pages/Past.jsx'
import Upcoming from './pages/Upcoming.jsx'
import Stats from './pages/Stats.jsx' 
import Contact from './pages/Contact.jsx';
import Details from './pages/Details.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/past" Component={Past}/>
          <Route path="/upcoming" Component={Upcoming}/>
          <Route path="/stats" Component={Stats}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/details/:id" Component={Details}/>
          <Route path="*" element={<div className='error'>404: not found</div>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
