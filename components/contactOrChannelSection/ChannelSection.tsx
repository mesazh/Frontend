import React from "react";
import styled from "styled-components";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

interface Props {}

const ChannelSection = () => {
  return (
    <div>
      <ChannelSectionContainer>
        <NewChannel>
          <IconWrapper>
            <GroupsOutlinedIcon />
          </IconWrapper>
          <p>New Channel</p>
        </NewChannel>
        #existent channels here
      </ChannelSectionContainer>
    </div>
  );
};

export default ChannelSection;

const ChannelSectionContainer = styled.div`
  color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const NewChannel = styled.div`
  background-color: black;
  color: white;
  border: none;
  width: 300px;
  height: 55px;
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

const IconWrapper = styled.div`
  color: black;
  border: black 1px solid;
  background-color: #e9ecef;
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
