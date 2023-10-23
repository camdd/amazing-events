import './Home.css'
import Layout from '../layouts/Layout'
import Main from '../components/Main'
/* import CardComponent from '../components/Card' */




const Home = () => {
    console.log("Home se está renderizando")
    return (
        <div>

        <Layout>
            <Main/>
        </Layout>
        </div>
    )
}

export default Home