import './Search-filter.css'
import { TextField } from '@radix-ui/themes'

const SearchFilter = () => {
    return (
        <div className='inputSearch'>
        <TextField.Root>
            <TextField.Input placeholder="Search" />
        </TextField.Root>
        </div>

    )
}

export default SearchFilter