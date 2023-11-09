
import './App.css'
import '@radix-ui/themes/styles.css';
import Home from './pages/Home'
import Stats from './pages/Stats' 
import Contact from './pages/Contact';
import Details from './pages/Details'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import eventosActions from './store/actions/eventosActions';


function App() {

const dispatch = useDispatch()
const eventos = useSelector(store => store.eventos)

  useEffect(()=>{
    dispatch(eventosActions.get_eventos())
}, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home title="Amazing events" />}/>
          <Route path="/past" element={<Home title="Past events" />}/>
          <Route path="/upcoming" element={<Home title="Upcoming events" />}/>
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
