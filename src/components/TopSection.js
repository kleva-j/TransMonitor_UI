import React from 'react';
import Chart from '../images/chart.svg';
import { chartDetails } from '../dummydata'

export const TopSection = () => (
  <ul className="flex">
    {chartDetails.map(({id, title, amount}) => (
      <li className="flex" key={id}>
        <span>
          <small>{title}</small>
          <h4>{amount}</h4>
        </span>
        <img src={Chart} width="100px" alt="" />
      </li>
    ))}
  </ul>
);
