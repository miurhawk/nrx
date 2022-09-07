import styled, {createGlobalStyle} from "styled-components";
import "typeface-nunito";
import "typeface-rubik";
import "@fontsource/roboto";

export const Theme = {
  colors: {
    blue: `#5DC1CC`,
    purple: `#6d7eb0`,
    black: `#0B0712`,
    white: `#FFFFFF`,
    pink: `#E8A9AF`,
    grey: `#CED2DB`,

  },
  fonts: {
    body: `Roboto Slab Light, sans-serif`,
    subtitle: `Rubik, sans-serif`,
    heading: `Nunito, serif`,
  }
}


export const GlobalStyle = createGlobalStyle`
  html {
  height: 100%, overflow: auto;
  }
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${Theme.colors.white};
    h1 {color: ${Theme.colors.white}; font-family: ${Theme.fonts.heading}; font-size: 42pt; width: 60vw; padding: 0 20vw; background-color: ${Theme.colors.purple}; margin: 0;}
    h2 {color: ${Theme.colors.white}; font-family: ${Theme.fonts.subtitle}; font-weight: 400; font-size: 26pt; padding: 0; margin: 0;};
    h3 {color: ${Theme.colors.white}; font-family: ${Theme.fonts.heading}; font-size: 13pt; padding: 0; margin: 0;};
    h4 {color: ${Theme.colors.white}; font-family: ${Theme.fonts.subtitle}; text-transform: uppercase; font-size: 16pt; padding: 0; margin: 0;};
    h5 {color: ${Theme.colors.white}; font-family: ${Theme.fonts.subtitle}; font-size: 11pt; padding: 10px 20px; margin: 0;};
    h6 {color: ${Theme.colors.white}; font-family: ${Theme.fonts.heading}; font-size: 12pt; padding: 0; margin: 0; text-transform: uppercase;};
    p {padding: 20px 20vw 0 20vw;}
    a:link {color: ${Theme.colors.blue};}
    a:link:hover {color: ${Theme.colors.pink};}
    a:link:visited {color: ${Theme.colors.purple};}
    a:visited {color: ${Theme.colors.purple};}
    a:visited:hover {color: ${Theme.colors.pink};}
    color: ${Theme.colors.black};
    font-family: ${Theme.fonts.body};
    font-size: 14pt;
  }
`;

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${Theme.colors.white};
    h1 {z-index: 10; color: ${Theme.colors.white}; font-family: ${Theme.fonts.heading}; font-size: 42pt; width: 60vw; padding: 0 20vw; background-color: ${Theme.colors.purple}; margin: 0;}
    h2 {color: ${Theme.colors.white}; font-family: ${Theme.fonts.subtitle}; font-weight: 400; font-size: 26pt; padding: 0; margin: 0;};
    h3 {color: ${Theme.colors.white}; font-family: ${Theme.fonts.heading}; font-size: 13pt; padding: 0; margin: 0;};
    h4 {color: ${Theme.colors.white}; font-family: ${Theme.fonts.subtitle}; text-transform: uppercase; font-size: 16pt; padding: 0; margin: 0;};
    h5 {color: ${Theme.colors.white}; font-family: ${Theme.fonts.subtitle}; font-size: 11pt; padding: 10px 20px; margin: 0;};
    h6 {color: ${Theme.colors.white}; font-family: ${Theme.fonts.heading}; font-size: 12pt; padding: 0; margin: 0; text-transform: uppercase;};
    font-weight: 400;
    color: ${Theme.colors.black};
    font-family: ${Theme.fonts.body};
    font-size: 14pt;
    @media only screen and (max-width: 800px) {
      h1 {
        font-size: 34pt;
        width: 80vw;
        padding: 0 10vw;
      }
      
      p {
        padding: 0 10vw;
      }
    }
`;

