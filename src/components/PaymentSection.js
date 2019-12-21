import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Input } from '../styles';
import { PaymentSectionWrapper, ListItem, Pager, SortSectionWrapper } from '../styles/styles';
import { dummyList } from '../dummydata';

const SortSection = ({ handleChange, noOfPayments }) => {

  return (
    <SortSectionWrapper className="flex">
      <div className="left_panel">
        <small>Showing</small> 
        <select className="select_number">
          <option value="5">{noOfPayments > 5 ? 5 : noOfPayments}</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <small>out of {dummyList.length} payments</small>
      </div>

      <Input className='search_payment' placeholder="Search payments" />

      <aside className="aside">
        <small>show</small>
        <select onChange={handleChange} className="select_payment">
          <option value="All">All</option>
          <option value="Reconcilled">Reconcilled</option>
          <option value="Un-Reconcilled">Un-Reconcilled</option>
          <option value="Settled">Settled</option>
          <option value="Pending">Unsettled</option>
        </select>
      </aside>
    </SortSectionWrapper>
  )
}


const SingleListItem = ({ id, initials, item, price, transactionNo, time, status}) => {
  const color = status === 'Reconcilled' ? '#27AE60' : 
    (status === 'Un-Reconcilled' ? '#C4C4C4' : '#EBC315');
  return (
    <ListItem className="list_item flex" data-id={id} color={color}>
      <span className="col col1">
        <small className="initials">{initials}</small>
        {item}
      </span>
      <span className="col col2">{price}</span>
      <span className="col col3">{transactionNo}</span>
      <span className="col col4">{time}</span>
      <span className="col col5">{status}</span>
      <span className="col col6"><IoIosArrowDown /></span>
    </ListItem>
  );
}


const TableHeader = () => (
  <div className="table_header flex">
    <span className="col col1">Item Type</span>
    <span className="col col2">Price</span>
    <span className="col col3">Transaction No</span>
    <span className="col col4">Time</span>
    <span className="col col5">Status</span>
    <span className="col col6">Status</span>
  </div>
);


export const PaymentSection = () => {
  const [state, setState] = useState(dummyList);
  const [pagination] = useState({
    currentPage: 1,
    limit: 10,
    offset: 0,
    pages: Math.round(dummyList.length / 10 | 1),
  });

  const handleChange = (event) => {
    const { value } = event.target;
    if (value === 'All') {
      return setState(dummyList);
    }
    const filteredResult = dummyList.filter(item => value === item.status);
    return setState(filteredResult);
  }


  const { currentPage, limit, offset, pages } = pagination;

  return (
    <PaymentSectionWrapper>
      <h1>Payments</h1>
      <SortSection handleChange={handleChange} noOfPayments={state.slice(offset, limit + offset).length} />
      <TableHeader />
      {state.slice(offset, limit + offset).map(({ id, initials, item, price, transactionNo, time, status}) => (<SingleListItem key={id} id={id} item={item} initials={initials} price={price} transactionNo={transactionNo} time={time} status={status} />))}

      <section className="flex">
        <p>Showing {offset | 1} to {state.length} of {dummyList.length} entries</p>
        <ul className="flex">
          <li className="pager">Previous</li>
          {
            Array.from({length: pages}, (_v, k) => k+1).map(item => <Pager isActive={item === currentPage} key={item} className="pager">{item}</Pager>)
          }
          <li className="pager">Next</li>
        </ul>
      </section>
    </PaymentSectionWrapper>
  );
};
