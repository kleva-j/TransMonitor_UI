import React, { useState } from 'react';
import { PaymentSectionWrapper, Pager } from '../../styles/styles';
import { dummyList } from '../../dummydata';
import { SortSection } from './SortSection';
import { SingleListItem } from './SingleListItem';
import { TableHeader } from './TableHeader';


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

  const handleSearch = (event) => {
    let value = event.target.value;
    if (!value) {
      setState(dummyList);
      return setPagination({ ...pagination, offset: 0, currentPage: 1, pages: setPage(dummyList.length, limit), });
    }
    value = value.toLowerCase();
    const filteredList = state.filter(listItem => listItem.item.toLowerCase().includes(value));
    setState(filteredList);
    return setPagination({
      ...pagination,
      offset: 0,
      pages: setPage(filteredList.length, limit),
      currentPage: 1
    });
  }

  const setLimit = event => {
    const { value } = event.target;
    return setPagination({ ...pagination, limit: value, pages: setPage(state.length, value ) })
  }

  const setOffset = (e, newOffset) => {
    const index = typeof e === "number" ? e : e.target.textContent;
    const offset = newOffset || ((index - 1) * pagination.limit);
    return setPagination({ ...pagination, offset, currentPage: +index })
  }

  const { currentPage, limit, offset, pages } = pagination;

  return (
    <PaymentSectionWrapper>
      <h1>Payments</h1>
      <SortSection handleChange={handleChange} listLength={state.length} setLimit={setLimit} handleSearch={handleSearch} />
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
