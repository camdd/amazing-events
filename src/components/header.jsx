import 'bootstrap/dist/css/bootstrap.css'
import './header.css'
import Navbar from './Navbar'

const Header = () => {
 return(
    <header>
        <Navbar/>
        <div className="header"> AMAZING EVENTS</div>
    </header>
 )
}

export default Header