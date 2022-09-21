import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import MainBody from "../components/MainBody";
import styled from "styled-components";

import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slices/counterSlice";

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
      <Grouped>
        <Navbar />
        {/* <div>
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
        <MainBody />
      </Grouped>
  );
};

export default Home;

const Grouped = styled.div`
  /* position: fixed; */
  /* overflow-y: scroll; */
`;
