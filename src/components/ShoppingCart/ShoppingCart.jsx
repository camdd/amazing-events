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
import { useSelector } from "react-redux";
import { ScrollArea, Box, Heading, Flex, Text } from "@radix-ui/themes";



const ShoppingCart = ({ menuOpen, setMenuOpen }) => {
  const cartItems = useSelector((state) => state.eventos); // Ajusta el selector según la estructura de tu estado de Redux
  // Asegúrate de que eventos.cart o la estructura correcta del estado de eventos sea utilizada para obtener los items del carrito
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
      <ScrollArea type="always" scrollbars="vertical" style={{ height: 1000 }}>
        <div className="Title">Shopping cart</div>
        <div className="fila1">
          <h3 className="ShoppingCartCalloutHeading">EVENT</h3>
          <h3 className="ShoppingCartCalloutHeading">SUBTOTAL</h3>
        </div>
        {cartItems.map((item) => (
        <ul className="itemList one" key={item._id}>
          <li className="item">
            <NavigationMenu.Link asChild>
              <Link className="ShoppingCartCallout" to="/">
                <div className="ItemsContainer">
                  <div className="producto">
                    <div className="eventImage">
                    <img src={item.image} className="Event" alt={item.name} />
                    </div>
                    <div className="EventAndCounter">
                      <div className="ShoppingCartCalloutHeading">
                        {item.name}
                      </div>
                      <div className="eventPrice ShoppingCartCalloutHeading">
                        {/* Mostrar el precio del evento */}
                        <input type="text" value={item.price} className="price form-control" disabled />
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
                      {/* ... Resto de la información del evento ... */}
                    </div>
                  </div>
                  <div className="subtotal">
                    {/* Mostrar el subtotal del evento */}
                    <div className="ShoppingCartCalloutHeading">${item.price}</div>
                    <img className="Bin" src={Bin} alt="" />
                  </div>
                </div>
              </Link>
            </NavigationMenu.Link>
          </li>
        </ul>
      ))}
      </ScrollArea>
      </NavigationMenu.Content>
      
    </NavigationMenu.Item>
    
    
  );
};

export default ShoppingCart;
