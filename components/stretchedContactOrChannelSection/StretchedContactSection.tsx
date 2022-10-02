import React, { useState} from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";

import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";

// using global store
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setMesazhIDForTheUserBeingViewed } from "../../slices/userIdSlice";
import { setNameForTheUserBeingViewed } from "../../slices/userNameSlice";

type eachContactClickedOrNotType = {
  clickedOrNot: boolean
}

type eachContactOnlineStatusType = {
  onlineStatus: boolean
}

interface Props {}

const StretchedContactSection = () => {

  // global state implementation
  const count = useSelector((state: RootState) => state.counter.value);
  const userID = useSelector((state: RootState) => state.userId.value);
  const userName = useSelector((state: RootState) => state.userName.value);
  const dispatch = useDispatch();

  const [eachContactBackgroundColor, setEachContactBackgroundColor] =
    useState("#272a2b");
  
  const [contactsList, setContactsList] = useState([
    {
      initials: "TP",
      name: "Tenz Pak",
      online: true,
      notifications: 2,
      clicked: false,
      userId:"etgheu67"
    },
    {
      initials: "R",
      name: "Roger",
      online: false,
      notifications: 0,
      clicked: false,
      userId:"etgheu69"
    },
    {
      initials: "SD",
      name: "Sauran Deli",
      online: true,
      notifications: 0,
      clicked: false,
      userId:"etgheu72"
    },
    {
      initials: "TP",
      name: "Tanya P",
      online: false,
      notifications: 0,
      clicked: false,
      userId:"etgheu75"
    },
    {
      initials: "DM",
      name: "Dan Marroni",
      online: false,
      notifications: 10,
      clicked: false,
      userId:"etgheu79"
    },
    {
      initials: "Z",
      name: "Zeus",
      online: true,
      notifications: 9,
      clicked: false,
      userId:"etgheu82"
    },
    {
      initials: "CX",
      name: "Cape Xavier",
      online: false,
      notifications: 0,
      clicked: false,
      userId:"etgheu89"
    },
    {
      initials: "DD",
      name: "Domino Domino",
      online: false,
      notifications: 4,
      clicked: false,
      userId:"etgheu92"
    },
    {
      initials: "TW",
      name: "Tape Worm",
      online: false,
      notifications: 0,
      clicked: false,
      userId:"etgheu95"
    },
    {
      initials: "YW",
      name: "Yellow World",
      online: false,
      notifications: 0,
      clicked: false,
      userId:"etgheu97"
    },
    {
      initials: "KT",
      name: "K T",
      online: false,
      notifications: 0,
      clicked: false,
      userId:"etgheu99"
    },
  ]);

  const handleOneUserClicked = (e: any, indexOfTheClickedContact: any) => {
    e.preventDefault();
    eachContactBackgroundColor === "#272a2b"
      ? setEachContactBackgroundColor("#393d3e")
      : setEachContactBackgroundColor("#272a2b");

    setContactsList(current => current.map((val, index) => {
      if (index == indexOfTheClickedContact)
      {
        return {...val, clicked: true};
      }
      else {
        return { ...val  , clicked : false};
      }
    }
    ));

    contactsList.map((val, index) => {
      if (index == indexOfTheClickedContact)
      {
        dispatch(setMesazhIDForTheUserBeingViewed(val.userId));
        dispatch(setNameForTheUserBeingViewed(val.name));
      }
    }
    )
    
  };

  return (
    <ContactSectionContainer>
      <NewContactButton>
        <IconWrapper>
          <PersonIcon />
        </IconWrapper>
        <p>New Contact</p>
      </NewContactButton>
      <ContactsListRendered>
        {contactsList.map((val, index) => {
          return (
            <EachUser
              onClick={(event) => handleOneUserClicked(event, index)}
              clickedOrNot={val.clicked} key={val.userId}
            >
              <InitialsWrapper>{val.initials}</InitialsWrapper>
              <ContactName>{val.name}</ContactName>
              <OnlineStatusAndNotificationsGroup>
                <OnlineStatus onlineStatus={val.online}>
                  <FlashOnOutlinedIcon />
                </OnlineStatus>
                {val.notifications > 0 ? (
                  <NotificationsCount>{val.notifications}</NotificationsCount>
                ) : (
                  ""
                )}
              </OnlineStatusAndNotificationsGroup>
            </EachUser>
          );
        })}
      </ContactsListRendered>
    </ContactSectionContainer>
  );
};

export default StretchedContactSection;

const ContactSectionContainer = styled.div`
  color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const NewContactButton = styled.div`
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

const ContactsListRendered = styled.div``;

const EachUser = styled.div`
  border-top: black solid 1px;
  border-right: 1px solid #000000;
  background-color: ${(props:eachContactClickedOrNotType) =>
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

const ContactName = styled.mark`
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

const OnlineStatus = styled.div`
  color: ${(props:eachContactOnlineStatusType) =>
    props.onlineStatus === true ? "yellow" : "transparent"};
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
