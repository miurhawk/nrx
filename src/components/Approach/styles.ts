
import styled from "styled-components";
import {Theme} from "../../styles";


export const FullWidthPhoto = styled.div<{img: string}>`
    width: 100vw;
    align-self: center;
    height: 300px;
    flex-grow: 0;
    background-image: url("${(props) => props.img}");
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    justify-content: center;
    align-items: center;
    a {
        width: 50%;
        text-align: center;
    }
`;

export const Grid = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    align-self: center;
    z-index: 0;
    flex-wrap: wrap;
    div.box {
        display: flex;
        min-height: 300px;
        z-index: 0;
        flex-direction: column;
        flex: 1 1 0px;
        align-items: center;
        h2 {
            max-width: 35vw;
            padding-top: 10px;
            text-align: center;
        }
    }
`;

export const ActionButton = styled.button<{bgColor: string}>`
    border: none;
    cursor: pointer;
    background-color: ${(props)=> props.bgColor};
    color: white;
    font-family: ${Theme.fonts.subtitle};
    font-size: 22pt;
    margin: 2px;
    height: 100%;
    width: 100%;
    :hover {
        margin: 0;
        border: 2px solid white;
        background-color: rgba(255, 255, 255, 0.4);
        
    }
`;