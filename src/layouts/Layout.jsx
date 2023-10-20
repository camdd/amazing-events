import Header from "../components/Header"
import Footer from "../components/Footer"


const Layout = () => {
    return (
    <>
    <div>
        <div className='containerLayout'>
            <Header title="Titulo principal" description="description"/>
            <Footer />
        </div>
    </div>

    </>
    )
}

export default Layout