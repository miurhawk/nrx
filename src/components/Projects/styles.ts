
import styled from "styled-components";
import {Theme} from "../../styles";

export const PersonDiv = styled.div`
    max-width: 60%;
    display: flex;
    padding: 50px 0;
    flex-direction: row;
    align-self: center;
    img {
        height: 200px;
        width: 200px;
        border-radius: 100px;
        border: 1px solid ${Theme.colors.black};
    }

    div:nth-child(odd) {
        margin-right: 50px;
        div {
            justify-content: center;
            display: flex;
            margin-top: 10px;
        }
    }
    h4 {
        color: ${Theme.colors.blue};
        padding: 0 0 10px 0;
    }
    a {
        font-size: 10pt;
    }
`;