import React from 'react'
import styled from "styled-components";
interface Props {}

const ThemeConfig = () => {
  return <div></div>
}

export default ThemeConfig

import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#000000',
  text: '#f7b2da',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const darkTheme = {
  body: '#070243',
  text: '#cee5f3',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
`;


