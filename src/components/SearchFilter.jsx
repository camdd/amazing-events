
import { TextField } from '@radix-ui/themes';
import Search from '../assets/search.png';

// eslint-disable-next-line react/prop-types
const SearchFilter = ({ eventName, handleInputChange,}) => {
  return (
    <div className='inputSearch'>
      <TextField.Root>
        <img className="calendar_searchbar" src={Search} alt="" />
        <TextField.Input
          placeholder="Search events"
          value={eventName}
          onChange={handleInputChange}
        />
      </TextField.Root>
    </div>
  );
}

export default SearchFilter;
