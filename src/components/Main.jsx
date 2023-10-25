import './Main.css'
import CardComponent from './Card.jsx'
import SearchFilter from './SearchFilter.jsx'
import Checkbox from './Checkbox'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Main = () => {

    let [eventos, setEventos] = useState([])
    let [filteredEventos, setFilteredEventos] = useState([])
    let [eventName, setEventName] = useState('');

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
          .then((response) => {
            setEventos(response.data.events);
          })
      }, []);
    
      const filterEvents = (name) => {
        const eventsFilter = eventos.filter(event => event.name.toLowerCase().includes(name.toLowerCase()));
        setFilteredEventos(eventsFilter);
      };
    
      const handleSearchSubmit = (e) => {
        e.preventDefault();
        filterEvents(eventName);
      };
    
      const handleInputChange = (e) => {
        setEventName(e.target.value);
        if (e.target.value === '') {
          setFilteredEventos([]);
        } else {
          filterEvents(e.target.value);
        }
      };
    

    return (
        <>
            <div className="search">
                <Checkbox/>
                <SearchFilter
                    eventName={eventName}
                    handleInputChange={handleInputChange}
                    handleSearchSubmit={handleSearchSubmit}
                />
            </div>
            <div className='event_cards'>
                {filteredEventos.length > 0 ? (
                filteredEventos.map((evento, index) => (
                    <CardComponent key={index} evento={evento} />
                ))
                ) : (
                eventName ? <p>No se encontraron eventos que coincidan con su búsqueda.</p> : eventos.map((evento, index) => (
                    <CardComponent key={index} evento={evento} />
                ))
                )}
            </div>
        </>
    )
}

export default Main