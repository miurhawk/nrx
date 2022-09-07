
import styled from "styled-components";
import {Theme} from "../../styles";


export const BigDivider = styled.div`
    display: flex;
    height: 2px;
    background-color: ${Theme.colors.grey};
    margin: 20px;
`;

export const NewsRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    margin: 10px;
`;

export const NewsDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    flex: 0 0 0;
    
    a {
        text-align: justify;
    }
    :hover {
        h3 {
            background-color: rgba(0, 0, 0, 0.8);
        }
    }
`;

export const NewsImgTitle = styled.div<{img: string}>`
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    height: 220px;
    width: 350px;
    display: flex;
    margin-bottom: 10px;
    h3 {
        margin: 10px;
        padding: 5px;
        align-self: flex-end;
        background-color: rgba(0, 0, 0, 0.4);
    }
    `;