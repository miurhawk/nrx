import * as React from "react";
import { MainContainer } from "./styles";
import MainMenu from "./components/MainMenu/MainMenu";

import {Footer} from "./components/Footer";
import {useState} from "react";

// // export const BASEURL: string = "http://localhost:3000"
// export const BASEURL: string = "https://server.chalk-technologies.com"

const AppContainer = () => {

  // const trackingId = "UA-179414731-1";
  // ReactGA.initialize(trackingId);

  // history.listen(location => {
  //   ReactGA.set({ page: location.pathname }); // Update the user's current page
  //   ReactGA.pageview(location.pathname); // Record a pageview for the given page
  // });
  const [hght, setHght] = useState("80%");
  const handleScroll = (event) => {
    if (event.target.scrollTop == 0) {
      setHght("80%");
    } else {
      setHght("60%");
    }
  };
  return (
    <MainContainer onScroll={handleScroll} id={"main"}>
      <MainMenu />

      <Footer />

      {/*/!*<Footer />*!/*/}
    </MainContainer>
  );

}


