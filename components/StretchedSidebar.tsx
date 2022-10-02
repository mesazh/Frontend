import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StretchedContactSection from "./stretchedContactOrChannelSection/StretchedContactSection";
import StretchedChannelSection from "./stretchedContactOrChannelSection/StretchedChannelSection";
import StretchedPeopleSection from "./stretchedContactOrChannelSection/StretchedPeopleSection";

type buttonsbgColorType = {
  bgColor:string
}

interface Props {}

const StretchedSidebar = () => {
  const [sectionToDisplay, setSectionToDisplay] = useState("Contacts");
  const [contactButtonBackgroundColor, setContactButtonBackgroundColor] =
    useState("#393d3e");
  const [channelButtonBackgroundColor, setChannelButtonBackgroundColor] =
    useState("#272a2b");
  const [peopleButtonBackgroundColor, setPeopleButtonBackgroundColor] =
    useState("#272a2b");
  const [mesazhIDDisplayState, setMesazhIDDisplayState] = useState(false);
  
  const handleContactButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to Contacts");
    setSectionToDisplay("Contacts");
    console.log("sectionToDisplay : ", sectionToDisplay);
    setContactButtonBackgroundColor("#393d3e");
    setChannelButtonBackgroundColor("#272a2b");
    setPeopleButtonBackgroundColor("#272a2b");
  };

  const handleChannelButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to Channel");
    setSectionToDisplay("Channels");
    console.log("sectionToDisplay : ", sectionToDisplay);
    setContactButtonBackgroundColor("#272a2b");
    setChannelButtonBackgroundColor("#393d3e");
    setPeopleButtonBackgroundColor("#272a2b");
  };

  const handlePeopleButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to People");
    setSectionToDisplay("People");
    console.log("sectionToDisplay : ", sectionToDisplay);
    setContactButtonBackgroundColor("#272a2b");
    setChannelButtonBackgroundColor("#272a2b");
    setPeopleButtonBackgroundColor("#393d3e");
  };

  const handleMesazhIDFlipping = (e: any) => {
    e.preventDefault();
    mesazhIDDisplayState === false
      ? setMesazhIDDisplayState(true)
      : setMesazhIDDisplayState(false);
  };

  return (
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
            <StretchedContactSection />
          ) : sectionToDisplay === "People" ? (
            <StretchedPeopleSection />
          ) : (
            <StretchedChannelSection />
          )}
        </SectionToDisplay>
      </FirstHalf>
  );
};

export default StretchedSidebar;

const MainBodyContainer = styled.div`
  width: 100vw;
  height: 90vh;
  /* min-height:974px; */
  background-color: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  /* z-index:-1; */
  /* position:fixed; */
`;

const ContactOrChannelButtons = styled.div`
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const ContactButton = styled.div`
  background-color: ${(props:buttonsbgColorType) => props.bgColor};
  color:white;
  width: 8vw;
  height: 7vh;
  /* min-width:90px; */
  min-height:40px;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
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
  background-color: ${(props:buttonsbgColorType) => props.bgColor};
  color:white;
  width: 8vw;
  height: 7vh;
  /* min-width:90px; */
  min-height:40px;
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
  border-right: 1px solid black;
`;

const ChannelButton = styled.div`
  background-color: ${(props:buttonsbgColorType) => props.bgColor};
  color:white;
  width: 8vw;
  height: 7vh;
  /* min-width:90px; */
  min-height:40px;
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
  border-right: 1px solid black;
`;

// create a breakpoint for when width < 1000px

const FirstHalf = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  /* height: 1000px; */
  width: 24vw;
`;

const SectionToDisplay = styled.div`
  height: 83vh;
  overflow-y: scroll;
  scrollbar-width:none;
  background-color:#272a2b;
  ::-webkit-scrollbar {
  display: none;
}
`;