import './Footer.css'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'

const Footer = () => {
return (
    <footer className="footer">
        <ul className="navbar__items">
            <li className="navbar__item smediaicon">
                <a className="navbar__link" href="https://www.instagram.com/"> <img className="social" src={Instagram} alt="" /></a>
            </li>
            <li className="navbar__item smediaicon">
                <a className="navbar__link" href="https://www.facebook.com/"> <img className="social" src={Facebook} alt="" /> </a>
            </li>
            <li className="navbar__item smediaicon">
                <a className="navbar__link" href="https://twitter.com/home"><img src={Twitter} className="social" alt="" /> </a>
            </li>
        </ul>
    </footer> 
)
}

export default Footer
