import React from "react";
import styled from "styled-components";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Create from "@material-ui/icons/Create";
import SidebarOptions from "./SidebarOptions";
import InsertComment from "@material-ui/icons/InsertComment";
import Inbox from "@material-ui/icons/Inbox";
import Drafts from "@material-ui/icons/Drafts";
import BookmarkBorder from "@material-ui/icons/BookmarkBorder";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import Apps from "@material-ui/icons/Apps";
import FileCopy from "@material-ui/icons/FileCopy";
import ExpandLess from "@material-ui/icons/ExpandLess";
import { Add, ExpandMore } from "@material-ui/icons";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  return (
    <SidebarComponent>
      <SidbarHeader>
        <SidebarInfo>
          <h2>balaji server</h2>
          <h3>
            <FiberManualRecord />
            balaji
          </h3>
        </SidebarInfo>
        <Create />
      </SidbarHeader>
      <SidebarOptions Icon={InsertComment} title='Threads' />
      <SidebarOptions Icon={Inbox} title='Mentions & Reactions' />
      <SidebarOptions Icon={Drafts} title='Saved Items' />
      <SidebarOptions Icon={BookmarkBorder} title='Channel browser' />
      <SidebarOptions Icon={PeopleAlt} title='People & user Group' />
      <SidebarOptions Icon={Apps} title='Apps' />
      <SidebarOptions Icon={FileCopy} title='FileBrowser' />
      <SidebarOptions Icon={ExpandLess} title='Show less' />
      <hr />
      <SidebarOptions Icon={ExpandMore} title='channels' />
      <hr />
      <SidebarOptions Icon={Add} addChannelOption title='Add Channel' />

      {channels?.docs.map(doc => (
        <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarComponent>
  );
}

export default Sidebar;

const SidebarComponent = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #402743;
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;
const SidbarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
