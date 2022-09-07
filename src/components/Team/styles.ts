
import styled from "styled-components";
import {Theme} from "../../styles";

export const PersonDiv = styled.div`
    max-width: 60%;
    display: flex;
    padding: 50px 0;
    flex-direction: row;
    align-self: center;

    div.photo {
        margin-right: 50px;
        div {
            justify-content: center;
            display: flex;
            margin-top: 10px;
        }
        @media screen and (max-width: 800px) {
            margin-right: auto;
            align-self: center;
            justify-content: center;
            justify-items: center;
            margin-left: auto;
        }
    }
    h4 {
        color: ${Theme.colors.blue};
        padding: 0 0 10px 0;
        @media screen and (max-width: 800px) {
            padding: 10px 0;
        }
    }
    @media screen and (max-width: 800px) {
        flex-wrap: wrap;
        text-align: center;
        max-width: 80vw;
    }
`;

export const ImageDiv = styled.div<{img: string}>`
        height: 200px;
        width: 200px;
        border-radius: 100px;
        background-image: url(${(props) => props.img});
        background-size: cover;
        background-position: center;
`;
