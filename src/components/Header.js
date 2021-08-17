import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Search from "@material-ui/icons/Search";
import HelpOutline from "@material-ui/icons/HelpOutline";
function Header() {
  return (
    <HeaderComponent>
      {/* HeaderLeft */}
      <HeaderLeft>
        <HeaderAvatar
        // TODO: onclick
        />
        <AccessTimeIcon />
      </HeaderLeft>
      {/* Headermiddel */}
      <HeaderSearch>
        <Search />
        <input type='text' placeholder='balaji-slack' />
      </HeaderSearch>
      {/* HeaderRight */}
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderComponent>
  );
}

export default Header;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 4;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0 50px;
  display: flex;
  color: gray;
  border: 1px gray solid;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderComponent = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 2 0px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
