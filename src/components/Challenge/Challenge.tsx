import * as React from "react";
import {FullWidthPhoto} from "../Approach/styles";
import {NewsDiv, NewsImgTitle, NewsRow} from "./styles";
import {ButtonBar} from "../ButtonBar";
import {Theme} from "../../styles";
import {ScoreboardBanner} from "../ScoreboardBanner";
import {Carousel} from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



type Opening = {
    title: string;
    id: number;
    content: string;
    photo: string;
    preview: string;
}

const OpeningListings: Opening[] = [
    {
        title: "Assistant to the Regional Manager",
        id: 3,
        content: "here is the first blog post. it is a great blog post.<br /><br /> here is further down on the page in the same first great blog post.",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Coral reef growth is intimately linked to sea level. It has been postulated that over the next\n" +
            "century, sea level will rise at a probable average rate of 15 mm/year, in response to fossil\n" +
            "fuel emissions, heating, and melting of the Antarctic ice cap. This predicted rate of sea level …"
    },
    {
        title: "Assistant Regional Manager",
        id: 4,
        content: "here is the second blog post. it is a great blog post.<br /><br /> here is further down on the page in the same first great blog post.",
        photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80\n",
        preview: "Coral reef growth is intimately linked to sea level. It has been postulated that over the next\n" +
            "century, sea level will rise at a probable average rate of 15 mm/year, in response to fossil\n" +
            "fuel emissions, heating, and melting of the Antarctic ice cap. This predicted rate of sea level …"
    },

];

export const Challenge = () => {


    return (
        <>
            <FullWidthPhoto>

                <Carousel showStatus={false} showThumbs={false} dynamicHeight={true} autoPlay={true} infiniteLoop={true}>
                    <div style={{height: `300px`}}>
                        <img src="https://images.unsplash.com/photo-1551244072-5d12893278ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2389&q=80" />
                    </div>
                    <div style={{height: `300px`}}>
                        <img src="https://images.unsplash.com/photo-1510021115607-c94b84bceb1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1761&q=80" />
                    </div>
                    <div style={{height: `300px`}}>
                        <img src="https://images.unsplash.com/photo-1552461536-6c6fed9d94a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80" />
                    </div>
                    <div style={{height: `300px`}}>
                        <img src="https://images.unsplash.com/photo-1529118473892-f82dee1d102b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1655&q=80" />
                    </div>
                </Carousel>
            </FullWidthPhoto>
                            <h1>Our Challenge</h1>
        <div style={{zIndex: 10, backgroundColor: Theme.colors.white}}>
            <p>Coral reefs are biodiversity hotspots that provide habitat for fishes, protection for coastal communities and income for fisheries and tourism. They are the most species-rich marine ecosystem and play a role in the life cycle of 25% of all marine fish species. The economic value of coral reefs globally is an estimated USD 9.9 trillion.
            </p>
            <p>Regrettably, coral reefs are in peril. Since the 1950s, 50% of all living corals have died and coral-reef- associated biodiversity has dropped by 63%. Coral reefs are likely to decline by 70–90% relative to their current levels by 2050.
            </p>
            <p>
                Based on the urgent need to conserve and restore this valuable ecosystem, the Nature Counts Foundation is currently focusing its efforts on improving the monitoring and assessment of coral reef projects.
            </p>

            {/*<h2 style={{padding: `40px 10vw`, color: Theme.colors.black}}>Sorry, we have no available positions at this moment.</h2>*/}
            {/*<NewsRow>*/}
            {/*    {OpeningListings.map((b) =>*/}
            {/*        <NewsPiece o={b} />*/}

            {/*    )}*/}
            {/*</NewsRow>*/}

            {/*<ButtonBar buttons={[{label: "Contact Us", link: "/contact"},{label: "Our Team", link: "/team"}]} />*/}
            <div style={{display: `flex`, flexDirection: `row`, flexWrap: `wrap`}}>
                <ScoreboardBanner label={"Nature Scoreboard"} link={"/scoreboard"} img={"https://images.unsplash.com/photo-1534766664852-7dbfbf053c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2389&q=80"} />

            {/*<ScoreboardBanner label={"Contact Us"} link={"/contact"} img={"https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"} />*/}
            <ScoreboardBanner label={"What We Do"} link={"/approach"} img={"https://images.unsplash.com/photo-1601219665008-8711f31f9ce1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"} />
            </div>


        </div>

        </>
    )
}

type OL = {

    o: Opening;
}
const NewsPiece = (props: OL) => {

    return (
        <NewsDiv onClick={()=>window.location.assign("/openings?id="+props.o.id)}>
            <NewsImgTitle img={props.o.photo}>
                <h3>{props.o.title}</h3>
            </NewsImgTitle>
            <a>{props.o.preview}</a>
        </NewsDiv>
        )

}