/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./ShoppingCart.css";
import { Link } from "react-router-dom";
import Cart from "../../assets/cart.png";
import Event from "../../assets/event.png";
import Bin from "../../assets/bin.png"
import { useState, useEffect } from "react";


const ShoppingCart = ({ menuOpen, setMenuOpen }) => {
  const [quantity, setQuantity] = useState(0);
  const pricePerItem = 10; 

  const handleIncrement = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotal = () => {
    return quantity * pricePerItem;
  };



  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };





  return (
    <NavigationMenu.Item>
      {/* CART */}
      <NavigationMenu.Trigger className="ShoppingCartTrigger" onPointerEnter={handleMenuToggle} onPointerLeave={handleMenuToggle}>
        <img className="Social" src={Cart} alt="" />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="ShoppingCartContent" onPointerEnter={() => setMenuOpen(true)} onPointerLeave={() => setMenuOpen(false)}>
        <div className="Title">Shopping cart</div>
        <div className="fila1">
          <h3>EVENT</h3>
          <h3>SUBTOTAL</h3>
        </div>
        <ul className="itemList one">
          <li className="item">
            <NavigationMenu.Link asChild>
              <Link className="ShoppingCartCallout" to="/">
                <div className="ItemsContainer">
                  <div className="producto">
                    <img src={Event} className="Event" />
                    <div className="EventAndCounter">
                      <div className="ShoppingCartCalloutHeading">
                        Event name
                      </div>
                      <div className="eventPrice ShoppingCartCalloutHeading">
                      <input type="text" value="10" className="price form-control " disabled />
                      </div>
                      <div className="button-container"
                      onClick={(e) => e.stopPropagation()}>
                        <button
                          className="cart-qty-plus"
                          type="button"
                          value="+"
                          onClick={handleDecrement}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          name="qty"
                          min="0"
                          className="qty inputQuantity"
                          value={quantity}
          readOnly
                        />
                        <button
                          className="cart-qty-minus"
                          type="button"
                          value="-"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="subtotal">
                  <div className="ShoppingCartCalloutHeading">${calculateTotal()}</div>
                    <img className="Bin" src={Bin} alt="" />
                  </div>
                </div>
              </Link>
            </NavigationMenu.Link>
          </li>
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
};

export default ShoppingCart;
