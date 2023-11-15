import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import './ButtonBuyTickets.css';

const ButtonBuyTickets = () => {
    return(
        <>

        <Button className="buy_tickets_button" role="buttonElement">
              <Link className="go_back" to="/">
                Buy Tickets
              </Link>
            </Button>
        </>
    )
}

export default ButtonBuyTickets