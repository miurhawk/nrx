
import styled from "styled-components";
import {Theme} from "../../styles";

export const StyledListing = styled.div`
    display: flex;    
    background-color: ${Theme.colors.black};
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px 20vw;
    @media screen and (max-width: 900px) {
        padding: 30px 10vw;
    }
`;

export const ListingCard = styled.div`
    display: flex;
    padding: 10px;
    color: ${Theme.colors.white};
    font-size: 10pt;
    width: 350px;
    margin: 10px;
    height: 350px;
    justify-content: flex-start;
    background-color: ${Theme.colors.black};
    flex-direction: column;
    align-items: flex-start;
    border: 2px solid ${Theme.colors.grey};
    // border-radius: 5px;
    :hover {
        border: 2px solid ${Theme.colors.blue};
        // background-color: ${Theme.colors.grey};
    };
    transition: background-color 0.5s;
    img {width: 100%; height: 60%; border-radius: 5px;};
    video {width: 100%; height: 60%; border-radius: 5px;};
`;