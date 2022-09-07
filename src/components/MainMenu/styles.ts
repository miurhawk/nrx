
import styled from "styled-components";
import {Theme} from "../../styles";

export const StyledMenuItem = styled.div<{selected: boolean}>`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    height: 100%;
    :hover {
        h6.category {
            color: ${Theme.colors.pink};
        }
    }
    h6.category {
        margin-left: 30px;
        margin-right 30px;
        margin-top: 42px;
        color: ${(props) => props.selected ? Theme.colors.blue : ``}; 
    }
    @media screen and (max-width: 800px) {
        height: ;
        width: 100%;
        border-bottom: 1px solid ${Theme.colors.white};
        h6.category {
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }
`;
export const StyledSubmenu = styled.div`
    display: flex;
    background: ${Theme.colors.black};
    flex-direction: column;
    position: absolute;
    top: 100px;
    margin: 0;
    padding: 0;
    width: 200px;
    z-index: 3;
    h6 {
        padding: 10px 30px;
        :hover {
            color: ${Theme.colors.pink};
        }
    }
    @media screen and (max-width: 800px) {
        position: relative;
        top: 0;
        border-bottom: 2px solid ${Theme.colors.white};
        width: 100%;
    }

`;

export const NavItems = styled.div`
    display: flex;
    position: fixed;
    z-index: 101;
    flex-direction: column;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: flex-end;
    width: 60%;
    top: 100px;
    background-color: ${Theme.colors.black};
`;

export const StyledMenu = styled.div<{hideOffHover: boolean}>`
    display: flex;
    flex-direction: row;
    z-index: 100;
    width: 100%;
    opacity: ${(props)=> props.hideOffHover ? `0%` : `100%`};
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    height: 100px;
    justify-content: flex-end;
    background-color: ${Theme.colors.black};
    align-items: flex-end;
    img:nth-child(odd) {
        height: 80%;
        margin-left: 10vw;
        margin-bottom: 10px;
        transition: height 0.5s;
        cursor: pointer;\
    }
    img:nth-child(even) {
        height: 80%;
        margin-right: 10vw;
        margin-left: auto;
        margin-bottom: 10px;
        transition: height 0.5s;
    }

    :hover {
        opacity: 100%;

        img {
            opacity: 100%;
        }
        
    }
    transition: opacity 1s;
    
    @media screen and (max-width: 900px) {
        img:nth-child(odd) {
            margin-left: 10vw;
        }
        img:nth-child(even) {
            margin-right: 10vw;
        }
    }
`;

export const NameLogo = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    `;