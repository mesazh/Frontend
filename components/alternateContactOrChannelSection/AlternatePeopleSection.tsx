import React, { useState} from "react";
import styled from "styled-components";
import PeopleIcon from "@mui/icons-material/People";

import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";

// using global store
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setMesazhIDForTheUserBeingViewed } from "../../slices/userIdSlice";
import { setNameForTheUserBeingViewed } from "../../slices/userNameSlice";

interface Props {}

const PeopleSection = () => {

// global state implementation
const count = useSelector((state: RootState) => state.counter.value);
const userID = useSelector((state: RootState) => state.userId.value);
const userName = useSelector((state: RootState) => state.userName.value);
const dispatch = useDispatch();

  const [eachPersonBackgroundColor, setEachUserBackgroundColor] =
    useState("#272a2b");
  const [PeopleList, setPeopleList] = useState([
    {
      initials: "TP",
      name: "Tenz Pak",
      online: "true",
      notifications: 2,
      clicked: false,
      userId:"etgheu67"
    },
    {
      initials: "R",
      name: "Roger",
      online: "false",
      notifications: 0,
      clicked: false,
      userId:"etgheu69"
    },
    {
      initials: "SD",
      name: "Sauran Deli",
      online: "true",
      notifications: 0,
      clicked: false,
      userId:"etgheu72"
    },
    {
      initials: "TP",
      name: "Tanya P",
      online: "false",
      notifications: 0,
      clicked: false,
      userId:"etgheu75"
    },
    {
      initials: "DM",
      name: "Dan Marroni",
      online: "false",
      notifications: 10,
      clicked: false,
      userId:"etgheu79"
    },
    {
      initials: "Z",
      name: "Zeus",
      online: "true",
      notifications: 9,
      clicked: false,
      userId:"etgheu82"
    },
    {
      initials: "CX",
      name: "Cape Xavier",
      online: "false",
      notifications: 0,
      clicked: false,
      userId:"etgheu89"
    },
    {
      initials: "DD",
      name: "Domino Domino",
      online: "false",
      notifications: 4,
      clicked: false,
      userId:"etgheu92"
    },
    {
      initials: "TW",
      name: "Tape Worm",
      online: "false",
      notifications: 0,
      clicked: false,
      userId:"etgheu95"
    },
    {
      initials: "YW",
      name: "Yellow World",
      online: "false",
      notifications: 0,
      clicked: false,
      userId:"etgheu97"
    },
    {
      initials: "KT",
      name: "K T",
      online: "false",
      notifications: 0,
      clicked: false,
      userId:"etgheu99"
    },
  ]);

  const handleOnePersonClicked = (e: any, indexOfTheClickedContact: any) => {
    e.preventDefault();
    eachPersonBackgroundColor === "#272a2b"
      ? setEachUserBackgroundColor("#393d3e")
      : setEachUserBackgroundColor("#272a2b");

    setPeopleList(current => current.map((val, index) => {
      if (index == indexOfTheClickedContact)
      {
        return {...val, clicked: true};
      }
      else {
        return { ...val  , clicked : false};
      }
    }
    ));

    PeopleList.map((val, index) => {
      if (index == indexOfTheClickedContact)
      {
        dispatch(setMesazhIDForTheUserBeingViewed(val.userId));
        dispatch(setNameForTheUserBeingViewed(val.name));
      }
    }
    )
  };

  return (
    <div>
      <PeopleSectionContainer>
        <NewPeople>
          <IconWrapper>
            <PeopleIcon />
          </IconWrapper>
        </NewPeople>
        <PeopleListRendered>
        {PeopleList.map((val, index) => {
          return (
            <AlternateSidebar key={val.userId}>
              <EachPersonInitials
                onClick={(event) => handleOnePersonClicked(event, index)}
                eachPersonBackgroundColor={val.clicked}
              >
                <InitialsWrapper>{val.initials}</InitialsWrapper>
              </EachPersonInitials>
              <EachPersonLongHover
                className="showOnLongHover"
                onClick={handleOnePersonClicked}
                eachPersonBackgroundColor={eachPersonBackgroundColor}
              >
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
              </EachPersonLongHover>
            </AlternateSidebar>
          );
        })}
      </PeopleListRendered>
      </PeopleSectionContainer>
    </div>
  );
};

export default PeopleSection;

const PeopleSectionContainer = styled.div`
  color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const NewPeople = styled.div`
border-right: 1px solid #272a2b;
  background-color: black;
  color: white;
  width: 50px;
  height: 50px;
  font-weight: 100;
  font-size: 18px;
  text-align: center;
  padding-top: 20px 0 0 0;
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

const PeopleListRendered = styled.div``;

const EachPersonLongHover = styled.div`
  border-top: black solid 1px;
  background-color: ${(props) => props.eachPersonBackgroundColor};
  height: 50px;
  width: 200px;
  /* margin-left: 251px; */
  gap: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  visibility:hidden;
  &:hover {
    cursor: pointer;
    background-color: #393d3e;
  }
  position:relative;
  z-index:3;
`;

const EachPersonInitials = styled.div`
  border-top: black solid 1px;
  background-color: ${(props) =>
    props.eachPersonBackgroundColor == true ? "#393d3e" : "#272a2b"};
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
  &:hover ~ ${EachPersonLongHover}{
    visibility:visible;
  }
  /* ${EachPersonLongHover}:hover &{
    visibility:visible;
  } */

  /* &:hover ${EachPersonLongHover} {
    visibility:visible;
  } */
`;

const InitialsWrapper = styled.div`
  border: 1px solid black;
  color:white;
  background-color: #393d3e;
  border-radius: 50%;
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
  margin-right: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const OnlineStatus = styled.div`
  color: ${(props) =>
    props.onlineStatus === "true" ? "yellow" : "transparent"};
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
  /* visibility: hidden; */

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center; 
`;
