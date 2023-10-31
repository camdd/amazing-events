import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to={"/contact"}> ir a contacto </Link>
      <Link to={"/"}> ir a Home </Link>
    </nav>
  );
}

export default Nav;
