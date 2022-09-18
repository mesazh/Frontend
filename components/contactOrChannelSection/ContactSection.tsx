import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContactsSharpIcon from "@mui/icons-material/ContactsSharp";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";

interface Props {}

const ContactSection = () => {
  const [eachUserBackgroundColor, setEachUserBackgroundColor] =
    useState("#99a4ad");
  const [contactsList, setContactsList] = useState([
    { initials: "TP", name: "Tenz Pak", online: "true", notifications: 2 },
    { initials: "R", name: "Roger", online: "false", notifications: 0 },
    { initials: "SD", name: "Sauran Deli", online: "true", notifications: 0 },
    { initials: "TP", name: "Tanya P", online: "false", notifications: 0 },
    { initials: "DM", name: "Dan Marroni", online: "false", notifications: 10 },
    { initials: "Z", name: "Zeus", online: "true", notifications: 9 },
    { initials: "CX", name: "Cape Xavier", online: "false", notifications: 0 },
    {
      initials: "DD",
      name: "Domino Domino",
      online: "false",
      notifications: 4,
    },
    { initials: "TW", name: "Tape Worm", online: "false", notifications: 0 },
    { initials: "YW", name: "Yellow World", online: "false", notifications: 0 },
    { initials: "KT", name: "K T", online: "false", notifications: 0 },
  ]);

  const handleEachUserBackgroundColorChange = (e: any) => {
    e.preventDefault();
    setEachUserBackgroundColor("#495057");
  };

  return (
      <ContactSectionContainer>
        <NewContactButton>
          <IconWrapper>
            <PersonOutlineOutlinedIcon />
          </IconWrapper>
          <p>New Contact</p>
        </NewContactButton>
        <ContactsListRendered>
          {contactsList.map((val, index) => {
            return (
              <EachUser
                onClick={handleEachUserBackgroundColorChange}
                eachUserBackgroundColor={eachUserBackgroundColor}
              >
                {/* flex:row , space-between */}
                <InitialsWrapper>
                  {/* same style as the user mascot */}
                  {val.initials}
                </InitialsWrapper>
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

export default ContactSection;

const ContactSectionContainer = styled.div`
  color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  position:relative;
`;

const NewContactButton = styled.div`
  background-color: black;
  color: white;
  border: none;
  width: 300px;
  height: 55px;
  font-weight: 100;
  font-size: 18px;
  text-align: center;
  padding-top: 20px 0 0 0;
  &:hover {
    background-color: #333232;
    cursor: pointer;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  gap: 10px;
`;

const IconWrapper = styled.div`
  color: black;
  border: black 1px solid;
  background-color: #e9ecef;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  &:hover {
    /* background-color: #333232; */
    cursor: pointer;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const ContactsListRendered = styled.div`
  /* position:relative; */
`;

const EachUser = styled.div`
  border-bottom: black solid 1px;
  background-color: ${(props) => props.eachUserBackgroundColor};
  height: 55px;
  width: 300px;
  padding-left: 20px;
  gap: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #495057;
  }
`;

const InitialsWrapper = styled.div`
  border: none;
  background-color: #e9ecef;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  /* &:hover {
    background-color: #333232;
    cursor: pointer;
  } */
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const ContactName = styled.mark`
  color: black;
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
  /* gap:10px; */
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
  /* &:hover {
    background-color: #333232;
    cursor: pointer;
  } */
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
