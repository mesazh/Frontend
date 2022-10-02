import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import MainBody from "../components/MainBody";
import styled from "styled-components";
import { useState } from "react";

// importing the global state of redux toolkit from redux store
import type { RootState } from "../store";

// importing hooks to work directly on the global states
import { useSelector, useDispatch } from "react-redux";

// importing reducers from various redux slices 
import { decrement, increment } from "../slices/counterSlice";
import { setMesazhIDForTheUserBeingViewed } from "../slices/userIdSlice";
import { setNameForTheUserBeingViewed } from "../slices/userNameSlice";

const Home: NextPage = () => {
  
  // const count = useSelector((state: RootState) => state.counter.value);
  // const userID = useSelector((state: RootState) => state.userId.value);
  // const userName = useSelector((state: RootState) => state.userName.value);
  // const dispatch = useDispatch();

  return (
    <Grouped>
      <Navbar />
      <MainBody />

      {/* <div>
        <input placeholder="user ID here.."></input>
        <button type="submit" 
          aria-label="View a contact"
          onClick={() => dispatch(setMesazhIDForTheUserBeingViewed("yrfdif"))}>Get user</button>
        <p>{userID}</p>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        </div>  */}
      
    </Grouped>
  );
};

export default Home;

const Grouped = styled.div`
  position: fixed;
  /* overflow-y: scroll; */
`;
