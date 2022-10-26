import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import MainBody from "../components/MainBody";
import styled from "styled-components";
import { useState , useEffect } from "react";

// importing the global state of redux toolkit from redux store
import type { RootState } from "../store";

// importing hooks to work directly on the global states
import { useSelector, useDispatch } from "react-redux";

// importing reducers from various redux slices
import { decrement, increment } from "../slices/counterSlice";
import { setMesazhIDForTheUserBeingViewed } from "../slices/userIdSlice";
import { setNameForTheUserBeingViewed } from "../slices/userNameSlice";
import useLocalStorage from "use-local-storage";
import { setThemeForTheApp } from "../slices/appThemeSlice";

const Home: NextPage = () => {

  const presentTheme = useSelector((state: RootState) => state.appTheme.value);
  
  const [theme, setTheme] = useLocalStorage(
    "theme",
    presentTheme
  );

  useEffect(() => {
    console.log("app - useEffect called");
    console.log("present theme : ", presentTheme);
    setTheme(presentTheme);
  }, [presentTheme]);

  return (
    <Grouped data-theme={theme}>
      <Navbar />
      <MainBody />
    </Grouped>
  );
};

export default Home;

const Grouped = styled.div`
  position: fixed;
  background-color: white;
`;
