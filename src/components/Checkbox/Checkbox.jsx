import { useState } from "react";
import "./Checkbox.css";
// eslint-disable-next-line react/prop-types
const Checkbox = ({ handleCategoryChange }) => {
  const categories = [
    { id: "food", value: "Food", label: "Food" },
    { id: "books", value: "Books", label: "Books" },
    { id: "museum", value: "Museum", label: "Museum" },
    { id: "concert", value: "Concert", label: "Concert" },
    { id: "race", value: "Race", label: "Race" },
    { id: "party", value: "Party", label: "Party" },
  ];

  let [categoriesChecked, setCategoriesChecked] = useState([]);

  const handleCategoryChecked = (e) => {
    if (e.target.checked) {
      let arrayCategoriesCheckedAux = [...categoriesChecked, e.target.value];
      setCategoriesChecked(arrayCategoriesCheckedAux);
      handleCategoryChange(arrayCategoriesCheckedAux);
    } else {
      let arrayCategoriesCheckedAux = categoriesChecked.filter(
        (category) => e.target.value != category
      );
      setCategoriesChecked(arrayCategoriesCheckedAux);
      handleCategoryChange(arrayCategoriesCheckedAux);
    }
  };

  return (
    <div className="barraCheck" role="checkboxElement">
      {categories.map((category) => (
        <label htmlFor={category.id} key={category.id}>
          <input
            type="checkbox"
            id={category.id}
            value={category.value}
            onChange={(e) => handleCategoryChecked(e)}
          />
          <p> {category.label}</p>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
