import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StretchedContactSection from "./stretchedContactOrChannelSection/StretchedContactSection";
import StretchedChannelSection from "./stretchedContactOrChannelSection/StretchedChannelSection";
import StretchedPeopleSection from "./stretchedContactOrChannelSection/StretchedPeopleSection";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

type buttonsbgColorType = {
  bgColor: string;
};

type eachContactClickedOrNotType = {
  clickedOrNot: boolean
};

interface Props {}

const StretchedSidebar = () => {

  const theme = useSelector(
    (state: RootState) => state.appTheme.value
  );

  const [lightBackgroundForButton, setLightBackgroundForButton] = useState(
    theme === "darkKnight" ? "#393d3e" : "#1a3a67"
  );
  const [darkBackgroundForButton, setDarkBackgroundForButton] = useState(
    theme === "arcade" ? "#272a2b" : "#091e39"
  );

  const [sectionToDisplay, setSectionToDisplay] = useState("Contacts");
  const [contactButtonBackgroundColor, setContactButtonBackgroundColor] =
    useState(lightBackgroundForButton);
  const [channelButtonBackgroundColor, setChannelButtonBackgroundColor] =
    useState(darkBackgroundForButton);
  const [peopleButtonBackgroundColor, setPeopleButtonBackgroundColor] =
    useState(darkBackgroundForButton);
  const [mesazhIDDisplayState, setMesazhIDDisplayState] = useState(false);

  const [buttonsList, setButtonsList] = useState([
    {
      name: "Contacts",
      clicked: true,
      buttonId: "contactsButton",
    },
    {
      name: "Channels",
      clicked: false,
      buttonId: "channelsButton",
    },
    {
      name: "People",
      clicked: false,
      buttonId: "peopleButton",
    },
  ]);

  useEffect(() => {
    console.log("theme changed");
    if (theme === "darkKnight") {
      setLightBackgroundForButton("#393d3e");
      setDarkBackgroundForButton("#272a2b");
    } else {
      setLightBackgroundForButton("#1a3a67");
      setDarkBackgroundForButton("#091e39");
    }
  }, [theme]);

  const handleContactButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to Contacts");
    setSectionToDisplay("Contacts");
    console.log("sectionToDisplay : ", sectionToDisplay);
    setContactButtonBackgroundColor(lightBackgroundForButton);
    setChannelButtonBackgroundColor(darkBackgroundForButton);
    setPeopleButtonBackgroundColor(darkBackgroundForButton);
  };

  const handleChannelButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to Channel");
    setSectionToDisplay("Channels");
    console.log("sectionToDisplay : ", sectionToDisplay);
    setContactButtonBackgroundColor(darkBackgroundForButton);
    setChannelButtonBackgroundColor(lightBackgroundForButton);
    setPeopleButtonBackgroundColor(darkBackgroundForButton);
  };

  const handlePeopleButton = (e: any) => {
    e.preventDefault();
    console.log("toggled to People");
    setSectionToDisplay("People");
    console.log("sectionToDisplay : ", sectionToDisplay);
    setContactButtonBackgroundColor(darkBackgroundForButton);
    setChannelButtonBackgroundColor(darkBackgroundForButton);
    setPeopleButtonBackgroundColor(lightBackgroundForButton);
  };

  const handleMesazhIDFlipping = (e: any) => {
    e.preventDefault();
    mesazhIDDisplayState === false
      ? setMesazhIDDisplayState(true)
      : setMesazhIDDisplayState(false);
  };

  const handleOneButtonClicked = (e: any, indexOfTheClickedContact: any) => {

    setButtonsList(current => current.map((val, index) => {
      if (index == indexOfTheClickedContact) {
        setSectionToDisplay(val.name);
        return { ...val, clicked: true };
      }
      else {
        return { ...val, clicked: false };
      }
    }
    ))
  };

  return (
    <FirstHalf>
      <ContactOrChannelButtons>
        {buttonsList.map((val, index) => {
          return (
            <EachButton
              onClick={(event) => handleOneButtonClicked(event, index)}
              clickedOrNot={val.clicked} key={val.buttonId}
            >
              {val.name}
             
            </EachButton>
          );
        })}
      </ContactOrChannelButtons>
      {/* <ContactOrChannelButtons>
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
      </ContactOrChannelButtons> */}
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

const ContactOrChannelButtons = styled.div`
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const EachButton = styled.div`
background-color: ${(props: eachContactClickedOrNotType) =>
  props.clickedOrNot == true
    ? "var(--eachUserInitialsClickedBackgroundColor)"
    : "var(--eachUserInitialsNotClickedBackgroundColor)"};
  color: white;
  width: 8vw;
  height: 7vh;
  min-height: 40px;
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

const ContactButton = styled.div`
  background-color: ${(props: buttonsbgColorType) => props.bgColor};
  color: white;
  width: 8vw;
  height: 7vh;
  min-height: 40px;
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
  background-color: ${(props: buttonsbgColorType) => props.bgColor};
  color: white;
  width: 8vw;
  height: 7vh;
  min-height: 40px;
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
  background-color: ${(props: buttonsbgColorType) => props.bgColor};
  color: white;
  width: 8vw;
  height: 7vh;
  min-height: 40px;
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
  background-color: #000000;
  width: 24vw;
`;

const SectionToDisplay = styled.div`
  height: 83vh;
  overflow-y: scroll;
  scrollbar-width: none;
  background-color: var(--sectionToDisplayBackgroundColor);
  ::-webkit-scrollbar {
    display: none;
  }
`;
