import {StyledListing} from "./styles";
import {ExchangeListingCard} from "./ExchangeListingCard";
import * as React from "react";
import {ButtonBar} from "../ButtonBar";
import {ScoreboardBanner} from "../ScoreboardBanner";
import {Grid} from "../Approach/styles";


export interface Listing {
    id: number;
    name: string;
    value: number;
    type: number;
    score: number;
    img: string;
    video: string;
}


const DummyData: Listing[] = [
    {id: 1, name: "Karlsruhe Museum", value: 32, type: 1, score: 76, img:"https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29yYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60", video: "https://res.cloudinary.com/nature-counts/video/upload/q_40/v1638798745/smoothedcomplete_lgkhxa.mov"},
    // {id: 2, name: "Malta Test Site", value: 6, type: 1, score: 76, img:"https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29yYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60", video: "https://res.cloudinary.com/nature-counts/video/upload/v1635749343/raw_video_22_10_2021__14_58_36_tbffcm.mkv"},
    // {id: 2, name: "Reeefs Maldives", value: 342182, type: 1, score: 83, img:"https://images.unsplash.com/photo-1573551701016-d173344231b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29yYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60", video: ""},
    // {id: 3, name: "Project Amazona", value: 79282, type: 2, score: 29, img:"https://images.unsplash.com/photo-1560851691-ebb64b584d3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmZvcmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60", video: ""}
]

const ExchangeListing = () => {
    // This is the overall view of

    // in theory here we would fetch the data


    return(
<>

        <StyledListing style={{marginBottom: `50px`}}>
            <span style={{color: `white`, marginBottom: `50px`}}>The Nature Scoreboard gives project stakeholders the ability to follow the progress of their conservation and restoration efforts.</span>
            {DummyData.map((l)=> <ExchangeListingCard listing={l} />)}

        </StyledListing>
    <div style={{display: `flex`, flexDirection: `row`, flexWrap: `wrap`}}>

    <ScoreboardBanner label={"Contact Us"} link={"/contact"} img={"https://images.unsplash.com/photo-1582623838120-455da222cdc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80"} />
    <ScoreboardBanner label={"Donate"} link={"/donate"} img={"https://images.unsplash.com/photo-1514907283155-ea5f4094c70c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"} />
    </div>
</>
)

}

export default ExchangeListing;