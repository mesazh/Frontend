import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import AlternateContactSection from "./alternateContactOrChannelSection/AlternateContactSection";
import AlternateChannelSection from "./alternateContactOrChannelSection/AlternateChannelSection";
import AlternatePeopleSection from "./alternateContactOrChannelSection/AlternatePeopleSection";

type displayStatusType = {
  displayStatus:string
}

interface Props {}

const AlternateSidebar = () => {
  const [onclickToolkitDisplayStatus, setOnclickToolkitDisplayStatus] =
        useState("none");
    
  const [sectionToDisplay, setSectionToDisplay] = useState("Contacts");

  const settingsButtonHandler = (e: any) => {
    e.preventDefault();
    onclickToolkitDisplayStatus === "none"
      ? setOnclickToolkitDisplayStatus("flex")
      : setOnclickToolkitDisplayStatus("none");
  };

  const handleContactButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to Contacts");
    setSectionToDisplay("Contacts");
    console.log("sectionToDisplay : ", sectionToDisplay);
  };

  const handleChannelButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to Channel");
    setSectionToDisplay("Channels");
    console.log("sectionToDisplay : ", sectionToDisplay);
  };

  const handlePeopleButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to People");
    setSectionToDisplay("People");
    console.log("sectionToDisplay : ", sectionToDisplay);
  };
    
  return (
    <FirstHalf>
      <Group2>
        <SettingsNavIcon onClick={settingsButtonHandler}>
          <ArrowForwardIosIcon />
        </SettingsNavIcon>
        <OnclickToolkit displayStatus={onclickToolkitDisplayStatus}>
          <ToolkitOption onClick={handleContactButton}>
            <mark>Contacts</mark>
          </ToolkitOption>
          <ToolkitOption onClick={handleChannelButton}>
            <mark>Channels</mark>
          </ToolkitOption>
          <ToolkitOption onClick={handlePeopleButton}>
            <mark>People</mark>
          </ToolkitOption>
        </OnclickToolkit>
      </Group2>
      <SectionToDisplay>
        {sectionToDisplay === "Contacts" ? (
          <AlternateContactSection />
        ) : sectionToDisplay === "People" ? (
          <AlternatePeopleSection />
        ) : (
          <AlternateChannelSection />
        )}
      </SectionToDisplay>
    </FirstHalf>
  );
};

export default AlternateSidebar;

const Group2 = styled.div`
  /* text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-right: 20px; */
  /* position: fixed; */
`;

const SettingsNavIcon = styled.div`
background-color:#272a2b;
border-right:1px solid black;
  width: 50px;
  height: 7vh;
  min-height: 40px;
  &:hover {
    cursor: pointer;
background-color:#393d3e;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  > .MuiSvgIcon-root {
    color: white;
    font-size: 18px;
  }
`;

const OnclickToolkit = styled.div`
  margin-top: -40px;
  margin-left: 50px;
  background-color: #091317;
  padding: 15px;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: ${(props:displayStatusType) => props.displayStatus};
  font-size: 14px;
  hr {
    color: white;
    width: 100%;
  }
  position:fixed;
`;

const ToolkitOption = styled.div`
  /* border-bottom: 1px white solid; */
  mark {
    background-color: transparent;
    color: white;
  }
  &:hover mark {
    background-color: transparent;
    cursor: pointer;
    color: white;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center; 
  gap: 10px;
`;

const FirstHalf = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #000000;
  width: 50px;
`;

const SectionToDisplay = styled.div`
  height: 83vh;
  overflow-y: scroll;
  background-color:black;
  scrollbar-width: none;  
  ::-webkit-scrollbar {
  display: none;
}
`;
