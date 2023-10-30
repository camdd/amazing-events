
import './App.css'
import '@radix-ui/themes/styles.css';
import Home from './pages/Home.jsx'
import Stats from './pages/Stats.jsx' 
import Contact from './pages/Contact.jsx';
import Details from './pages/Details.jsx'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  let [eventos, setEventos] = useState([])
  let [pastEvents, setPastEvents] = useState([])
  let [upcomingEvents, setUpcomingEvents] = useState([])

  useEffect(()=>{
    axios
      .get("https://mindhub-xj03.onrender.com/api/amazing")
      .then((response) => {
      setEventos(response.data.events);
      setUpcomingEvents(response.data.events.filter(event=>event.estimate))
      setPastEvents(response.data.events.filter(event=>event.assistance))
    })
}, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home title="Amazing events" events={eventos} />}/>
          <Route path="/past" element={<Home title="Past events" events={pastEvents} />}/>
          <Route path="/upcoming" element={<Home title="Upcoming events" events={upcomingEvents} />}/>
          <Route path="/stats" Component={Stats}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/details/:id" element={<Details eventos={eventos} />} /> 
          <Route path="*" element={<div className='error'>404: not found</div>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
