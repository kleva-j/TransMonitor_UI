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
  padding: 70px 50px 0 32px;
  flex-direction: column;
  box-sizing: border-box

  ul.flex {
    justify-content: space-between;
  }

  ul.flex li {
    background: white;
    padding: 10px 15px 10px 15px;
    border-radius: 2px;
  }

  ul.flex li span {
    padding: 0 8px 0 0;
  }

  ul.flex li small {
    color: #787C90;
    font-size: 15px;
  }

  ul.flex li h4 {
    padding: 0;
    margin: 5px 0 0;
    color: #262626
  }

  ul.flex, article {
    margin: 20px 0;
  }

  article {
    height: 350px;
    justify-content: space-between
  }

  button {
    color: #CCCFD4;
  }

  button.left, button.right {
    padding: 6px 9px;
    border-radius: 4px;
    border: 1px solid #DDE0E3;
    background: white;
    margin: 0 8px;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    cursor: pointer;
  }

  .top.flex {
    position: absolute;
    width: 100%;
    top: 30px;
    justify-content: flex-start;
  }

  .top.flex > h3 {
    flex-grow: 1;
    margin-left: 50px
  }

  .top.flex > span {
    width: 300px;
    vertical-align: middle
  }

  .select:focus {
    outline: none;
  }

  .select option {
    font-weight: normal;
  }
  
  main {
    flex-grow: 1;
    border-radius: 3px;
    background: white;
    overflow: hidden;
    position: relative
  }
  
  .graph {
    position: relative;
  }
  
  .gradient, .date {
    position: absolute;
    left: 0;
    width: 100%
  }

  .gradient {
    top: 130px;
  }
  
  .date {
    top: 100px;
  }
  
  .months {
    padding: 0 60px 270px;
    height: 250px;
    border-right: 2px solid #CFE8FB;
  }
`;

export const SideSectionWrapper = styled.aside`
  width: 400px;
  border-radius: 3px;
  margin-left: 10px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;

  .top, .bottom {
    height: 170px;
    padding: 20px;
    background: white;
  }

  .aside > div > h4 {
    color: #2626262;
  }

  hr {
    padding: 2px;
    border: none;
    border-radius: 3px;
    background: #27AE60;
    background: linear-gradient(90deg, #27AE60 80%, rgba(253, 194, 3, 0.463542) 20%, rgba(253, 194, 3, 1) 100%, rgba(253, 194, 3, 1) 100%);
  }

  hr ~ p {
    font-family: Segoe UI;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
    margin: 12px 0;
    color: #262626;
  }
`;
