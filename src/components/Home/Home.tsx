
import * as React from "react";
import {Theme} from "../../styles";
import styled from "styled-components";
import {StyledMenu} from "../MainMenu/styles";



// onMouseEnter={()=>window.scroll(0,0)}

export const Home = () => {

    return (
        <StyledHome>
            {/*<div className={"block"}>*/}
            {/*    <div className={"line"} />*/}

            {/*</div>*/}
            {/*<BigPic img={"/josh-withers-OfBDvcXuA88-unsplash.jpg"} />*/}
            {/*<LittlePic img={'/logo.png'} />*/}

            {/*<div style={{opacity: `80%`, position: `fixed`, bottom: `0`, left: `0`, height: `60vh`, width:  `35vw`, backgroundColor: Theme.colors.grey}} />*/}
            {/*<InfoDiv>*/}
            <p>
                A collaboration platform and technology to quantify the human impact on nature.
            </p>
                <LittlePic img={'/fullLogoWhite.png'} />

                {/*<button onClick={()=>window.location.assign("/approach")}>Visit</button>*/}
            {/*</InfoDiv>*/}



        </StyledHome>
    )

}


export const StyledHome = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    position: 
    justify-content: center;
        font-family: ${Theme.fonts.subtitle};
    padding: 0px 10% 100px 10%;
    align-items: center;
    color: ${Theme.colors.white};    
    text-align: center;
    background-color: ${Theme.colors.black};
        button {
        margin-top: 110px;
        font-family: ${Theme.fonts.subtitle};
        font-size: 12pt;
        align-self: flex-end;
        font-weight: bold;
        padding: 10px 30px;
        min-width: 150px;
        background-color: ${Theme.colors.white};
        color: ${Theme.colors.black};
        border: none;
        :hover {
            background-color: ${Theme.colors.blue};
        }
    }
    
    div.block {
        background-color: ${Theme.colors.black};
        position: absolute;
        height: 100px;
        width: 100%;
        display flex;
        top: 0;
        left: 0;
        opacity: 100%;
        transition: opacity 1s;
    }
    div.line {
        background-color: ${Theme.colors.white};
        height: 4px;
        width: 70px;
        display flex;
        align-self: center;
        justify-self: center;
        margin-right: auto;
        margin-left: calc(10vw + 7px);
        border-radius: 2px;
    }

`;


export const LittlePic = styled.div<{img: string}>`
    height: 35vw;
    max-width: 65vw;
    min-width: 40vw;
    flex-shrink: 0;
    background-image: url(${(props)=> props.img});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;
