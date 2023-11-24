/* eslint-disable react/prop-types */
import { Button } from "@radix-ui/themes";
import { useDispatch } from "react-redux";
import eventosActions from "../../store/actions/eventosActions"
import './ButtonBuyTickets.css';

const ButtonBuyTickets = ({evento}) => {
  const dispatch = useDispatch();

  const handleBuyTickets = () => {
    dispatch(eventosActions.addToCart(evento));
  };

    return(
    <Button className="buy_tickets_button" onClick={handleBuyTickets}>
      Buy Tickets
    </Button>
    )
}

export default ButtonBuyTickets