import React, { useState} from "react";
import styled from "styled-components";
import HubIcon from '@mui/icons-material/Hub';

import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";

// using global store
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setMesazhIDForTheUserBeingViewed } from "../../slices/userIdSlice";
import { setNameForTheUserBeingViewed } from "../../slices/userNameSlice";

type eachChannelClickedOrNotType = {
  clickedOrNot: boolean
}

type eachChannelOnlineStatusType = {
  onlineStatus: boolean
}

interface Props {}

const StretchedChannelSection = () => {

// global state implementation
const count = useSelector((state: RootState) => state.counter.value);
const userID = useSelector((state: RootState) => state.userId.value);
const userName = useSelector((state: RootState) => state.userName.value);
const dispatch = useDispatch();

const [eachChannelBackgroundColor, setEachChannelBackgroundColor] =
  useState("#272a2b");

const [channelsList, setChannelsList] = useState([
  {
    initials: "TP",
    name: "Tenz Pak",
    notifications: 2,
    clicked: false,
    userId:"etgheu67"
  },
  {
    initials: "R",
    name: "Roger",
    notifications: 0,
    clicked: false,
    userId:"etgheu69"
  },
  {
    initials: "SD",
    name: "Sauran Deli",
    notifications: 0,
    clicked: false,
    userId:"etgheu72"
  },
  {
    initials: "TP",
    name: "Tanya P",
    notifications: 0,
    clicked: false,
    userId:"etgheu75"
  },
  {
    initials: "DM",
    name: "Dan Marroni",
    notifications: 10,
    clicked: false,
    userId:"etgheu79"
  },
  {
    initials: "Z",
    name: "Zeus",
    notifications: 9,
    clicked: false,
    userId:"etgheu82"
  },
  {
    initials: "CX",
    name: "Cape Xavier",
    notifications: 0,
    clicked: false,
    userId:"etgheu89"
  },
  {
    initials: "DD",
    name: "Domino Domino",
    notifications: 4,
    clicked: false,
    userId:"etgheu92"
  },
  {
    initials: "TW",
    name: "Tape Worm",
    notifications: 0,
    clicked: false,
    userId:"etgheu95"
  },
  {
    initials: "YW",
    name: "Yellow World",
    notifications: 0,
    clicked: false,
    userId:"etgheu97"
  },
  {
    initials: "KT",
    name: "K T",
    notifications: 0,
    clicked: false,
    userId:"etgheu99"
  },
]);

const handleOneChannelClicked = (e: any, indexOfTheClickedChannel: any) => {
  e.preventDefault();
  eachChannelBackgroundColor === "#272a2b"
    ? setEachChannelBackgroundColor("#393d3e")
    : setEachChannelBackgroundColor("#272a2b");

  setChannelsList(current => current.map((val, index) => {
    if (index == indexOfTheClickedChannel)
    {
      return {...val, clicked: true};
    }
    else {
      return { ...val  , clicked : false};
    }
  }
  ));

  channelsList.map((val, index) => {
    if (index == indexOfTheClickedChannel)
    {
      dispatch(setMesazhIDForTheUserBeingViewed(val.userId));
      dispatch(setNameForTheUserBeingViewed(val.name));
    }
  }
  )
  
};


  return (
    <div>
      <ChannelSectionContainer>
        <NewChannel>
          <IconWrapper>
            <HubIcon />
          </IconWrapper>
          <p>New Channel</p>
        </NewChannel>
        <ChannelsListRendered>
        {channelsList.map((val, index) => {
          return (
            <EachChannel
              onClick={(event) => handleOneChannelClicked(event, index)}
              clickedOrNot={val.clicked} key={val.userId}
            >
              <InitialsWrapper>{val.initials}</InitialsWrapper>
              <ChannelName>{val.name}</ChannelName>
              <OnlineStatusAndNotificationsGroup>
                {val.notifications > 0 ? (
                  <NotificationsCount>{val.notifications}</NotificationsCount>
                ) : (
                  ""
                )}
              </OnlineStatusAndNotificationsGroup>
            </EachChannel>
          );
        })}
      </ChannelsListRendered>
      </ChannelSectionContainer>
    </div>
  );
};

export default StretchedChannelSection;

const ChannelSectionContainer = styled.div`
  color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const NewChannel = styled.div`
   background-color: black;
  color: white;
  border-right: 1px solid #272a2b;
  width: 24vw;
  height: 8vh;
  min-height: 50px;
  font-weight: 100;
  font-size: 18px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  
  &:hover p {
    cursor: pointer;
    color: #cbcaca;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  gap: 20px;
  > p {
    border: 1px solid #272a2b;
    /* padding: 5px 15px 5px 15px; */
    /* border-radius: 5px; */
    font-size: 15px;
    border:none;
    /* background-color: #393d3e; */
  }
  color: #939d9f;
`;

const IconWrapper = styled.div`
color: black;
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

const EachChannel = styled.div`
  border-top: black solid 1px;
  border-right: 1px solid #000000;
  background-color: ${(props:eachChannelClickedOrNotType) =>
    props.clickedOrNot == true ? "#393d3e" : "#272a2b"};
  height: 8vh;
  min-height: 50px;
  width: 24vw;
  padding-left: 20px;
  gap: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #393d3e;
  }

  @media only screen and (max-width: 1000px) {
  }
`;

const InitialsWrapper = styled.div`
  border: none;
  background-color: #393d3e;
  color: white;
  border-radius: 50%;
  border: 1px solid black;
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
  margin-left: 20px;
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
