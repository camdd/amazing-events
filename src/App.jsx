/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import '@radix-ui/themes/styles.css';
import Home from './pages/Home'
import Stats from './pages/Stats' 
import Contact from './pages/Contact';
import Details from './pages/Details'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import eventosActions from './store/actions/eventosActions';

function App() {

const dispatch = useDispatch()
const eventos = useSelector(store => store.eventos)
const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    dispatch(eventosActions.get_eventos());
    setMounted(true);
}, [])

  return (
    <div className={`app ${mounted ? 'app-enter-active' : 'app-enter'}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home title="events" />}/>
          <Route path="/past" element={<Home title="Past events" />}/>
          <Route path="/upcoming" element={<Home title="Upcoming events" />}/>
          <Route path="/stats" Component={Stats}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/details/:id" element={<Details eventos={eventos} />} /> 
          <Route path="*" element={<div className='error'>404: not found</div>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
