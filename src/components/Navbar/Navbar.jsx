/* eslint-disable react/display-name */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "./Navbar.css";
import Icon from "../../assets/icon-stage.png";
import Calendar from "../../assets/calendar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot" role="navbarElement">
      <Link to="/">
        <img className="imgLogo" src={Icon} alt="Logo" />
      </Link>
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            EVENTS <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: "span 3" }}>
                <NavigationMenu.Link asChild>
                  <Link className="Callout" to="/">
                    <img src={Calendar} className="calendar" />
                    <div className="CalloutHeading">AMAZING EVENTS</div>
                    <p className="CalloutText">
                      Explore the top events in your city
                    </p>
                  </Link>
                </NavigationMenu.Link>
              </li>

              <Link to="/">
                <ListItem title="All events">
                  Check out all the cool events!
                </ListItem>
              </Link>

              <Link to="/past">
                <ListItem title="Past events">
                  Get the scoop on what went down in your city
                </ListItem>
              </Link>

              <Link to="/upcoming">
                <ListItem title="Upcoming events">
                  Don't miss out on what's coming your way!
                </ListItem>
              </Link>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link to="/stats" className="NavigationMenuLink">
            STATS
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link to="/contact" className="NavigationMenuLink">
            CONTACT
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default Navbar;
