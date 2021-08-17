import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase";

function SidebarOptions({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();
  const addChannel = () => {
    const ChannelName = prompt("please enter the channel name.");

    if (ChannelName) {
      db.collection("rooms").add({
        name: ChannelName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  return (
    <Container onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <Channel>
          <span>#</span> {title}
        </Channel>
      )}
    </Container>
  );
}

export default SidebarOptions;

const Container = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  cursor: pointer;
  padding-left: 2px;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;
const Channel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
