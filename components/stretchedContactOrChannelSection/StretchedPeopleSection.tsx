import React,{useState} from "react";
import styled from "styled-components";
import PeopleIcon from "@mui/icons-material/People";

import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";

// using global store
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setMesazhIDForTheUserBeingViewed } from "../../slices/userIdSlice";
import { setNameForTheUserBeingViewed } from "../../slices/userNameSlice";

type eachPersonClickedOrNotType = {
  clickedOrNot: boolean
}

type eachPersonOnlineStatusType = {
  onlineStatus: boolean
}

interface Props {}

const StretchedPeopleSection = () => {

// global state implementation
const count = useSelector((state: RootState) => state.counter.value);
const userID = useSelector((state: RootState) => state.userId.value);
const userName = useSelector((state: RootState) => state.userName.value);
const dispatch = useDispatch();

const [eachPersonBackgroundColor, setEachContactBackgroundColor] =
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

const handleOnePersonClicked = (e: any, indexOfTheClickedContact: any) => {
  e.preventDefault();
  eachPersonBackgroundColor === "#272a2b"
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
      <PeopleSectionContainer>
        <NewPeople>
          <IconWrapper>
            <PeopleIcon />
          </IconWrapper>
          <p>New People</p>
      </NewPeople>
      <PeopleListRendered>
        {contactsList.map((val, index) => {
          return (
            <EachPerson
              onClick={(event) => handleOnePersonClicked(event, index)}
              clickedOrNot={val.clicked} key={val.userId}
            >
              <InitialsWrapper>{val.initials}</InitialsWrapper>
              <PersonName>{val.name}</PersonName>
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
            </EachPerson>
          );
        })}
      </PeopleListRendered>
        #regular users here
      </PeopleSectionContainer>
  );
};

export default StretchedPeopleSection;

const PeopleSectionContainer = styled.div`
  color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const NewPeople = styled.div`
border-right: 1px solid var(--newContactBorderRightColor);
background-color: var(--newContactBackgroundColor);
color: var(--newContactColor);
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
    font-size: 15px;
    border:none;
  }
  color: #939d9f;
`;

const IconWrapper = styled.div`
color: var(--iconWrapperColor);
border: var(--iconWrapperBorderColor) 1px solid;
background-color: var(--iconWrapperBackgroundColor);
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

const PeopleListRendered = styled.div``;

const EachPerson = styled.div`
  border-top: black solid 1px;
  border-right: var(--eachUserInitialsBorderRightColor) solid 1px;  
  
  background-color: ${(props: eachPersonClickedOrNotType) =>
    props.clickedOrNot == true
      ? "var(--eachUserInitialsClickedBackgroundColor)"
      : "var(--eachUserInitialsNotClickedBackgroundColor)"};
  height: 8vh;
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
    background-color: var(--eachUserInitialsHoverBackgroundColor);
  }

  @media only screen and (max-width: 1000px) {
  }
`;

const InitialsWrapper = styled.div`
  border: none;
color: var(--initialsWrapperColor);
background-color: var(--initialsWrapperBackgroundColor);
  border-radius: 50%;
  border: 1px solid black;
  width: 40px;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const PersonName = styled.mark`
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
  color: ${(props:eachPersonOnlineStatusType) =>
    props.onlineStatus === true ? "yellow" : "transparent"};
`;

const NotificationsCount = styled.div`
  border: none;
  background-color: var(--notificationCountBackgroundColor);
  color: var(--notificationCountColor);
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
