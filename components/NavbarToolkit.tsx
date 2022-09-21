import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

interface Props {}

const NavbarToolkit = () => {
    return (
        <OnclickToolkit
        displayStatus={onclickToolkitDisplayStatus}
      >
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
      </OnclickToolkit>)
}

export default NavbarToolkit

const SignOutButton = styled.span`displayStatus={onclickToolkitDisplayStatus}displayStatus={onclickToolkitDisplayStatus}
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
  /* visibility: ${(props) =>
    props.visibilityStatus == "flex" ? "visible" : "hidden"}; */
  margin-top: 220px;
  margin-right: -20px;
  background-color: #292828;
  padding: 15px;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: ${(props) => props.displayStatus};
`;

const ToolkitOption = styled.div`
  /* margin-left:10px; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  mark {
    background-color: transparent;
    color: white;
  }
  &:hover mark {
    background-color: transparent;
    cursor: pointer;
    color: white;
  }
`;
