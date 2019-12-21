import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Input } from '../styles';
import { PaymentSectionWrapper, ListItem, Pager, SortSectionWrapper } from '../styles/styles';
import { dummyList } from '../dummydata';

const SortSection = ({ handleChange, setLimit }) => {

  return (
    <SortSectionWrapper className="flex">
      <div className="left_panel">
        <small>Showing</small> 
        <select onChange={setLimit} className="select_number">
          <option value="5">5</option>
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

  const setPage = (listLength, limit) => {
    const mod = listLength % limit;
    const divide = Math.round(listLength / limit);
    return (mod === 0  || limit > listLength) ? divide : divide+1;
  }

  const [pagination, setPagination] = useState({
    currentPage: 1,
    limit: 5,
    offset: 0,
    pages: setPage(dummyList.length, 5),
  });


  const handleChange = (event) => {
    const { value } = event.target;
    if (value === 'All') {
      setState(dummyList);
      return setPagination({ ...pagination, offset: 0, currentPage: 1, pages: setPage(dummyList.length, limit), });
    } else {
      const filteredResult = dummyList.filter(item => value === item.status);
      setState(filteredResult);
      return setPagination({
        ...pagination,
        offset: 0,
        pages: setPage(filteredResult.length, limit),
        currentPage: 1
      });
    }
  }

  const setLimit = event => {
    const { value } = event.target;
    return setPagination({ ...pagination, limit: value, pages: setPage(state.length, value ) })
  }

  const setOffset = (e, newOffset) => {
    const index = typeof e === "number" ? e : e.target.textContent;
    const offset = newOffset || ((index - 1) * pagination.limit);
    return setPagination({ ...pagination, offset, currentPage: index })
  }

  const { currentPage, limit, offset, pages } = pagination;

  return (
    <PaymentSectionWrapper>
      <h1>Payments</h1>
      <SortSection handleChange={handleChange} limit={limit} setLimit={setLimit} />
      <TableHeader />
      {state.slice(offset, (offset + limit)).map(({ id, initials, item, price, transactionNo, time, status}) => (<SingleListItem key={id} id={id} item={item} initials={initials} price={price} transactionNo={transactionNo} time={time} status={status} />))}

      <section className="flex">
        <p>Showing {offset | 1} to {state.length} of {dummyList.length} entries</p>
        <ul className="flex">
          <li className="pager">Previous</li>
          {
            Array.from({length: pages}, (_v, k) => k+1).map(item => <Pager isActive={item === currentPage} key={item} onClick={setOffset} className="pager">{item}</Pager>)
          }
          <li className="pager">Next</li>
        </ul>
      </section>
    </PaymentSectionWrapper>
  );
};
