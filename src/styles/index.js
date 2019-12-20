import styled from 'styled-components';

export const Input = styled.input`
  color: #979797;
  border: none;
  background: transparent;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
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
  height: 60px

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
    // border: 1px solid orange;
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
`;
