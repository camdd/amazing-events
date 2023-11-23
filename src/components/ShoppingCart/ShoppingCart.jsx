/* eslint-disable react/display-name */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./ShoppingCart.css";
import { Link } from "react-router-dom";
import Cart from "../../assets/cart.png";
import Event from "../../assets/event.png"

const ShoppingCart = () => {
  return (
        <NavigationMenu.Item>
          {/* CART */}
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
              <img className="social" src={Cart} alt="" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <h3>Shopping cart</h3>
              <br />
              <li /* style={{ gridRow: "span 3" }} */>
                <NavigationMenu.Link asChild>
                  <Link className="Callout" to="/">
                    <img src={Event} className="calendar" />
                    <div className="CalloutHeading">AMAZING EVENTS</div>
                    <p className="CalloutText">
                      Explore the top events in your city
                    </p>
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

  );
};


export default ShoppingCart;