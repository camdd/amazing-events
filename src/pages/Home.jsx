/* eslint-disable react/prop-types */
import './Home.css'
import Layout from '../layouts/Layout'
import Main from '../components/Main'

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