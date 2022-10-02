import React, { useState } from "react";
import styled from "styled-components";
import HubIcon from "@mui/icons-material/Hub";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";

// using global store
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setMesazhIDForTheUserBeingViewed } from "../../slices/userIdSlice";
import { setNameForTheUserBeingViewed } from "../../slices/userNameSlice";

type eachChannelClickedOrNotType = {
  clickedOrNot: boolean
}

interface Props {}

const ChannelSection = () => {
  // global state implementation
  const dispatch = useDispatch();

  const [eachChannelBackgroundColor, setEachUserBackgroundColor] =
    useState("#272a2b");
  const [channelsList, setChannelsList] = useState([
    {
      initials: "TP",
      name: "Tenz Pak",
      notifications: 2,
      clicked: false,
      userId: "etgheu67",
    },
    {
      initials: "R",
      name: "Roger",
      notifications: 0,
      clicked: false,
      userId: "etgheu69",
    },
    {
      initials: "SD",
      name: "Sauran Deli",
      notifications: 0,
      clicked: false,
      userId: "etgheu72",
    },
    {
      initials: "TP",
      name: "Tanya P",
      notifications: 0,
      clicked: false,
      userId: "etgheu75",
    },
    {
      initials: "DM",
      name: "Dan Marroni",
      notifications: 10,
      clicked: false,
      userId: "etgheu79",
    },
    {
      initials: "Z",
      name: "Zeus",
      notifications: 9,
      clicked: false,
      userId: "etgheu82",
    },
    {
      initials: "CX",
      name: "Cape Xavier",
      notifications: 0,
      clicked: false,
      userId: "etgheu89",
    },
    {
      initials: "DD",
      name: "Domino Domino",
      notifications: 4,
      clicked: false,
      userId: "etgheu92",
    },
    {
      initials: "TW",
      name: "Tape Worm",
      notifications: 0,
      clicked: false,
      userId: "etgheu95",
    },
    {
      initials: "YW",
      name: "Yellow World",
      notifications: 0,
      clicked: false,
      userId: "etgheu97",
    },
    {
      initials: "KT",
      name: "K T",
      notifications: 0,
      clicked: false,
      userId: "etgheu99",
    },
  ]);

  const handleOneChannelClicked = (e: any, indexOfTheClickedChannel: any) => {
    e.preventDefault();
    eachChannelBackgroundColor === "#272a2b"
      ? setEachUserBackgroundColor("#393d3e")
      : setEachUserBackgroundColor("#272a2b");

    setChannelsList((current) =>
      current.map((val, index) => {
        if (index == indexOfTheClickedChannel) {
          return { ...val, clicked: true };
        } else {
          return { ...val, clicked: false };
        }
      })
    );

    channelsList.map((val, index) => {
      if (index == indexOfTheClickedChannel) {
        dispatch(setMesazhIDForTheUserBeingViewed(val.userId));
        dispatch(setNameForTheUserBeingViewed(val.name));
      }
    });
  };

  return (
    <ChannelSectionContainer>
      <NewChannel>
        <IconWrapper>
          <HubIcon />
        </IconWrapper>
      </NewChannel>
      <ChannelsListRendered>
        {channelsList.map((val, index) => {
          return (
            <AlternateSidebar key={val.userId}>
              <EachChannelInitials
                clickedOrNot={val.clicked}
                onClick={(event) => handleOneChannelClicked(event, index)}
              >
                <InitialsWrapper>{val.initials}</InitialsWrapper>
              </EachChannelInitials>
              <EachChannelLongHover
                className="showOnLongHover"
              >
                <ChannelName>{val.name}</ChannelName>
                <OnlineStatusAndNotificationsGroup>
                  {val.notifications > 0 ? (
                    <NotificationsCount>{val.notifications}</NotificationsCount>
                  ) : (
                    ""
                  )}
                </OnlineStatusAndNotificationsGroup>
              </EachChannelLongHover>
            </AlternateSidebar>
          );
        })}
      </ChannelsListRendered>
    </ChannelSectionContainer>
  );
};

export default ChannelSection;

const ChannelSectionContainer = styled.div`
  color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const NewChannel = styled.div`
  border-right: 1px solid #272a2b;
  background-color: black;
  color: white;
  width: 50px;
  height: 50px;
  font-weight: 100;
  font-size: 18px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const IconWrapper = styled.div`
  color: #000000;
  border: black 1px solid;
  background-color: #393d3e;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const ChannelsListRendered = styled.div``;

const EachChannelLongHover = styled.div`
  border-top: black solid 1px;
  background-color: #393d3e;
  height: 50px;
  width: 200px;
  gap: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  visibility: hidden;
  &:hover {
    cursor: pointer;
    background-color: #393d3e;
  }
  position: relative;
  z-index: 3;
`;

const EachChannelInitials = styled.div`
  border-top: black solid 1px;
  background-color: ${(props:eachChannelClickedOrNotType) =>
    props.clickedOrNot == true ? "#393d3e" : "#272a2b"};
  height: 50px;
  width: 50px;
  gap: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #393d3e;
  }
  &:hover ~ ${EachChannelLongHover} {
    visibility: visible;
  }
  /* ${EachChannelLongHover}:hover &{
    visibility:visible;
  } */

  /* &:hover ${EachChannelLongHover} {
    visibility:visible;
  } */
`;

const InitialsWrapper = styled.div`
  border: 1px solid black;
  color: white;
  background-color: #393d3e;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const ChannelName = styled.mark`
  color: white;
  background-color: transparent;
  width: 150px;
  padding-left: 10px;
`;

const OnlineStatusAndNotificationsGroup = styled.div`
  margin-right: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const NotificationsCount = styled.div`
  border: none;
  background-color: #000000;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const AlternateSidebar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;
