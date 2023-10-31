
import { TextField } from '@radix-ui/themes';
import Search from '../assets/Search.png';
import './SearchFilter.css'

// eslint-disable-next-line react/prop-types
const SearchFilter = ({ eventName, handleInputChange}) => {
  return (
    <div className='inputSearch'>
      <img className="img_searchbar" src={Search} alt="" />
      <TextField.Root>
        <TextField.Input
          placeholder=" Search events"
          value={eventName}
          onChange={handleInputChange}
        />
      </TextField.Root>
    </div>
  );
}

export default SearchFilter;
