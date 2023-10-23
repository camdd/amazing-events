import Header from "../components/Header"
import Footer from "../components/Footer"


// eslint-disable-next-line no-unused-vars, react/prop-types
const Layout = ({ children }) => {
    console.log('Layout se está renderizando')
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