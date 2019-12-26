import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IconContext } from 'react-icons'

import { ListItem } from '../../styles/styles';

export const SingleListItem = ({ id, initials, item, price, transactionNo, time, status }) => {
  const color = status === 'Reconcilled' ? '#27AE60' : 
    (status === 'Un-Reconcilled' ? '#C4C4C4' : '#EBC315');

  const styles = {
    style: {
      color: "#CCCFD4",
      cursor: "pointer",
      fontSize: "20px",
    }
  }

  return (
    <IconContext.Provider value={styles}>
      <ListItem className="list_item flex" data-id={id} color={color}>
        <span className="col col1">
          <small className="initials">{initials}</small> {item}
        </span>
        <span className="col col2">{price}</span>
        <span className="col col3">{transactionNo}</span>
        <span className="col col4">{time}</span>
        <span className="col col5">{status}</span>
        <span className="col col6"><IoIosArrowDown /></span>
      </ListItem>
    </IconContext.Provider>
  );
};
