import './footer.css'

const Footer = () => {
return (
    <footer className="footer">
        <ul className="navbar__items">
          
            <li className="navbar__item">
                <a className="navbar__link" href="https://www.instagram.com/"> <img className="social" src="./img/instagram.png" alt="" /></a>
            </li>
            <li className="navbar__item">
                <a className="navbar__link" href="https://www.facebook.com/"> <img className="social" src="./img/facebook.png" alt="" /> </a>
            </li>
            <li className="navbar__item">
                <a className="navbar__link" href="https://twitter.com/home"><img src="./img/x.png" className="social" alt="" /> </a>
            </li>
        </ul>

    </footer> 
)
}

export default Footer
