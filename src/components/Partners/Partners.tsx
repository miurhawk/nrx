import * as React from "react";
import {FullWidthPhoto, Grid} from "../Approach/styles";
import {CollabRow, ImgDiv, PersonDiv} from "./styles";
import {ScoreboardBanner} from "../ScoreboardBanner";



export const Partners = () => {


    return (
        <>
            {/*<FullWidthPhoto img={"https://images.unsplash.com/photo-1516321010006-47de904c3c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80"} />*/}

            <h1>Our Partners</h1>
            <p>The Nature Counts Foundation supports private and public sector clients across the world - including governments, intergovernmental organizations, academia, companies, and other non-profit organizations.  Below are just some of the partners we work with.</p>
            <CollabRow>

                {collabs.map((p) => <Collaborator collaborator={p}/>)}

            </CollabRow>
            <div style={{display: `flex`, flexDirection: `row`, flexWrap: `wrap`}}>

            <ScoreboardBanner label={"Contact Us"} link={"/contact"} img={"https://images.unsplash.com/photo-1581011277401-9f2953225051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"} />
            <ScoreboardBanner label={"What We Do"} link={"/approach"} img={"https://images.unsplash.com/photo-1582623838120-455da222cdc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"} />

            </div>

        </>
    )
}

type CollaboratorInfo = {
    name: string;
    logo: string;
    link: string;
    location: string;
    description: string;
}


const Collaborator = (props: {collaborator: CollaboratorInfo}) => {

    return (
        <PersonDiv onClick={()=>window.open(props.collaborator.link)}>
            {/*<div>*/}
            <ImgDiv img={props.collaborator.logo} />
                    <h5>{props.collaborator.name}</h5>
            <h6>{props.collaborator.location}</h6>
            {props.collaborator.description}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h4>{props.collaborator.name}</h4>*/}
            {/*    /!*<a style={{fontSize: `13pt`}}>{props.collaborator.position}</a><br /><br /><br />*!/*/}
            {/*    /!*<a>{props.person.about}</a>*!/*/}
            {/*</div>*/}

        </PersonDiv>
    )
}


const collabs: CollaboratorInfo[] = [

    {
        name: "rrreefs",
        logo: "rrreefs.jpg",
        link: "https://www.rrreefs.com",
        location: "Zurich, Switzerland",
        description: "We rebuild coral reefs. Sustainably. Scientifically. With artistic vision. Our innovative, modular structures are designed to restore and promote reef life and serve as coastal protection barriers.",
    },
    {
        name: "SpotX Underwater Vision",
        logo: "https://images.squarespace-cdn.com/content/v1/58ff474a414fb5f5d4e04289/1493125427827-PL2IUZML79WPYGSA1VCO/spot-x-logo-long-rgb%281%29.png?format=1500w",
        link: "https://www.spotx.com.au/",
        location: "Taren Point, NSW, Australia",
        description: "Spot X designs and builds commercial real-time drop camera, tow camera, and ROV video systems. As well as having a range of stock designs ready for fast dispatch, we custom build camera and topside solutions to match our client’s needs.",

    },
    {
        name: "Coralive",
        logo: "https://coralive.org/wp-content/uploads/2018/12/coralive-logo2.png",
        link: "https://www.coralive.org",
        location: "Zurich, Switzerland",
        description: "Coralive.org is dedicated to the mission of protecting and restoring healthy oceans around the world. Our work includes restoring coral reef and coastal ecosystems, managing Marine Protected Areas (MPAs), conducting long-term environmental monitoring, creating livelihood solutions for coastal communities, and pairing all efforts with tailored environmental education programs.",

    },

]