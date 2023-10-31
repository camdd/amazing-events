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

    let [selectedCategories] = useState([])
    
    useEffect(() => {
          setEventos(props.events)
          setFilteredEventos(props.events) //el dato que me pasaron por propiedad lo voy a setear en el estado

          //para el check: preguntar: el estado cambió? de ser así, volver a renderizar las cards y trabajar con variables dentro de esa función. tener una variable eventos, hacer otra variable y trabajar con esta dentro de la función para tener los datos actuales, pero el estado no va a cambiar hasta que no termine esa función, se desmonte y se vuelva a montar. ahi usar variables auxiliares dentro de la funcion, o sea variables comunes que tengan los datos pero dentro de esa función para poder trabajar
          //
      }, [props.events]);
    
      const filterEvents = (name) => {
        const eventsFilter = eventos.filter(event => 
          {let nameMatch = event.name.toLowerCase().includes(name.toLowerCase())

            //hacer acá la lógica para el filtro cruzado - filterEventsByCategories y filterevents además de recibir un nombre debería recibir un array
            /* const categoryMatch= 
            selectedCategories.length === 0 ||
            selectedCategories.includes(event.category) */
          return nameMatch 
          });
        setFilteredEventos(eventsFilter);
      };
    
      const handleSearchSubmit = (event) => {
        event.preventDefault();
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

      const filterEventsByCategories = (categories) => {
        let eventsFilter = eventos.filter(evento => categories.includes(evento.category))
        console.log(eventsFilter)
        setFilteredEventos(eventsFilter)
      }

      const handleCategoryChange = (categories) => {
        filterEventsByCategories(categories)
      };
      
    return (
        <>
        <h1 className='page_title text-shadow-diagonal'>{props.title}</h1>
            <form className="search" onSubmit={handleSearchSubmit}>
                <Checkbox 
                  className="checkbox"
                  selectedCategories={selectedCategories}
                  handleCategoryChange={handleCategoryChange}
                />
                <SearchFilter className="search_bar"
                    eventName={eventName}
                    handleInputChange={handleInputChange}  
                />
            </form>
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