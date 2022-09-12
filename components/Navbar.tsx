import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

interface Props {}

const Navbar = () => {
  const [onclickToolkitVisibilityStatus, setOnclickToolkitVisibilityStatus] =
    useState("hidden");
  const settingsButtonHandler = (e: any) => {
    e.preventDefault();
    onclickToolkitVisibilityStatus === "hidden"
      ? setOnclickToolkitVisibilityStatus("visible")
      : setOnclickToolkitVisibilityStatus("hidden");
  };
  return (
    <NavbarContainer>
      <AppLogo>mesazh</AppLogo>
      <Group2>
        <OnclickToolkit visibilityStatus={onclickToolkitVisibilityStatus}>
          <ToolkitOption>
            <UserMascott>AniS</UserMascott>
            <mark>Anivar Saurak</mark>
          </ToolkitOption>
          <ToolkitOption>
            <IconWrapper>
              <ExitToAppIcon />
            </IconWrapper>
            <mark>Sign Out</mark>
          </ToolkitOption>
          <ToolkitOption>
            <IconWrapper>
              <ColorLensOutlinedIcon />
            </IconWrapper>
            <mark>Theme</mark>
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
  background-color: black;
  width: 100%;
  padding: 0;
  position: fixed;
  margin-top: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 60px;
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

const SignOutButton = styled.span`
  border: none;
  background-color: #292828;
  border-radius: 6px;
  padding: 5px 10px 5px 10px;
  &:hover {
    background-color: #333232;
    cursor: pointer;
  }
`;

const UserMascott = styled.div`
  border: black 1px solid;
  background-color: #292828;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  &:hover {
    background-color: #333232;
    cursor: pointer;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const SettingsNavIcon = styled.div`
  border: black 1px solid;
  background-color: #292828;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  &:hover {
    background-color: #333232;
    cursor: pointer;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  border: black 1px solid;
  background-color: #292828;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  &:hover {
    background-color: #333232;
    cursor: pointer;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const OnclickToolkit = styled.div`
  visibility: ${(props) => props.visibilityStatus};
  position: relative;
  margin-top: 180px;
  background-color: #292828;
  padding: 15px;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

const ToolkitOption = styled.div`
  /* margin-left:10px; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  mark{
    background-color:transparent;
    color:white;
  }
  &:hover mark {
    background-color:yellow;
    cursor:pointer;
    color:black;
  }
`;
