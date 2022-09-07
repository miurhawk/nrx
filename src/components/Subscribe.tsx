import * as React from "react";
import styled from "styled-components";
import {Theme} from "../styles";


export const Subscribe = () => {

    return (

        <StyledSubscribe>
            <h3>Subscribe to receive our news, updates on upcoming projects, and blog posts.</h3>
            <StyledForm>
                <input></input>
                <button><h5>Submit</h5></button>
            </StyledForm>
        </StyledSubscribe>
    )
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-bottom: 30px;

    button {
        background-color: ${Theme.colors.purple};
        border: none;
    }
    input {
        background-color: white;
        border: none;
        min-width: 300px;
    }
`;
const StyledSubscribe = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${Theme.colors.grey};
    align-items: center;
    
    h3 {
        color: ${Theme.colors.black};
        padding: 30px 30px 0 30px;

    }
`;