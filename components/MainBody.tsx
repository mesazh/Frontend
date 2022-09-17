import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContactSection from "./contactOrChannelSection/ContactSection";
import ChannelSection from "./contactOrChannelSection/ChannelSection";
import PeopleSection from "./contactOrChannelSection/PeopleSection";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";

interface Props {}

const Sidebar = () => {
  const [sectionToDisplay, setSectionToDisplay] = useState("Contacts");
  const [contactButtonBackgroundColor, setContactButtonBackgroundColor] =
    useState("#CED4DA");
  const [channelButtonBackgroundColor, setChannelButtonBackgroundColor] =
    useState("#495057");
  const [peopleButtonBackgroundColor, setPeopleButtonBackgroundColor] =
    useState("#495057");
  const handleContactButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to Contacts");
    setSectionToDisplay("Contacts");
    console.log("sectionToDisplay : ", sectionToDisplay);
    setContactButtonBackgroundColor("#CED4DA");
    setChannelButtonBackgroundColor("#495057");
    setPeopleButtonBackgroundColor("#495057");
  };

  const handleChannelButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to Channel");
    setSectionToDisplay("Channels");
    console.log("sectionToDisplay : ", sectionToDisplay);
    setContactButtonBackgroundColor("#495057");
    setChannelButtonBackgroundColor("#CED4DA");
    setPeopleButtonBackgroundColor("#495057");
  };

  const handlePeopleButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to People");
    setSectionToDisplay("People");
    console.log("sectionToDisplay : ", sectionToDisplay);
    setContactButtonBackgroundColor("#495057");
    setChannelButtonBackgroundColor("#495057");
    setPeopleButtonBackgroundColor("#CED4DA");
  };

  return (
    <SidebarContainer>
      <FirstHalf>
        <ContactOrChannelButtons>
          <ContactButton
            onClick={handleContactButton}
            bgColor={contactButtonBackgroundColor}
          >
            Contacts
          </ContactButton>
          <ChannelButton
            onClick={handleChannelButton}
            bgColor={channelButtonBackgroundColor}
          >
            Channels
          </ChannelButton>
          <PeopleButton
            onClick={handlePeopleButton}
            bgColor={peopleButtonBackgroundColor}
          >
            People
          </PeopleButton>
        </ContactOrChannelButtons>
        <SectionToDisplay>
          {sectionToDisplay === "Contacts" ? (
            <ContactSection />
          ) : sectionToDisplay === "People" ? (
            <PeopleSection />
          ) : (
            <ChannelSection />
          )}
        </SectionToDisplay>
      </FirstHalf>

      <SecondHalf>
        <MessageSectionHeader
          onClick={handleContactButton}
          bgColor={contactButtonBackgroundColor}
        >
          Contact / Group Name
        </MessageSectionHeader>
        <MainMessageContainer>
        <User1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem in fuga animi ipsam aut repudiandae, aliquam laborum
          neque beatae! Animi impedit officiis ratione quia enim culpa nihil.
          Alias, doloribus rem?
        </User1>
        <User2>
          {`Today  :  ${Date()}`}
          <br></br>
          {`Destination  :  18 November 2070`}
          <br></br>
          {`Days left  :  ${Math.trunc(
            (new Date("November 18, 2070 23:15:30").getTime() -
              new Date().getTime()) /
              (1000 * 60 * 60 * 24)
          )}`}
          </User2>
          </MainMessageContainer>
      </SecondHalf>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 100vw;
  background-color: transparent;
  padding-top: 60px;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  border-right: 1px solid black;
  position: fixed;
`;

const ContactOrChannelButtons = styled.div`
  border-top: none;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ContactButton = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.bgColor === "#495057" ? "white" : "black")};
  width: 100px;
  height: 40px;
  font-size: 18px;
  font-weight: 100;
  text-align: center;
  padding-top: 20px 0 0 0;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
`;

const PeopleButton = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.bgColor === "#495057" ? "white" : "black")};
  width: 100px;
  height: 40px;
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
  border-right: 1px solid black;
`;

const ChannelButton = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.bgColor === "#495057" ? "white" : "black")};
  width: 100px;
  height: 40px;
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
  border-right: 1px solid black;
`;

const FirstHalf = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid black;
`;

const SecondHalf = styled.div`
  border-left: 1px solid black;
  display: flex;
  flex-flow: column nowrap;
  /* justify-content: space-evenly; */
  gap: 10px;
  height: 1000px;
`;

const MainMessageContainer = styled.div`

`;

const User1 = styled.div`
  /* width: 600px; */
  text-align: left;
  color: red;
  background-color: #200a0a;
`;

const User2 = styled.div`
  /* width: 600px; */
  text-align: right;
  color: green;
  background-color: #011a01;
`;

const SectionToDisplay = styled.div`
  position: relative;
`;

const MessageSectionHeader = styled.div`
  background-color: #495057;
  color: white;
  width:auto;
  height: 40px;
  font-size: 18px;
  font-weight: 100;
  text-align: center;
  padding-top: 20px 0 0 0;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
`;
