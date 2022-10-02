import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

type onClickToolkitTypes = {
  displayStatus: string;
};

interface Props {}

const Navbar = () => {
  const [onclickToolkitVisibilityStatus, setOnclickToolkitVisibilityStatus] =
    useState("hidden");

  const [onclickToolkitDisplayStatus, setOnclickToolkitDisplayStatus] =
    useState("none");

  const settingsButtonHandler = (e: any) => {
    e.preventDefault();
    onclickToolkitVisibilityStatus === "hidden"
      ? setOnclickToolkitVisibilityStatus("visible")
      : setOnclickToolkitVisibilityStatus("hidden");

    onclickToolkitDisplayStatus === "none"
      ? setOnclickToolkitDisplayStatus("flex")
      : setOnclickToolkitDisplayStatus("none");
  };
  return (
    <NavbarContainer>
      <AppLogo>mesazh</AppLogo>
      <Group2>
        <OnclickToolkit displayStatus={onclickToolkitDisplayStatus}>
          <ToolkitOption>
            <UserMascott>AniS</UserMascott>
            <mark>Anivar Saurak</mark>
          </ToolkitOption>
          <hr></hr>
          <ToolkitOption>
            {/* <IconWrapper>
              <ColorLensOutlinedIcon />
            </IconWrapper> */}
            <mark>Theme</mark>
          </ToolkitOption>
          <hr></hr>
          <ToolkitOption>
            {/* <IconWrapper>
              <ColorLensOutlinedIcon />
            </IconWrapper> */}
            <mark>Help</mark>
          </ToolkitOption>
          <ToolkitOption>
            {/* <IconWrapper>
              <ExitToAppIcon />
            </IconWrapper> */}
            <mark>Sign Out</mark>
          </ToolkitOption>
        </OnclickToolkit>
        <SettingsNavIcon onClick={settingsButtonHandler}>
          <MoreVertIcon />
        </SettingsNavIcon>
      </Group2>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  background-color: #0e0e0e;
  width: 100%;
  padding: 0;
  margin-top: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: white;
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
  /* border: white 1px solid; */
  color: #0e0e0e;
  background-color: #c9dee6;
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

const SettingsNavIcon = styled.div`
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

const IconWrapper = styled.div`
  background-color: #091317;
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
  > .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

const OnclickToolkit = styled.div`
  margin-top: 150px;
  margin-right: -10px;
  background-color: #091317;
  padding: 15px;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: ${(props: onClickToolkitTypes) => props.displayStatus};
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
  gap: 10px;
  mark {
    background-color: transparent;
    color: white;
    padding: 2px 10px 2px 10px;
    border-radius: 5px;
  }
  &:hover mark {
    background-color: #142932;
    cursor: pointer;
    color: white;
    padding: 2px 10px 2px 10px;
    border-radius: 5px;
  }
`;
