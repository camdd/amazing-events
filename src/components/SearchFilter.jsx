import './SearchFilter.css'
import { TextField } from '@radix-ui/themes'
import Search from '../assets/search.png'

const SearchFilter = () => {
    return (
        <div className='inputSearch'>
        <TextField.Root>
            <img className="calendar_searchbar" src={Search} alt="" />
            <TextField.Input placeholder="Search events" />
        </TextField.Root>
        </div>

    )
}

export default SearchFilter