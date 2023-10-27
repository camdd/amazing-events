/* import { useEffect } from "react" */
import { useParams } from "react-router-dom"

const Details = () => {

    let params = useParams()


    return (
        <>
        Details
        <br />
        <p>{params.id}</p>
        </>
        )
}

export default Details