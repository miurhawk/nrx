import * as React from "react";
import {ActionButton, FullWidthPhoto, Grid} from "../Approach/styles";
import {Theme} from "../../styles";
import {ButtonBar} from "../ButtonBar";
import {ScoreboardBanner} from "../ScoreboardBanner";


export const Projects = () => {


    return (
        <>
            <FullWidthPhoto img={"https://images.unsplash.com/photo-1546500840-ae38253aba9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80"} />
                <h1>Coral Reefs</h1>

                <p>Coral reefs are biodiversity hotspots that provide habitat for fishes, protection for coastal
                    communities and income for fisheries and tourism. They are the most species-rich marine ecosystem
                    and play a role in the life cycle of 25% of all marine fish species. The economic value of coral reefs
                    globally is an estimated USD 9.9 trillion.</p><p>
                    Regrettably, coral reefs are in peril. Since the 1950s, 50% of all living corals have died and coral-reef-
                    associated biodiversity has dropped by 63%. Coral reefs are likely to decline by 70–90% relative to
                    their current levels by 2050.</p><p>
                    Based on the urgent need to conserve and restore this valuable ecosystem, the Nature Counts
                    Foundation is currently focusing its efforts on improving the monitoring and assessment of coral reef
                    projects.</p>


            {/*<div style={{display: `flex`, alignItems: `center`}}>*/}
                <ScoreboardBanner label={"Donate"} link={"/donate"} img={"https://images.unsplash.com/photo-1576436445430-43d6d7c9aea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} />
                <ScoreboardBanner label={"Get a Camera"} link={"/contact"} img={"https://images.unsplash.com/photo-1571429281449-ac9114444d29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} />
                <ScoreboardBanner label={"Nature Scoreboard"} link={"/scoreboard"} img={"https://images.unsplash.com/photo-1601488844231-c29cbf68eb83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"} />

            {/*</div>*/}
        </>
    )
}

