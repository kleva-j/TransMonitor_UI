import styled from 'styled-components';

export const PaymentSectionWrapper = styled.section`
  margin: 10px 0  

  h1 {
    font-weight: 300;
    font-size: 24px
  }

  .table_header, .list_item {
    justify-content: space-around;
    align-content: center;
    border-radius: 4px
    flex-wrap: wrap;
  }
  
  .table_header {
    background: #EAEEF0;
    height: 50px;
  }

  .table_header > .col {
    color: #7F8FA4;
  }
  
  .table__header > .col{
    width: 15%
  }

  .initials {
    border-radius: 50%;
    padding: 10px 11px;
    background: #7F8FA4;
    margin-right: 22px;
    color: #ffffff;
  }
  
  .table_header > .col1 {
    width: 25%
    padding-left: 40px;
  }

  .table_header > .col6 {
    visibility: hidden;
  }

  .list_item {
    height: 70px;
    background: #ffffff;
    border-bottom: 1px solid #CCCFD4;
  
  }

  .list_item > .col {
    padding: 8px;
    width: 12%;
  }

  .list_item > .col1 {
    width: 39%;
    padding-left: 40px;
  }

  .list_item > .col4 {
    padding-left: 60px
  }

  .list_item > .col5 {
    padding-left: 50px
  }

  .list_item > .col6 {
    text-align: center;
  }

  .list_item > .col5 {
    border: 1px solid #CCCFD4;
    border-radius: 20px;
    position: relative;
    font-size: 14px
  }

  section.flex {
    justify-content: space-between;
  }

  section.flex p {
    padding: 25px 0;
  }

  .pager {
    padding: 6px 10px !important;
    border: 1px solid #CED0DA;
    border-radius: 4px;
    background: transparent;
  }

`;


export const ListItem = styled.div`

  .col {
    color: #7F8FA4;
  }

  .col:5 {
    color: ${props => props.color};
  }

  .col1 {
    color: #414042 ;
  }

  .col5::before {
    content: '.';
    background-color: ${props => props.color};
    position: absolute;
    color: yellow;
    font-weight: bold;
    height: 5px;
    width: 5px;
    padding: 5px;
    border-radius: 50%;
    left: 32px;
    top: 15px
  }
`;

export const Pager = styled.li`
  background: ${props => props.isActive && '#1875F0'} !important;
  color: ${props => props.isActive && 'white'} !important;
  margin: 0
`;

export const SortSectionWrapper = styled.div`

  padding: 10px 0 20px;
  position: relative;

  .search_payment {
    border-bottom: 0.5px solid #787878;
    font-size: 14px;
    width: 400px;
    height: 35px
  }

  .left_panel {
    width: 400px;
    padding-top: 10px;
  }

  .left_panel > small {
    font-size: 16px
  }

  .select_number {
    border: none;
    background: transparent;
    margin: 0;
    padding: 0 10px;
    color: #1875F0;
  }

  .select_payment {
    border-radius: 3px;
    background: transparent;
    width: 200px;
  }

  .aside {
    border: 1px solid red:
    padding-left: 100px;
    position: absolute;
    display: flex;
    justify-content: space-around;
    left: 1000px;
  }

  .aside > small {
    font-size: 16px;
    padding: 10px 15px
  }

`;