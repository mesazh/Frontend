import { useState} from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useOutsideClick from "./useOutsideClick";
import { useSelector, useDispatch } from "react-redux";
import { setThemeForTheApp } from "../slices/appThemeSlice";
import type { RootState } from "../store";

type onClickToolkitTypes = {
  displayStatus: string;
};

type availableThemesTypes = {
  themesDisplayStatus: string;
};

interface Props {}

const Navbar = () => {
  const [themesDisplayState, setThemesDisplayState] = useState("none");

  const [onclickToolkitDisplayStatus, setOnclickToolkitDisplayStatus] =
    useState("none");

  const theme = useSelector((state: RootState) => state.appTheme.value);
  console.log("theme:", theme);
  const dispatch = useDispatch();

  const toggleTheme = (newTheme:string) => {
    dispatch(setThemeForTheApp(newTheme));
  };

  const handleClickOutside = (e: any) => {
    setOnclickToolkitDisplayStatus("none");
    setThemesDisplayState("none");
  };

  const ref = useOutsideClick(handleClickOutside);

  const settingsButtonHandler = (e: any) => {
    e.preventDefault();
    onclickToolkitDisplayStatus === "none"
      ? setOnclickToolkitDisplayStatus("flex")
      : setOnclickToolkitDisplayStatus("none");

    setThemesDisplayState("none");
  };

  const handleThemesDisplayAttribute = () => {
    if (themesDisplayState == "flex") {
      setThemesDisplayState("none");
    } else {
      setThemesDisplayState("flex");
    }
    console.log("themesDisplayState : ", themesDisplayState);
  };

  return (
      <NavbarContainer>
        <AppLogo>mesazh</AppLogo>
        <Group2>
          <AvailableThemes
            className="availableThemes"
            themesDisplayStatus={themesDisplayState}
          >
            <span
              style={{
                backgroundImage: "linear-gradient(90deg , #282727 , #575555)",
              }} onClick={()=>toggleTheme("darkKnight")}
            >
              Dark knight
            </span>

            <span
              style={{
                backgroundImage: "linear-gradient(90deg , #020a3a , #3c083e)",
              }} onClick={()=>toggleTheme("arcade")}
            >
              Arcade
            </span>
          </AvailableThemes>
          <OnclickToolkit
            className="onclickToolkit"
            displayStatus={onclickToolkitDisplayStatus}
          >
            <ToolkitOption>
              <UserMascott>AniS</UserMascott>
              <span style={{ paddingLeft: "5px" }}>Anivar Saurak</span>
            </ToolkitOption>
            <hr></hr>
            <ToolkitThemeOption>
              <mark onClick={handleThemesDisplayAttribute}>Theme</mark>
              <br></br>
            </ToolkitThemeOption>

            <ToolkitOption>
              <mark>Help</mark>
            </ToolkitOption>
            <ToolkitOption>
              <mark>Sign Out</mark>
            </ToolkitOption>
          </OnclickToolkit>
          <SettingsNavIcon ref={ref} onClick={settingsButtonHandler}>
            <MoreVertIcon />
          </SettingsNavIcon>
        </Group2>
      </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  background-color: var(--navbarContainerBackgroundColor);
  width: 100%;
  padding: 0;
  margin-top: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: var(--navbarContainerColor);
  height: 10vh;
  min-height: 50px;
  z-index: 1;
  position: fixed;
`;

const AppLogo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  padding-left: 20px;
`;

const Group2 = styled.div`
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-right: 20px;
`;

const UserMascott = styled.div`
  color: var(--userMascottColor);
  background-color: var(--userMascottBackgroundColor);
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

const SettingsNavIcon = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const OnclickToolkit = styled.div`
  position: relative;
  /* z-index: 0; */
  margin-top: 205px;
  margin-right: -10px;
  background-color: var(--onclickToolkitBackgroundColor
);
  padding: 15px;
  border: none;
  border-radius: 5px;
  /* height:17px; */
  overflow:auto;
  width: 170px;
  display: ${(props: onClickToolkitTypes) => props.displayStatus};
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  > hr {
    width: 100%;
  }
`;

const ToolkitOption = styled.div`
  z-index: 1;
  /* margin-left:10px; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 0px;
  mark {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: var(--toolkitOptionMarkColor);
    padding: 2px 10px 2px 10px;
    border-radius: 5px;
  }
  &:hover mark {
    background-color: var(--toolkitOptionMarkHoverBackgroundColor);
    cursor: pointer;
    color: var(--toolkitOptionMarkColor);
    padding: 2px 10px 2px 10px;
    border-radius: 5px;
  }
`;

const ToolkitThemeOption = styled.div`
  z-index: 1;
  /* margin-left:10px; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 0px;
  mark {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: var(--toolkitThemeOptionMarkColor);
    padding: 2px 10px 2px 10px;
    border-radius: 5px;
  }
  &:hover mark {
    background-color: var(--toolkitThemeOptionMarkHoverBackgroundColor);
    cursor: pointer;
    color: var(--toolkitThemeOptionMarkColor);
    padding: 2px 10px 2px 10px;
    border-radius: 5px;
  }
`;

const AvailableThemes = styled.div`
  margin-top: 105px;
  margin-right: -10px;
  background-color: var(--availableThemesBackgroundColor);
  /* z-index: 1; */
  padding: 15px;
  border-radius: 5px;
  width: 170px;
  display: ${(props: availableThemesTypes) => props.themesDisplayStatus};
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color:var(--availableThemesColor);
  > span {
    background-image: linear-gradient(90deg, #282727, #3b3a3a);
    padding: 1px 3px 1px 3px;
    border-radius: 2px;
    width: 120px;
  }
  > span:hover {
    cursor: pointer;
  }
`;