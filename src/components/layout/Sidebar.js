import React from 'react';
import { IconContext } from 'react-icons';
import { SidebarStyles } from '../../styles';
import Overview from '../../images/overview.svg';
import Wallet from '../../images/wallet.svg';
import Wallet2 from '../../images/wallet2.svg';
import Wallet3 from '../../images/wallet3.svg';
import Radio from '../../images/radio.svg';
import Orders from '../../images/orders.svg';
import Orders2 from '../../images/orders2.svg';
import Orders3 from '../../images/orders3.svg';
import Profile from '../../images/profile.svg';
export const Sidebar = () => {
  const iconStyles = {
    style: {
      fontSize: '25px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      color: '#7F8FA4',
      marginRight: '10px'
    }
  }

  return (
    <IconContext.Provider value={iconStyles}>
      <SidebarStyles>
        <aside>
          <button className="invoice">GENERATE INVOICE</button>
        </aside>
        <section className="sidebar_content">
          <div>
            <p className="section_header">Main</p>
            <ul className="list_items">
              <li className="active">
                <img src={Overview} width="18px" alt="" />
                <p>Overview</p>
              </li>
            </ul>
          </div>

          <div>
            <p className="section_header">Payments</p>
            <ul className="list_items">
              <li>
                <img src={Wallet} width="18px" alt="" />
                <p>All Payments</p>
              </li>
              <li>
                <img src={Wallet2} width="18px" alt="" />
                <p>Reconcilled Payments</p>
              </li>
              <li>
                <img src={Wallet3} width="18px" alt="" />
                <p>Un - Reconcilled Payments</p>
              </li>
              <li>
                <img src={Radio} width="18px" alt="" />
                <p>Manual Settlement</p>
              </li>
            </ul>
          </div>

          <div>
            <p className="section_header">Orders</p>
            <ul className="list_items">
              <li>
                <img src={Orders} width="18px" alt="" />
                <p>All Orders</p>
              </li>
              <li>
                <img src={Orders2} width="18px" alt="" />
                <p>Pending Orders</p>
              </li>
              <li>
                <img src={Orders3} width="18px" alt="" />
                <p>Reconcilled Orders</p>
              </li>

              <li className="profile">
                <img src={Profile} width="18px" alt="" />
                <p>Merchant Profile</p>
              </li>
            </ul>
          </div>

        </section>
      </SidebarStyles>
    </IconContext.Provider>
  );
};
