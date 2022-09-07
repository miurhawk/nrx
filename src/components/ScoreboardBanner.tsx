import * as React from "react";
import styled from "styled-components";
import {Theme} from "../styles";
import {useState} from "react";

export const ScoreboardBanner = ({label, link, img}: {label: string, link: string, img: string}) => {
    const [bgColor, setBg] = useState(Theme.colors.black);
    const onMouseEnter = () => {
        setBg(  `rgba(0,0,0,0.6)`);
    };
    const onMouseLeave = () => {
        setBg(Theme.colors.black);
    };
    return (
        <StyledBanner img={img} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={()=>window.location.assign(link)}>
            <InfoBannerPiece bgColor={bgColor}>
                {label}
            </InfoBannerPiece>
        </StyledBanner>
    )
}

const StyledBanner = styled.div<{img: string}>`
    display: flex;
    cursor: pointer;
    flex-direction: row;
    margin: 1vw 0;
    width: 50vw; 
    flex-grow: 1;
    flex-shrink: 0;
    background-image: url(${(props)=>props.img});
    background-size: cover;
    background-position: left;
    height: 200px;
    @media only screen and (max-width: 800px) {
        height: 400px;
        width: 100%;
        flex-wrap: wrap;
    }
`;

const InfoBannerPiece = styled.div<{bgColor: string}>`
        color: ${Theme.colors.white};
        display: flex;
        background-color: ${(props)=>props.bgColor};
        padding: 30px;
        font-family: ${Theme.fonts.subtitle};
        font-size: 34pt;
        margin-right: 60%;
        font-weight: bold;
        justify-content: space-between;
        align-items: flex-start;
        flex-grow: 1;
        height: 140px;
        button {
            margin-top: 110px;
            font-family: ${Theme.fonts.subtitle};
            font-size: 12pt;
            font-weight: bold;
            padding: 10px 30px;
            min-width: 150px;
            background-color: ${Theme.colors.grey};
            color: ${Theme.colors.black};
            border: none;
            :hover {
                background-color: ${Theme.colors.blue};
            }
        }
        @media only screen and (max-width: 800px) {
            margin-right: 0;
            width: 100%;
            height: 140px;
            font-size: 28pt;
        }
    
    `;