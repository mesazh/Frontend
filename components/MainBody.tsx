import React, { useEffect, useState } from "react";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

// importing the two types of sidebars
import StretchedSidebar from "./StretchedSidebar";
import AlternateSidebar from "./AlternateSidebar";

// importing the global state of redux toolkit from redux store
import type { RootState } from "../store";

// importing hooks to work directly on the global states
import { useSelector } from "react-redux";

interface Props {}

const MainBody = () => {

  const userID = useSelector((state: RootState) => state.userId.value);
  const userName = useSelector((state: RootState) => state.userName.value);

  const size = useWindowSize();
  const [mesazhIDDisplayState, setMesazhIDDisplayState] = useState(false);
  console.log(`${size}`);

  const handleMesazhIDFlipping = (e: any) => {
    e.preventDefault();
    mesazhIDDisplayState === false
      ? setMesazhIDDisplayState(true)
      : setMesazhIDDisplayState(false);
  };

  if (size == undefined) {
    return;
  }

  return (
    <MainBodyContainer>
      <SidebarComponent>
        {size.width < 1200 ? <AlternateSidebar /> : <StretchedSidebar />}
      </SidebarComponent>

      <SecondHalf>
        <MessageSectionHeader>
          <UsernameContainer
            mesazhIDDisplayState={mesazhIDDisplayState}
            onClick={handleMesazhIDFlipping}
          >
            {userName}
          </UsernameContainer>
          <MesazhIDContainer mesazhIDDisplayState={mesazhIDDisplayState}>
            {userID}
          </MesazhIDContainer>
        </MessageSectionHeader>
        <MainMessageContainer>
          <User1>
            <div style={{ color: "skyBlue" }}>
              <mark>{`${new Date().getHours()}:${new Date().getMinutes()}`}</mark>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </User1>
          <User2>
            <div style={{ color: "skyBlue" }}>
              <mark>{`${new Date().getHours()}:${new Date().getMinutes()}`}</mark>
            </div>
            {`Today  :  ${Date()}`}
            <br></br>
            {`Destination  :  18 November 2070`}
            <br></br>
            {`Days left  :  ${Math.trunc(
              (new Date("November 18, 2070 23:15:30").getTime() -
                new Date().getTime()) /
                (1000 * 60 * 60 * 24)
            )}`}
          </User2>
          <User1>
            <div style={{ color: "skyBlue" }}>
              <mark>{`${new Date().getHours()}:${new Date().getMinutes()}`}</mark>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </User1>
          <User2>
            <div style={{ color: "skyBlue" }}>
              <mark>{`${new Date().getHours()}:${new Date().getMinutes()}`}</mark>
            </div>
            {`Today  :  ${Date()}`}
            <br></br>
            {`Destination  :  18 November 2070`}
            <br></br>
            {`Days left  :  ${Math.trunc(
              (new Date("November 18, 2070 23:15:30").getTime() -
                new Date().getTime()) /
                (1000 * 60 * 60 * 24)
            )}`}
          </User2>
          <User1>
            <div style={{ color: "skyBlue" }}>
              <mark>{`${new Date().getHours()}:${new Date().getMinutes()}`}</mark>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </User1>
          <User2>
            <div style={{ color: "skyBlue" }}>
              <mark>{`${new Date().getHours()}:${new Date().getMinutes()}`}</mark>
            </div>
            {`Today  :  ${Date()}`}
            <br></br>
            {`Destination  :  18 November 2070`}
            <br></br>
            {`Days left  :  ${Math.trunc(
              (new Date("November 18, 2070 23:15:30").getTime() -
                new Date().getTime()) /
                (1000 * 60 * 60 * 24)
            )}`}
          </User2>
          <User1>
            <div style={{ color: "skyBlue" }}>
              <mark>{`${new Date().getHours()}:${new Date().getMinutes()}`}</mark>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </User1>
          <User1>
            <div style={{ color: "skyBlue" }}>
              <mark>{`${new Date().getHours()}:${new Date().getMinutes()}`}</mark>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </User1>
          <User2>
            <div style={{ color: "skyBlue" }}>
              <mark>{`${new Date().getHours()}:${new Date().getMinutes()}`}</mark>
            </div>
            {`Today  :  ${Date()}`}
            <br></br>
            {`Destination  :  18 November 2070`}
            <br></br>
            {`Days left  :  ${Math.trunc(
              (new Date("November 18, 2070 23:15:30").getTime() -
                new Date().getTime()) /
                (1000 * 60 * 60 * 24)
            )}`}
          </User2>
          <User1>
            <div style={{ color: "skyBlue" }}>
              <mark>{`${new Date().getHours()}:${new Date().getMinutes()}`}</mark>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </User1>
          <User2>
            <div style={{ color: "skyBlue" }}>
              <mark>{`${new Date().getHours()}:${new Date().getMinutes()}`}</mark>
            </div>
            {`Today  :  ${Date()}`}
            <br></br>
            {`Destination  :  18 November 2070`}
            <br></br>
            {`Days left  :  ${Math.trunc(
              (new Date("November 18, 2070 23:15:30").getTime() -
                new Date().getTime()) /
                (1000 * 60 * 60 * 24)
            )}`}
          </User2>
        </MainMessageContainer>
        <MessageSectionTyper>
          <FirstDivOfMessageSectionTyper>
            <GeneralIconWrapper>
              <EmojiEmotionsOutlinedIcon />
            </GeneralIconWrapper>
            <GeneralIconWrapper>
              <AttachmentOutlinedIcon />
            </GeneralIconWrapper>
          </FirstDivOfMessageSectionTyper>

          <SecondDivOfMessageSectionTyper>
            <input type="text" placeholder="" />
            <SendIconWrapper>
              <KeyboardArrowRightIcon />
            </SendIconWrapper>
          </SecondDivOfMessageSectionTyper>
        </MessageSectionTyper>
      </SecondHalf>
    </MainBodyContainer>
  );
};

// interface for a window's size
interface WindowSize {
  width: number;
  height: number;
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSize>();

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

export default MainBody;

const MainBodyContainer = styled.div`
  margin-top: 60px;
  width: 100vw;
  height: 90vh;
  background-color: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  z-index: -1;
  position: fixed;
`;

const SidebarComponent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const SecondHalf = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  width: 76vw;
  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-flow: column nowrap;
    gap: 5px;
    width: 100vw;
  }
`;

const MainMessageContainer = styled.div`
  height: 74.3vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 20px;
  margin-left: 10px;
  margin-right: 10px;
  overflow: auto;
`;

const User1 = styled.div`
  text-align: left;
  color: skyBlue;
  font-size: 13px;
  font-family: monospace;
  > div > mark {
    background-color: #ffffb3;
    padding: 0 2px 0 2px;
  }
`;

const User2 = styled.div`
  text-align: right;
  color: skyBlue;
  font-size: 13px;
  font-family: monospace;
  > div > mark {
    background-color: #ffffb3;
    padding: 0 2px 0 2px;
  }
`;

const SectionToDisplay = styled.div`
  height: 83vh;
  overflow-y: scroll;
`;

const MessageSectionHeader = styled.div`
  background-color: #272a2b;
  color: white;
  height: 7vh;
  min-height: 40px;
  font-size: 18px;
  font-weight: 100;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-right: 1px solid black;

  &:hover {
    cursor: pointer;
  }
`;

const UsernameContainer = styled.section`
  color: white;
  width: auto;
  font-size: 18px;
  font-weight: 100;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const MesazhIDContainer = styled.section`
  border-bottom: 1px solid yellow;
  border-radius: 2px;
  padding: 0 5px 0 5px;
  display: ${(props) =>
    props.mesazhIDDisplayState === true ? "block" : "none"};
`;

const MessageSectionTyper = styled.div`
  background-color: #272a2b;
  color: white;
  height: 7vh;
  min-height: 40px;
  font-size: 18px;
  font-weight: 100;
  text-align: center;
  padding-top: 20px 0 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-right: 1px solid black;
`;

const FirstDivOfMessageSectionTyper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

const SecondDivOfMessageSectionTyper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  > input[type="text"] {
    width: 40vw;
    border: #e9ecef 1px solid;
    border-radius: 5px;
    height: 25px;
    background-color: transparent;
    color: #e9ecef;
    opacity: 0.9;
    text-align: center;
    padding-left: 10px;
  }
  > input[type="text"]:focus {
    outline: none;
    opacity: 1;
  }
  gap: 10px;
`;

const GeneralIconWrapper = styled.div`
  color: #ced4da;
  background-color: transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
    padding-bottom: 5px;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const SendIconWrapper = styled.div`
  color: #ced4da;
  background-color: transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
    padding-left: 5px;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
