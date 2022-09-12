import React from 'react'
import styled from "styled-components";
import PeopleIcon from '@mui/icons-material/People';

interface Props {}

const PeopleSection = () => {
    return <div>
    <PeopleSectionContainer>
    <NewPeople>
      <PeopleIcon />
    </NewPeople>
    #online people here
  </PeopleSectionContainer>
</div>
}

export default PeopleSection

const PeopleSectionContainer = styled.div`
  color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const NewPeople = styled.div`
background-color: black;
color:white;
  border: none;
  width: 300px;
  height: 40px;
  font-weight: 100;
  font-size: 18px;
  text-align: center;
  padding-top: 20px 0 0 0;
  &:hover {
    background-color: #333232;
    cursor: pointer;
  }
  display:flex;
  flex-flow:row nowrap;
  justify-content:center;
  align-items:center;
  padding-left:20px;
  gap:10px;
`;