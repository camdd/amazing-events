import './Main.css'
import CardComponent from './Card.jsx'
import SearchFilter from './Search-filter.jsx'
import Checkbox from './Checkbox'

const Main = () => {
    return (
        <>
        <div className="search">
            <Checkbox/>
            <SearchFilter/>
        </div>
        <CardComponent />
        </>
    )
}

export default Main