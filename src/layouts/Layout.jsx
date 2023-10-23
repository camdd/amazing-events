import Header from "../components/Header"
import Footer from "../components/Footer"
import './Layout.css'


// eslint-disable-next-line no-unused-vars, react/prop-types
const Layout = ({ children }) => {
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