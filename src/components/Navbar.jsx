import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './Navbar.css';
import Icon from '../assets/icon-stage.png'
import Calendar from '../assets/calendar.png'

const Navbar = () => {
    return (
      <NavigationMenu.Root className="NavigationMenuRoot">
        <img className='imgLogo' src={Icon} alt="" />
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            EVENTS <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/">
                    <img src={Calendar} className='calendar' />
                    <div className="CalloutHeading">AMAZING EVENTS</div>
                    <p className="CalloutText">Explore the top events in your city</p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href={"/"} title="All events">
                Check out all the cool events!
              </ListItem>
              <ListItem href={"/past"} title="Past events">
                Get the scoop on what went down in your city
              </ListItem>
              <ListItem href={"/upcoming"} title="Upcoming events">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Don't miss out on what's coming your way!
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        
        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href={"/stats"}>
            STATS
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href={"/contact"}>
            CONTACT
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
    
    )
}

// eslint-disable-next-line react/display-name, react/prop-types
const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));


export default Navbar