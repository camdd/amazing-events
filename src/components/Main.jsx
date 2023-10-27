import './Main.css'
import CardComponent from './Card.jsx'
import SearchFilter from './SearchFilter.jsx'
import Checkbox from './Checkbox'
import { useEffect, useState } from 'react'
import axios from 'axios'


//comparando con lo que hice en jsx vanilla, la diferencia en el código es que yo hice lo mismo en las tres vistas, usé mi código de main pero para pasados la condición era  if (event.assistance !== undefined) y para futuros if (event.estimate !== undefined). para esto hice tres archivos distintos y se repetía mucho código. acá mi desafío es que quiero haccer los tres en un mismo componente, qué podría hacer? en este componente yo incluí el checkbox y la searchbar porque se van a repetir en tres vistas y quiero evitar la repetición de código. tengo que hacer una función para past events y otra para upcoming, pero cómo puedo incluir TODO en el mismo return?

const Main = (props) => {
   //siempre que cambia un estado de un componente se desmonta con los datos nuevos y se vuelve a montar
    let [eventos, setEventos] = useState([]) //estado de este componente main, no confundir con events
    let [filteredEventos, setFilteredEventos] = useState([])
    let [eventName, setEventName] = useState('');

    useEffect(() => {
        /* axios.get("https://mindhub-xj03.onrender.com/api/amazing")
          .then((response) => {
            setEventos(response.data.events);
          }) */
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
        <h1>{props.title}</h1>
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