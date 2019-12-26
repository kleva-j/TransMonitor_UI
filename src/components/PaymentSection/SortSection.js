import React from 'react';
import { Input } from '../../styles';
import { SortSectionWrapper } from '../../styles/styles';

export const SortSection = ({ handleChange, setLimit, listLength, handleSearch }) => {
  return (
    <SortSectionWrapper className="flex">
      <div className="left_panel">
        <small>Showing</small> 
        <select onChange={setLimit} className="select_number">
          <option value="5">{listLength < 5 ? listLength : 5}</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <small>out of {listLength} payments</small>
      </div>

      <Input className='search_payment' onChange={handleSearch} placeholder="Search payments" />

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
  );
};
