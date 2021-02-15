import React, { useState } from "react";
import About from "./component/about/about";
import Experience from "./component/experience/experience";
import Footer from "./component/contact/contact";
import Home from "./component/home/home";
import Loader from "./component/loader/loader";
import Page from "./component/page/page";

function Main() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
    {!isLoaded && <Loader />}
    <div style={!isLoaded ? {display: 'none'} : {}}>
      <Page>
        <Home name={"Home"} theme={"dark"} setIsLoaded={setIsLoaded}/>
        <About name={"About"} theme={"light"} />
        <Experience name={"Experience"} theme={"dark"} />
        <Footer name={"Contact"} theme={"light"} />
      </Page>
    </div>
    </>
  );
}

export default Main;
