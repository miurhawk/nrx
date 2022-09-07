import * as React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {ScoreboardBanner} from "../ScoreboardBanner";
import {FullWidthPhoto} from "./styles";
import {Theme} from "../../styles"; // requires a loader





export const Approach = () => {

    return (
        <>
            <FullWidthPhoto>
                <Carousel showStatus={false} showThumbs={false} dynamicHeight={true} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src="https://images.unsplash.com/photo-1572594417697-0764e4e7ee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2467&q=80" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1550016598-add5550c93ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1758&q=80" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1520302659201-7ecf4ae863d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2372&q=80" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80" />
                    </div>
                </Carousel>

            </FullWidthPhoto>

        <h1>What We Do</h1>
            <div style={{zIndex: 10, backgroundColor: Theme.colors.white}}>

            <p>The Nature Counts Foundation delivers biodiversity data to strengthen the overall understanding of ecosystem conservation and restoration outcomes. This paves the way for researchers, practitioners and financers to effectively counter human impacts on nature.
            </p>
                <p>The Foundation engages in two main activities:<br />
                    <ol>
                        <li>Collaboration for Ecosystem Conservation and Restoration<br /><br />We collaborate with researchers to provide a practical and rigorous approach to restoration project performance assessment, and further knowledge by sharing data with our academic partners.<br />
                            We extract insights for restoration practitioners, financers and policy makers on best practices, and engage with stakeholders to ensure transparency and effectiveness in projects that counter human impacts on nature.
                        </li><br />
                        <li>Project Performance Services<br /><br />We make the invisible visible and understandable, bringing underwater environments to life so project developers and sponsors can more efficiently and effectively track, assess and refine their actions, and engage with stakeholders.</li>
                    </ol>
                </p>
                <p>

                    Our offering is based on three pillars :
                    <ul>

                        <li>monitoring, primarily using underwater cameras connected to our AI-engine</li>
                        <li>performance assessment, based on our open-source methodology</li>
                        <li>reporting, through our dedicated platform including the Nature Scoreboard</li>
                    </ul>




                </p>


        {/*<Subscribe />*/}
        {/*<Grid>*/}
            <div style={{display: `flex`, flexDirection: `row`, flexWrap: `wrap`}}>
            {/*<ScoreboardBanner label={"Contact Us"} link={"/contact"} img={"https://images.unsplash.com/photo-1581011277401-9f2953225051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"} />*/}

            <ScoreboardBanner label={"Nature Scoreboard"} link={"/scoreboard"} img={"https://images.unsplash.com/photo-1573551701016-d173344231b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80"} />
                <ScoreboardBanner label={"Donate"} link={"/donate"} img={"https://images.unsplash.com/photo-1596414086775-3e321ab08f36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"} />

                {/*<ScoreboardBanner label={"Explore research"} link={"/contact"} img={"https://images.unsplash.com/photo-1534766664852-7dbfbf053c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2389&q=80"} />*/}

            </div>

            {/*<div className={"box"} style={{backgroundColor: Theme.colors.blue}}>*/}
            {/*    <ActionButton bgColor={Theme.colors.blue} onClick={()=>window.location.assign("/contact")}>*/}
            {/*        <p>Get a camera for your underwater project</p>*/}
            {/*    </ActionButton>*/}
            {/*</div>*/}
            {/*<div className={"box"}  style={{backgroundColor: Theme.colors.purple}}>*/}
            {/*    <ActionButton  bgColor={Theme.colors.purple} onClick={()=>window.location.assign("/scoreboard")}>*/}
            {/*        <p>Visit the Nature Scoreboard</p>*/}
            {/*    </ActionButton>*/}
            {/*</div>*/}
            {/*<div className={"box"} style={{backgroundColor: Theme.colors.pink}}>*/}
            {/*    <ActionButton bgColor={Theme.colors.pink} onClick={()=>window.location.assign("/research")}>*/}
            {/*        <p>Explore Research</p>*/}
            {/*    </ActionButton>*/}
            {/*</div>*/}
            {/*<div className={"box"} style={{backgroundColor: Theme.colors.grey}}>*/}
            {/*    <ActionButton bgColor={Theme.colors.grey} onClick={()=>window.location.assign("/donate")}>*/}
            {/*        <p>Donate to our cause</p>*/}
            {/*    </ActionButton>*/}
            {/*</div>*/}
        {/*</Grid>*/}
            </div>
        </>
    )

}

