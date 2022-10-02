import React from "react";
import styled from "styled-components";
import PeopleIcon from "@mui/icons-material/People";

interface Props {}

const PeopleSection = () => {
  return (
    <div>
      <PeopleSectionContainer>
        <NewPeople>
          <IconWrapper>
            <PeopleIcon />
          </IconWrapper>
          <p>New People</p>
        </NewPeople>
        #regular users here
      </PeopleSectionContainer>
    </div>
  );
};

export default PeopleSection;

const PeopleSectionContainer = styled.div`
  color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const NewPeople = styled.div`
  background-color: black;
  color: white;
  border: none;
  width: 24vw;
  height: 8vh;
  min-height:50px;
  font-weight: 100;
  font-size: 18px;
  text-align: center;
  padding-top: 20px 0 0 0;
  &:hover {
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
    cursor: pointer;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
