import './Checkbox.css'
// Checkbox.jsx
import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const Checkbox = ({ events, allEvents, container, dibujarEventos }) => {
  // eslint-disable-next-line no-unused-vars
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const handleCheckboxChange = () => {
      const selectedCategories = Array.from(document.querySelectorAll(".category-filter"))
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

      if (selectedCategories.length === 0) {
        dibujarEventos(allEvents, container);
      } else {
        // eslint-disable-next-line react/prop-types
        const eventsFilter = events.filter((event) => selectedCategories.includes(event.category));
        dibujarEventos(eventsFilter, container);
      }
    };
  }, [events, allEvents, container, dibujarEventos]);

  return (
    <div className="barraCheck">
      <form className="checkbox">
        <label htmlFor="category1">
          <input type="checkbox" value="Food" id="category1" className="category-filter" /> Food
        </label>
        <label htmlFor="category2">
          <input type="checkbox" value="Books" id="category2" className="category-filter" /> Books
        </label>
        <label htmlFor="category2">
          <input type="checkbox" value="Museum" id="category2" className="category-filter" /> Museum
        </label>
        <label htmlFor="category2">
          <input type="checkbox" value="Concert" id="category2" className="category-filter" /> Concert
        </label>
        <label htmlFor="category2">
          <input type="checkbox" value="Race" id="category2" className="category-filter" /> Race
        </label>
        <label htmlFor="category2">
          <input type="checkbox" value="Cinema" id="category2" className="category-filter" /> Cinema
        </label>
        <label htmlFor="category2">
          <input type="checkbox" value="Party" id="category2" className="category-filter" /> Party
        </label>

      </form>
    </div>
  );
}

export default Checkbox;
