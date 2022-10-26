import React, { useState } from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";

// using global store
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setMesazhIDForTheUserBeingViewed } from "../../slices/userIdSlice";
import { setNameForTheUserBeingViewed } from "../../slices/userNameSlice";

type eachContactClickedOrNotType = {
  clickedOrNot: boolean;
};

type eachContactOnlineStatusType = {
  onlineStatus: boolean;
};

interface Props {}

const ContactSection = () => {
  // global state implementation
  const count = useSelector((state: RootState) => state.counter.value);
  const userID = useSelector((state: RootState) => state.userId.value);
  const userName = useSelector((state: RootState) => state.userName.value);
  const dispatch = useDispatch();

  const [eachUserBackgroundColor, setEachUserBackgroundColor] =
    useState("#393d3e");
  const [contactsList, setContactsList] = useState([
    {
      initials: "TP",
      name: "Tenz Pak",
      online: true,
      notifications: 2,
      clicked: false,
      userId: "etgheu67",
    },
    {
      initials: "R",
      name: "Roger",
      online: false,
      notifications: 0,
      clicked: false,
      userId: "etgheu69",
    },
    {
      initials: "SD",
      name: "Sauran Deli",
      online: true,
      notifications: 0,
      clicked: false,
      userId: "etgheu72",
    },
    {
      initials: "TP",
      name: "Tanya P",
      online: false,
      notifications: 0,
      clicked: false,
      userId: "etgheu75",
    },
    {
      initials: "DM",
      name: "Dan Marroni",
      online: false,
      notifications: 10,
      clicked: false,
      userId: "etgheu79",
    },
    {
      initials: "Z",
      name: "Zeus",
      online: true,
      notifications: 9,
      clicked: false,
      userId: "etgheu82",
    },
    {
      initials: "CX",
      name: "Cape Xavier",
      online: false,
      notifications: 0,
      clicked: false,
      userId: "etgheu89",
    },
    {
      initials: "DD",
      name: "Domino Domino",
      online: false,
      notifications: 4,
      clicked: false,
      userId: "etgheu92",
    },
    {
      initials: "TW",
      name: "Tape Worm",
      online: false,
      notifications: 0,
      clicked: false,
      userId: "etgheu95",
    },
    {
      initials: "YW",
      name: "Yellow World",
      online: false,
      notifications: 0,
      clicked: false,
      userId: "etgheu97",
    },
    {
      initials: "KT",
      name: "K T",
      online: false,
      notifications: 0,
      clicked: false,
      userId: "etgheu99",
    },
  ]);

  const handleOneUserClicked = (e: any, indexOfTheClickedContact: any) => {
    e.preventDefault();
    eachUserBackgroundColor === "#272a2b"
      ? setEachUserBackgroundColor("#393d3e")
      : setEachUserBackgroundColor("#272a2b");

    setContactsList((current) =>
      current.map((val, index) => {
        if (index == indexOfTheClickedContact) {
          return { ...val, clicked: true };
        } else {
          return { ...val, clicked: false };
        }
      })
    );

    contactsList.map((val, index) => {
      if (index == indexOfTheClickedContact) {
        dispatch(setMesazhIDForTheUserBeingViewed(val.userId));
        dispatch(setNameForTheUserBeingViewed(val.name));
      }
    });
  };

  return (
    <ContactSectionContainer>
      <NewContact>
        <IconWrapper>
          <PersonIcon />
        </IconWrapper>
      </NewContact>
      <ContactsListRendered>
        {contactsList.map((val, index) => {
          return (
            <AlternateSidebar key={val.userId}>
              <EachUserInitials
                clickedOrNot={val.clicked}
                onClick={(event) => handleOneUserClicked(event, index)}
              >
                <InitialsWrapper>{val.initials}</InitialsWrapper>
              </EachUserInitials>
              <EachContactLongHover className="showOnLongHover">
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
              </EachContactLongHover>
            </AlternateSidebar>
          );
        })}
      </ContactsListRendered>
    </ContactSectionContainer>
  );
};

export default ContactSection;

const ContactSectionContainer = styled.div`
  color: transparent;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--navbarContainerBackgroundColor);

`;

const NewContact = styled.div`
  border-right: 1px solid var(--newContactBorderRightColor);
  background-color: var(--newContactBackgroundColor);
  color: var(--newContactColor);
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

const ContactsListRendered = styled.div``;

const EachContactLongHover = styled.div`
  background-color: var(--eachContactLongHoverBackgroundColor);  border-top: var(--eachUserInitialsBorderRightColor) solid 1px;
  height: 50px;
  width: 200px;
  gap: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  visibility: hidden;
  position: relative;
  z-index: 3;
`;

const EachUserInitials = styled.div`
  border-right: var(--eachUserInitialsBorderRightColor) solid 1px;
  border-top: var(--eachUserInitialsBorderRightColor) solid 1px;
  background-color: ${(props: eachContactClickedOrNotType) =>
    props.clickedOrNot == true
      ? "var(--eachUserInitialsClickedBackgroundColor)"
      : "var(--eachUserInitialsNotClickedBackgroundColor)"};
  height: 50px;
  width: 50px;
  gap: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;

    background-color: var(--eachUserInitialsHoverBackgroundColor);
  }
  &:hover ~ ${EachContactLongHover} {
    visibility: visible;
  }
  /* ${EachContactLongHover}:hover &{
    visibility:visible;
  } */

  /* &:hover ${EachContactLongHover} {
    visibility:visible;
  } */
`;

const InitialsWrapper = styled.div`
  border: 1px solid black;
  color: var(--initialsWrapperColor);
  background-color: var(--initialsWrapperBackgroundColor);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const ContactName = styled.mark`
  color: var(--contactNameColor);
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
  color: ${(props: eachContactOnlineStatusType) =>
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

const AlternateSidebar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: var(--navbarContainerBackgroundColor);
`;
