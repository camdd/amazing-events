/* eslint-disable react/prop-types */
import './Main.css'
import CardComponent from './Card.jsx'
import SearchFilter from './SearchFilter.jsx'
import Checkbox from './Checkbox'
import { useEffect, useState } from 'react'

const Main = (props) => {
   //siempre que cambia un estado de un componente se desmonta con los datos nuevos y se vuelve a montar
    let [eventos, setEventos] = useState([]) //estado de este componente main, no confundir con events
    let [filteredEventos, setFilteredEventos] = useState([])
    let [eventName, setEventName] = useState('');

    useEffect(() => {
          setEventos(props.events)
          setFilteredEventos(props.events) //el dato que me pasaron por propiedad lo voy a setear en el estado

      }, [props.events]);
    
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
        <h1 className='page_title'>{props.title}</h1>

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