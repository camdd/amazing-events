import './Home.css'
import Layout from '../layouts/Layout'
import Main from '../components/Main'



//prop drilling (leer más sobre eso).paso de un componente a otro y de ese a otro

const Home = (props) => {
    return (
        <div>
        <Layout>
            <Main title={props.title} events={props.events} />
        </Layout>
        </div>
    )
}

export default Home