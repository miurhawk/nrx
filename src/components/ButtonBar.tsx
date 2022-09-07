import * as React from "react";
import styled from "styled-components";
import {Theme} from "../styles";


export const ButtonBar = (props: {buttons: {label: string, link: string}[]}) => {

    return (

        <StyledButtonBar>
            {props.buttons.map((b) =>
                <div key={b.label}><button onClick={()=>window.location.assign(b.link)}><h3>{b.label}</h3></button></div>
            )}
        </StyledButtonBar>
    )
}

const StyledButtonBar = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    flex-grow: 1;
    flex-shrink: 1;
    align-self: center;
    width: 80vw;
    justify-content: space-between;
    div {
        background-image: url(https://images.unsplash.com/photo-1545229765-7ff613f80127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80&rot=90);
        background-size: cover;
        height: 200px;
        margin-bottom: 10px;
        width: 39vw;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        @media only screen and (max-width: 800px) {
            width: 80vw;
        
        }
    }
    button {
        color: ${Theme.colors.white};
        cursor: pointer;
        display: flex;
        height: 200px;
        width: 39vw;
        margin: 0;
        border: none;
                        background-color: rgba(0,0,0,0);

        justify-content: center;
        align-items: center;
        h3 {
                font-size: 34pt;
                border-bottom: 1px solid ${Theme.colors.white};
                border-top: 1px solid ${Theme.colors.white};
                padding-bottom: 5px;
        }
        :hover {
                background-color: rgba(0,0,0,0.4);

        }
        
        @media only screen and (max-width: 800px) {
            width: 80vw;
        
        }

    }
    
    @media only screen and (max-width: 1028px) {
        flex-wrap: wrap;
        
    }
`;

