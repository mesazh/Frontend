import React from 'react'
import styled from "styled-components"

interface Props {}

const Navbar = () => {
    return (
        <NavbarContainer>
            <AppLogo>mesazh</AppLogo>
            <Group2>
                <SignOutButton>Sign Out</SignOutButton>
                <UserMascott>U</UserMascott>
            </Group2>
        </NavbarContainer>
    )
}

export default Navbar

const NavbarContainer = styled.div`
background-color: black;
width:100%;
padding:0;
position:fixed;
margin-top:0;
display:flex;
flex-flow:row nowrap;
justify-content:space-between;
align-items:center;
color:white;
height:60px;
`;

const AppLogo = styled.p`
font-style: normal;
font-weight: 400;
font-size: 30px;
padding-left:20px;
`;

const Group2 = styled.div`
text-align: center;
display:flex;
flex-flow:row nowrap;
justify-content:center;
align-items:center;
gap:10px;
padding-right:20px;
`;

const SignOutButton = styled.span`
border:none;
background-color: #292828;
border-radius:6px;
padding:5px 10px 5px 10px;
&:hover{
background-color: #333232;
cursor:pointer;
}
`;

const UserMascott = styled.span`
border:black 1px solid;
background-color: #292828;
border-radius:50%;
width: 40px;
height: 40px;
font-size:30px;
text-align: center;
&:hover{
background-color: #333232;
cursor:pointer;
}
`;