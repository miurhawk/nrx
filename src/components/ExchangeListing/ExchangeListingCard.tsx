import {Listing} from "./ExchangeListing";
import {ListingCard} from "./styles";
import * as React from "react";
import {useHistory} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFish, faTree, faWater, faSeedling } from '@fortawesome/free-solid-svg-icons';


type CardProps = {
    listing: Listing;
}


export const GetType = (type: number) => {
    switch (type) {
        case 1:
            return <FontAwesomeIcon icon={faFish} />
        case 2:
            return <FontAwesomeIcon icon={faTree} />
        case 3:
            return <FontAwesomeIcon icon={faWater} />
        default:
            return <FontAwesomeIcon icon={faSeedling} />
    }
}
export const ExchangeListingCard = (props: CardProps) => {

    const GotoDetail = (id: number) => {
        // for now, do nothing
        // window.location.replace("/project/"+id);
    };
    return(

        <ListingCard onClick={()=>GotoDetail(props.listing.id)}>
            <video src={props.listing.video} autoPlay muted loop />
            {/*<img alt={"The sky is blue"} src={props.listing.img} />*/}
            <h2>{GetType(props.listing.type)} {props.listing.name}</h2>

            <br />
            <h4>{props.listing.value}</h4> fish species observed
            <br /><br />

            {/*<h2>{props.listing.score}</h2>*/}
            {/*health score*/}
        </ListingCard>
    )

}
