import React from "react";
import styled from "styled-components";
import ContactsSharpIcon from "@mui/icons-material/ContactsSharp";
import PersonIcon from "@mui/icons-material/Person";
interface Props {}

const ContactSection = () => {
  return (
    <div>
      <ContactSectionContainer>
        <NewContactButton>
          <PersonIcon />
          <p>New Contact</p>
        </NewContactButton>
        #your contacts here
      </ContactSectionContainer>
    </div>
  );
};

export default ContactSection;

const ContactSectionContainer = styled.div`
  color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const NewContactButton = styled.div`
  background-color: black;
  color: white;
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
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  gap: 10px;
`;
