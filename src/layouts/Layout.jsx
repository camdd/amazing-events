import Header from "../components/Header"
import Footer from "../components/Footer"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return (
    <>
    <div>
        <div className='containerLayout'>
            <Header title="Titulo principal" description="description"/>
            {children}
            <Footer />
        </div>
    </div>

    </>
    )
}

export default Layout