import Layout from "../layouts/Layout"
import StatsTable from "../components/StatsTable"
import '../components/Main/main.css'

const Stats = () => {
    return (
        <Layout>
            <h1 className="page_title" >Statistics</h1>
            <StatsTable/>
        </Layout>
    )
}

export default Stats

