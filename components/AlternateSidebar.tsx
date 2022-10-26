import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import AlternateContactSection from "./alternateContactOrChannelSection/AlternateContactSection";
import AlternateChannelSection from "./alternateContactOrChannelSection/AlternateChannelSection";
import AlternatePeopleSection from "./alternateContactOrChannelSection/AlternatePeopleSection";
import  useOutsideClick  from "./useOutsideClick";


type displayStatusType = {
  displayStatus:string
}

interface Props {}

const AlternateSidebar = () => {

  const [onclickToolkitDisplayStatus, setOnclickToolkitDisplayStatus] =
        useState("none");
    
  const [sectionToDisplay, setSectionToDisplay] = useState("Contacts");

  
  const handleClickOutside = (e: any) => {
    setOnclickToolkitDisplayStatus("none");
  };

  const ref = useOutsideClick(handleClickOutside);

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
        <SidebarOptionsButton ref={ref} onClick={settingsButtonHandler}>
          <ArrowForwardIosIcon />
        </SidebarOptionsButton>
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
`;

const SidebarOptionsButton = styled.div`
background-color:var(--sidebarOptionsButtonBackgroundColor);
border-right:1px solid var(--sidebarOptionsButtonRightBorderColor);
  width: 50px;
  height: 7vh;
  min-height: 40px;
  &:hover {
    cursor: pointer;
/* background-color:var(--sidebarOptionsButtonHoverBackgroundColor); */
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  > .MuiSvgIcon-root {
    color: var(--sendIconWrapperColor);
    font-size: 18px;
  }
`;

const OnclickToolkit = styled.div`
  margin-top: -40px;
  margin-left: 50px;
  background-color: var(--onclickToolkitBackgroundColor);
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
  position:fixed;
`;

const ToolkitOption = styled.div`
  mark {
    background-color: var(--toolkitOptionBackgroundColor);
    color: var(--toolkitOptionColor);
  }
  &:hover mark {
    background-color: var(--toolkitOptionBackgroundColor);
    color: var(--toolkitOptionColor);
    cursor: pointer;
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
  background-color:var(--sectionToDisplayBackgroundColor);
  scrollbar-width: none;  
  ::-webkit-scrollbar {
  display: none;
}
`;