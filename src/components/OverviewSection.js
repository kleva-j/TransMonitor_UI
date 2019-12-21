import React from 'react';
import { SideSectionWrapper } from '../styles';
import graph from '../images/gradient.svg';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getCurrentDate = () => {
  const [month, date, year] = (new Date().toDateString()).split(' ').slice(1);
  return `${date}, ${month} ${year}`;
}

export const OverviewSection = () => (
  <article className="flex">
    <main>
      <div className="top flex">
        {/* <h3>Today: 5, Aug 2018</h3> */}
        <h3>Today: {getCurrentDate()}</h3>
        <span>
          <select className="select">
            <option value="1 Jan - 1 Jun">1 Jan - 1 Jun</option>
            <option value="1 Aug - 1 Dec">1 Aug - 1 Dec</option>
          </select>
          <button className="left">&lt;</button>
          <button className="right">&gt;</button>
        </span>
      </div>
      <div className="graph">
        <div className="date">
          {months.map((item, index) => (<span key={index} className="months">{item}</span>))}
        </div>
        <img src={graph} className="gradient" alt="" />
      </div>
    </main>
    <SideSectionWrapper className="flex aside">
      <div className="top">
        <h4>Orders</h4>
        <hr />
        <p>Pending Orders: <b className="yellow">20</b></p>
        <p>Reconcilled Orders: <b className="green">80</b></p>
        <p>Total Orders: <b className="blue">100</b></p>
      </div>
      <div className="bottom">
        <h4>Payments</h4>
        <hr />
        <p>Un-reconcilled Payments: <b className="yellow">20</b></p>
        <p>Reconcilled Payments: <b className="green">80</b></p>
        <p>Total Payments: <b className="blue">100</b></p>
      </div>
    </SideSectionWrapper>
  </article>
);
