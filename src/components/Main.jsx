import './Main.css'
import CardComponent from './Card.jsx'
import SearchFilter from './SearchFilter.jsx'
import Checkbox from './Checkbox'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Main = () => {

    let [eventos, setEventos] = useState([])

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
        .then((response) => {
            setEventos(response.data.events)
        })
    }, [])



    return (
        <>
            <div className="search">
                <Checkbox/>
                <SearchFilter/>
            </div>
            <div className='event_cards'>
            {
                eventos.map((evento) => {
                    return ( 
                        // eslint-disable-next-line react/jsx-key
                        <CardComponent evento={evento}/>
                )})
            }
            </div>
        </>
    )
}

export default Main