import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar/>
    </>
  )
}

export default Home
