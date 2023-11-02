/* eslint-disable react/prop-types */
import { TextField } from "@radix-ui/themes";
import Search from "../../assets/Search.png";
import "./SearchFilter.css";

const SearchFilter = ({ eventName, handleInputChange }) => {
  return (
    <div className="inputSearch" role="searchElement">
      <img className="img_searchbar" src={Search} alt="Search" />
      <TextField.Root>
        <TextField.Input
          placeholder=" Search events"
          value={eventName}
          onChange={handleInputChange}
        />
      </TextField.Root>
    </div>
  );
};

export default SearchFilter;
