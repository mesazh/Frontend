import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContactSection from "./contactOrChannelSection/ContactSection";
import ChannelSection from "./contactOrChannelSection/ChannelSection";
import PeopleSection from "./contactOrChannelSection/PeopleSection";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";

interface Props {}

const Sidebar = () => {
  const [sectionToDisplay, setSectionToDisplay] = useState("Contacts");
  const [contactButtonBackgroundColor, setContactButtonBackgroundColor] = useState("#CED4DA");
  const [channelButtonBackgroundColor, setChannelButtonBackgroundColor] = useState("#495057");
  const [peopleButtonBackgroundColor, setPeopleButtonBackgroundColor] = useState("#495057");
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
          <ContactButton onClick={handleContactButton} bgColor={contactButtonBackgroundColor}>Contacts</ContactButton>
          <ChannelButton onClick={handleChannelButton} bgColor={channelButtonBackgroundColor}>Channels</ChannelButton>
          <PeopleButton onClick={handlePeopleButton} bgColor={peopleButtonBackgroundColor}>People</PeopleButton>
        </ContactOrChannelButtons>
        <SectionToDisplay>
          {sectionToDisplay === "Contacts" ? (
            <ContactSection />
          ) : (sectionToDisplay === "People" ? (
            <PeopleSection />
          ) : 
            <ChannelSection />
          )}
          </SectionToDisplay>
      </FirstHalf>
      <ThemeContainer>
        <ColorLensOutlinedIcon />
        Theme
      </ThemeContainer>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 300px;
  background-color: white;
  padding-top: 60px;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border-right:1px solid black;
`;

const ContactOrChannelButtons = styled.div`
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ContactButton = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.bgColor==="#495057"?"white":"black"};
  width: 100px;
  height: 40px;
  font-size: 18px;
  font-weight: 100;
  text-align: center;
  padding-top: 20px 0 0 0;
  &:hover {
    cursor: pointer;
  }
  display:flex;
  flex-flow:row nowrap;
  justify-content:center;
  align-items:center;
  border-right:1px solid black;
`;

const PeopleButton = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.bgColor==="#495057"?"white":"black"};
  width: 100px;
  height: 40px;
  font-weight: 100;
  font-size: 18px;
  text-align: center;
  padding-top: 20px 0 0 0;
  &:hover {
    cursor: pointer;
  }
  display:flex;
  flex-flow:row nowrap;
  justify-content:center;
  align-items:center;
  border-right:1px solid black;
`;

const ChannelButton = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.bgColor==="#495057"?"white":"black"};
  width: 100px;
  height: 40px;
  font-weight: 100;
  font-size: 18px;
  text-align: center;
  padding-top: 20px 0 0 0;
  &:hover {
    cursor: pointer;
  }
  display:flex;
  flex-flow:row nowrap;
  justify-content:center;
  align-items:center;
  border-right:1px solid black;
`;

const ThemeContainer = styled.div`
  background-color: black;
  border: none;
  width: 300px;
  height: 40px;
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

const FirstHalf = styled.div``;

const SectionToDisplay = styled.div`
`;