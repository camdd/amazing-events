import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import './ButtonGoBack.css';

const ButtonGoBack = () => {
    return(
        <>

        <Button className="btn_back" role="buttonElement">
              <Link className="go_back" to="/">
                Go Back
              </Link>
            </Button>
        </>
    )
}

export default ButtonGoBack