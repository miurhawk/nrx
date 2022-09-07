import * as React from "react";
import {ActionButton, FullWidthPhoto, Grid} from "../Approach/styles";
import {Theme} from "../../styles";
import {BigDivider, NewsDiv, NewsImgTitle, NewsRow} from "./styles";
import {ButtonBar} from "../ButtonBar";
import {ScoreboardBanner} from "../ScoreboardBanner";




type NewsItem = {
    title: string;
    id: number;
    link: string;
    photo: string;
    preview: string;
}

const Research: NewsItem[] = [
    {
        title: "Coral reefs: an ecosystem in transition",
        id: 5,
        link: "www.google.com",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Coral reef growth is intimately linked to sea level. It has been postulated that over the next\n" +
            "century, sea level will rise at a probable average rate of 15 mm/year, in response to fossil\n" +
            "fuel emissions, heating, and melting of the Antarctic ice cap. This predicted rate of sea level …"
    }
];

const Updates: NewsItem[] = [
    {
        title: "Reef rehabilitation manual",
        id: 5,
        link: "www.google.com",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Coral reefs provide ecosystem goods and services to mil-lions of people around the world\n" +
            "(Cesar et al. 1997; Costanza et al. 1997). The long-term sustainability of these ecosystem\n" +
            "benefits is threatened, however, by direct overexploitation of coral reef resources …"

    }
];

const Blog: NewsItem[] = [
    {
        title: "Charting a course toward diagnostic monitoring: a continuing review of coral reef attributes and a research strategy for creating coral reef indexes of biotic integrity",
        id: 5,
        link: "www.google.com",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Recent findings on the ecology, etiology and pathology of coral pathogens, host resistance\n" +
            "mechanisms, previously unknown disease/syndromes and the global nature of coral reef\n" +
            "diseases have increased our concern about the health and future of coral reef communities …"
    },
    {
        title: "Multiple stressors and ecological complexity require a new approach to coral reef research",
        id: 5,
        link: "www.google.com",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Coral reef is a kind of special geotechnical medium. From the perspective of engineering\n" +
            "geology, it can be divided into two types: coral sandstone and coral reef limestone. This\n" +
            "paper reviews the basic history of coral reef research for 30 years, focusing on the …"
    },
    {
        title: "The status of coral reef ecology research in the Red Sea",
        id: 5,
        link: "www.google.com",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Besides the latest develop- ments in coral evolution and physiology, chapters are devoted to\n" +
            "novel frontiers in coral reef research such as the molecular biology of corals and their symbiotic\n" +
            "algae, remote sensing of reef systems, ecology of coral disease spread, effects of …"
    },
    {
        title: "Exploration and research on engineering geological properties of coral reefs——Engaged in coral reef research for 30 years",
        id: 5,
        link: "www.google.com",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Ocean acidification, climate change, and other environmental stressors threaten coral reef\n" +
            "ecosystems and the people who depend upon them. New science reveals that these\n" +
            "multiple stressors interact and may affect a multitude of physiological and ecological …"
    },
    {
        title: "The status of coral reef ecology research in the Red Sea",
        id: 5,
        link: "www.google.com",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Abstract The Red Sea has long been recognized as a region of high biodiversity and\n" +
            "endemism. Despite this diversity and early history of scientific work, our understanding of the\n" +
            "ecology of coral reefs in the Red Sea has lagged behind that of other large coral reef  …"
    },
];

export const News = () => {


    return (
        <>
            <FullWidthPhoto img={"https://images.unsplash.com/photo-1488921618671-463b781ac428?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"} />
                <h1>News & Research</h1>
            <p>The Nature Counts Foundation produces high-quality research, including reports, issue briefs,
                working papers, and more. Our publications are held to academic standards of excellence for
                objectivity, rigor, and quality. Below you can find publications which relate to our work, as well as
                articles and reports that we have contributed to.</p>
            <p>No publications yet! Check back soon.</p>
            {/*<h2 style={{color: Theme.colors.pink, marginLeft: `30px`}}>Press Release</h2>*/}

            {/*<NewsRow>*/}
            {/*    {Updates.map((n) =>*/}
            {/*        <NewsPiece n={n}></NewsPiece>*/}

            {/*    )}*/}
            {/*</NewsRow>*/}
            {/*<h2 style={{color: Theme.colors.blue, margin: `0 30px`, paddingTop: `20px`, borderTop: `2px solid ${Theme.colors.grey}`}}>Blog Post & Reports</h2>*/}
            {/*<NewsRow>*/}
            {/*    {Blog.map((n) =>*/}
            {/*        <NewsPiece n={n}></NewsPiece>*/}

            {/*    )}*/}
            {/*</NewsRow>*/}
            {/*<h2 style={{color: Theme.colors.purple, margin: `0 30px`, paddingTop: `20px`, borderTop: `2px solid ${Theme.colors.grey}`}}>Related Research</h2>*/}

            {/*<NewsRow>*/}
            {/*    {Research.map((n) =>*/}
            {/*        <NewsPiece n={n}></NewsPiece>*/}
            {/*    )}*/}
            {/*</NewsRow>*/}
            <ButtonBar buttons={[{label: "Approach", link: "/approach"},{label: "Contact Us", link: "/contact"}]} />
            <ScoreboardBanner label={"Nature Scoreboard"} link={"/scoreboard"} img={"https://images.unsplash.com/photo-1534766664852-7dbfbf053c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2389&q=80"} />

        </>
    )
}

type NP = {

    n: NewsItem;
}
const NewsPiece = (props: NP) => {

    return (
        <NewsDiv onClick={()=>window.location.assign(props.n.link)}>
            <NewsImgTitle img={props.n.photo}>
                <h3>{props.n.title}</h3>
            </NewsImgTitle>
            <a>{props.n.preview}</a>
        </NewsDiv>
        )

}