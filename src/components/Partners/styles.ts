
import styled from "styled-components";
import {Theme} from "../../styles";

export const PersonDiv = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    cursor: pointer;
    img {
        height: 150px;
        width: 250px;
        background-color: ${Theme.colors.black};
    }
    h5 {
        color: ${Theme.colors.blue};
        padding: 10px 0;
        font-size: 14pt;
    }
    h6 {
        font-weight: bold;
        font-size: 12pt;
        text-transform: none;
        color: ${Theme.colors.black};
    }
    :hover {
        background-color: ${Theme.colors.grey};
        h5 {
            color: ${Theme.colors.black};
        }
    }
`;

export const ImgDiv = styled.div<{img: string}>`
    height: 150px;
    width: 250px;
    background-image: url(${(props)=>props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;


export const CollabRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    margin: 20px 20vw;
    @media screen and (max-width: 900px) {
        margin: 20px 10vw;
    }
`;
