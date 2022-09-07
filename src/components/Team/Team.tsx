import * as React from "react";
import {FullWidthPhoto, Grid} from "../Approach/styles";
import {ImageDiv, PersonDiv} from "./styles";
import {SocialButton} from "../Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fab, faLinkedin, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {ScoreboardBanner} from "../ScoreboardBanner";



export const Team = () => {


    return (
        <>
            {/*<FullWidthPhoto img={"https://d1qsp4j04beddk.cloudfront.net/OceanImageBank_CinziaOseleBismarck_22.jpg"} />*/}
                <h1>Our Team</h1>
            <p>We are a team of scientists, software developers and ocean lovers that aim to bring rich imagery and analysis to anyone interested in the underwater world. Our people are at the heart of everything we do. We strive to be thoughtful, objective, independent, creative, innovative, and hardworking, and we aspire to work with partners with similar qualities.
            </p>

            {people.map((p) => <Person key={p.name} person={p}/>)}

            <p>If you have interest to join our team, you could specify your skills and submit your interest via the <a href={"/contact"}>Contact Us</a> page.</p>
            <div style={{display: `flex`, flexDirection: `row`, flexWrap: `wrap`}}>
                {/*<ScoreboardBanner label={"Contact Us"} link={"/contact"} img={"https://images.unsplash.com/photo-1581011277401-9f2953225051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"} />*/}
                <ScoreboardBanner label={"Contact Us"} link={"/contact"} img={"https://images.unsplash.com/photo-1581011277401-9f2953225051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"} />


                <ScoreboardBanner label={"What We Do"} link={"/approach"} img={"https://images.unsplash.com/photo-1534766664852-7dbfbf053c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2389&q=80"} />

            </div>

        </>
    )
}

type PersonInfo = {
    name: string;
    position: string;
    img: string;
    about: string;
    linkedinProfile: string;
    emailAddress: string;
}


const Person = (props: {person: PersonInfo}) => {

    return (
        <PersonDiv>
            <div className={"photo"}>
                <ImageDiv img={props.person.img} />
                {/*<img src={props.person.img} />*/}
                <div>
                    <SocialButton onClick={()=>window.open(props.person.linkedinProfile)}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </SocialButton>
                    <SocialButton onClick={()=>window.open("mailto:"+props.person.emailAddress)}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </SocialButton>
                </div>
            </div>
            <div>
                <h4>{props.person.name}</h4>
                <a style={{fontSize: `13pt`}}>{props.person.position}</a><br /><br /><br />
                <a>{props.person.about}</a>
            </div>

        </PersonDiv>
    )
}


const people: PersonInfo[] = [

    {
        name: "David Lunsford",
        position: "Executive Director",
        img: "david.jpg",
        about: "David has worked with governments, corporations, and investors on managing climate change risks for over 15 years. He enjoys creating new ways to bring transparency, trust and commitments to projects that conserve and restore the environment. He previously co-founded Carbon Delta, an environmental fintech and data analytics firm, which was acquired by MSCI in 2019.",
        linkedinProfile: "https://www.linkedin.com/in/david-lunsford-a473a31",
        emailAddress: "david.lunsford@nature-counts.org",
    },
    {
        name: "Josip Spec",
        position: "Finance & Operations",
        img: "josip.jpg",
        about: "Josip has a background in political science, history and information science. His previous work focused on International Collaboration, Environmentalism and Social Development. He supports the team with his extensive experience in operations of small-to-medium organizations in Switzerland. While being locally engaged in sustainability, he is excited to have with Nature Counts a global impact.",
        linkedinProfile: "https://www.linkedin.com/in/josip-spec/",
        emailAddress: "josip.spec@nature-counts.org",
    },
    {
        name: "Miura Hawkins",
        position: "Technical Director",
        img: "miura.jpg",
        about: "Miura is an expert in web platforms, computing architectures, and development team operational strategies. She has worked on many diverse topics, from adrenal cancer research, to movement analysis for athletic performance. Miura has had a lifelong passion for preserving the environment.",
        linkedinProfile: "https://www.linkedin.com/in/miura-hawkins-20449b25/",
        emailAddress: "miura.hawkins@nature-counts.org",
    },
    // {
    //     name: "Valentin Bickel",
    //     position: "Computer Vision Lead",
    //     img: "valentin.JPG",
    //     about: "Valentin is an expert in satellite image processing and computer vision. He has applied his knowledge on earth and planetary bodies like the Moon and Mars. Valentin is excited to apply his experience to a project with an opportunity to have a positive effect on the world.",
    //     linkedinProfile: "",
    //     emailAddress: "",
    // },
    // {
    //     name: "Tom Lorimer",
    //     position: "Technical Consultant",
    //     img: "tom.jpg",
    //     about: "Tom has a background in data science and machine learning applied to aquatic ecosystems. He has also worked with other diverse systems, from human hearing to the motion of nematode worms. Tom is excited about building a quantitative basis for environmental solutions.",
    //     linkedinProfile: "https://www.linkedin.com/in/tom-lorimer-b3ab47156/",
    //     emailAddress: "tom.lorimer@nature-counts.org",
    // },
    {
        name: "Guillaume Krepper",
        position: "Senior Advisor",
        img: "guillaume.jpg",
        about: "Guillaume has built a career at crossroads between investment and business with sustainability as guiding thread.With purpose-driven entrepreneurs, he works on strategic planning, capital raising, business development and operational excellence to create sustainable ventures. With investors, he investigates deal opportunities and develops frameworks to shift capital towards positive impact.As a scuba diver, he is all the more excited to contribute to a project enabling life below water (SDG14) to thrive.",
        linkedinProfile: "https://www.linkedin.com/in/guillaume-krepper-90159545/",
        emailAddress: "guillaume.krepper@nature-counts.org",
    },
    // {
    //     name: "Mariela Martinez",
    //     position: "Design",
    //     img: "https://images.unsplash.com/photo-1488921618671-463b781ac428?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    //     about: "The oriental hornet (Vespa orientalis) is a social insect in the family Vespidae, found in southern Europe, northeastern Africa, and western Asia. This worker, photographed in Sha'ar Poleg Reserve in Israel, is gathering nectar from a sea squill; adults will also feed on honeydew and fruit. They also capture insects such as grasshoppers, flies and honey bees to provide a diet high in protein for the colony's brood.",
    //     linkedinProfile: "https://www.linkedin.com/in/mariela-martinez-9514b8171/",
    //     emailAddress: "",
    // },
]
