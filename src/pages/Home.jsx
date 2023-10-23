import './Home.css'
import Layout from '../layouts/Layout'
import Main from '../components/Main'
/* import CardComponent from '../components/Card' */




const Home = () => {
    console.log("Home se está renderizando")
    return (
        <div>
{/*             <CardComponent/> */}

        <Layout>
            <Main/>
                <h3>Acá debería ir el contenido de las cartas // el mismo no se muestra así que averiguar por qué</h3>
        </Layout>
        </div>
    )
}

export default Home