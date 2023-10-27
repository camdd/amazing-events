import './Checkbox.css'
import React, { useState, useEffect, useRef } from 'react';


// eslint-disable-next-line react/prop-types
const Checkbox = () => {


  return (
    <div className="barraCheck">
      <form className="checkbox">
        <label htmlFor="category1">
          <input type="checkbox" value="Food" id="category1" className="category-filter" /> Food
        </label>
        <label htmlFor="category2">
          <input type="checkbox" value="Books" id="category2" className="category-filter" /> Books
        </label>
        <label htmlFor="category3">
          <input type="checkbox" value="Museum" id="category3" className="category-filter" /> Museum
        </label>
        <label htmlFor="category4">
          <input type="checkbox" value="Concert" id="category4" className="category-filter" /> Concert
        </label>
        <label htmlFor="category5">
          <input type="checkbox" value="Race" id="category5" className="category-filter" /> Race
        </label>
        <label htmlFor="category6">
          <input type="checkbox" value="Cinema" id="category6" className="category-filter" /> Cinema
        </label>
        <label htmlFor="category7">
          <input type="checkbox" value="Party" id="category7" className="category-filter" /> Party
        </label>

      </form>
    </div>
  );
}

export default Checkbox;
