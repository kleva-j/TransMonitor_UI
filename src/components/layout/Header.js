import React from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa'
import { Input, HeaderStyle } from '../../styles';

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="logo">
        <h2>TransMonitor</h2>
      </div>
      <div className="second_child">
        <Input type="search" placeholder="search..."/>
        <ul className="list_items">
          <li>Support</li>
          <li>FAQ</li>
          <li><IoIosNotificationsOutline /></li>
          <li className="split">
            <span className="salutation">
              <small className="greeting">Hello</small>
              <small className="username">Oluwaleke Ojo</small>
            </span>
            <span><FaUserCircle /></span>
          </li>
        </ul>
      </div>
    </HeaderStyle>
  );
};
