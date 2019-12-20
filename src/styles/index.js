import styled from 'styled-components';

export const Input = styled.input`
  color: #979797;
  border: none;
  background: transparent;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  padding: 0 5px
`;

export const HeaderStyle = styled.header`
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
  position: absolute;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  top: 0;
  height: 70px

  .logo {
    width: 300px;
    text-align: center;
  }

  .logo h2 {
    color: #1875F0;
  }

  .second_child {
    flex-grow: 1;
    display: inherit;
    justify-content: space-between;
    padding: 0 30px;
  }

  .list_items {
    min-width: 400px;
    display: flex;
    margin-right: 90px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: center;
  }

  span,
  .logo h2,
  .greeting,
  .username,
  .list_items > * {
    margin: 0;
    padding: 0;
  }
  
  .list_items > * {
    font-family: "Segoe UI";
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    vertical-align: middle;
    align-self: center;
  }

  .split {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-self: center;
    text-align: end
  }

  .salutation {
    display: flex;
    flex-direction: column;
    padding-right: 5px;
  }

  .greeting {
    font-size: 10px;
    line-height: 6px
  }

`;

export const SidebarStyles = styled.section`
  width: 300px;
  padding-top: 100px;
  background: #ffffff;
  height: 100vh;

  aside {
   margin-left: 35px;
  }

  .invoice {
    background: #27AE60;
    border-radius: 30px;
    padding: 8px 22px;
    color: white;
    font-size: 12px;
    font-weight: 200;
    border: 0;
    cursor: pointer;
  }

  section.sidebar_content {
    margin: 10px 0;
  }

  .sidebar_content div {
    margin: 20px 0
  }

  .section_header {
    padding: 0px 35px;
    font-size: 13px;
    color: #647787
  }

  li {
    font-family: Segoe UI;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #647787;
    border-left: 7px solid transparent;
    padding: 10px 0 10px 32px;
    cursor: pointer;
    vertical-align: middle;
    height: 100%
  }

  li:hover {
    background: rgba(24, 117, 240, .1);
  }

  li.active {
    background: rgba(24, 117, 240, .1);
    border-left-color: #1875F0;
  }

  li p {
    display: inline-block;
    font-size: 13px;
    padding-left: 15px;
    vertical-align: middle
  }
  
  li img {
    vertical-align: middle;
  }

  li.profile {
    margin-top: 20px
  }

`;

export const CenterContentWrapper = styled.section`
  display: flex;
  padding: 90px 50px 0 32px;
  flex-direction: column;

  ul.flex {
    justify-content: space-between
  }

  ul.flex li {
    background: white;
    padding: 10px 15px 10px 15px;
    border-radius: 2px;
  }

  ul.flex li span {
    padding: 0 8px 0 0
  }

  ul.flex li small {
    color: #787C90;
    font-size: 15px;
  }

  ul.flex li h4 {
    padding: 0;
    margin: 5px 0 0;
  }
`;
