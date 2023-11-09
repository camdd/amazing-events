/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import CardComponent from "../Card";
import SearchFilter from "../SearchFilter";
import Checkbox from "../Checkbox";
import "./Main.css";
import { useSelector } from "react-redux";
import Provider from "react-redux";



//main ya no recibe props, si no que recibe un nombre q esté en todas las vistas que quiero usar en el filtro, en este caso titulo sería lo que tienen en comun past y upcoming entonces podría usar title en vez de props. si title es past mostrar los eventos filtrados x pasado y así con futuro. el dispatch se usa una sola vez en app y luego uso useselector para poder acceder a los eventos que están en mi store
//englobar main y details en un provider

const Main = ({title}) => {
  let [filteredEvents, setFilteredEvents] = useState([]);
  let [eventName, setEventName] = useState("");
  let [selectedCategories, setSelectedCategories] = useState([]);
  const eventos = useSelector(store => store.eventos)

  useEffect(() => { 
  if (title=="Past events") {
    setFilteredEvents(eventos.filter(event=>event.assistance))
  } else if (title == "Upcoming events") {
    setFilteredEvents(eventos.filter(event=>event.estimate))
  } else {
    setFilteredEvents(eventos)
  }
  }, [eventos, title]);


  const filterEvents = (name, categories) => {
    const eventsFilter = eventos.filter((event) => {
      let nameMatch = event.name.toLowerCase().includes(name.toLowerCase());
      const categoryMatch =
        categories.length === 0 || categories.includes(event.category);
      return nameMatch && categoryMatch;
    });
    setFilteredEvents(eventsFilter);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    filterEvents(eventName, selectedCategories);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEventName(inputValue);
    filterEvents(inputValue, selectedCategories);
  };

  const filterEventsByCategories = (categories) => {
    let eventsFilter = eventos.filter((evento) =>
      categories.includes(evento.category)
    );
    setFilteredEvents(eventsFilter);
  };

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
    filterEvents(eventName, categories);
  };

  return (
    <Provider> 
      <h1 className="page_title text-shadow-diagonal" role="mainElement">{title}</h1>
      <form className="search" onSubmit={handleSearchSubmit}>
        <Checkbox
          className="checkbox"
          selectedCategories={selectedCategories}
          handleCategoryChange={handleCategoryChange}
        />
        <SearchFilter
          className="search_bar"
          eventName={eventName}
          handleInputChange={handleInputChange}
        />
      </form>
      <div className="event_cards">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((evento, index) => (
            <CardComponent key={index} evento={evento} />
          ))
        ) : eventName ? (
          <p>No events found matching your search.</p>
        ) : (
          <div className="card-container">
          {eventos.map((evento, index) => (
            <CardComponent key={index} evento={evento} />
          ))}
        </div>
        )}
      </div>
    </Provider>
  );
};

export default Main;
