import * as React from "react";
import styled from "styled-components";
import {Theme} from "../styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


export const Footer = () => {

    return (

        <StyledFooter>
            {/*<h6>contact us</h6>*/}
            <SocialButton onClick={()=>window.open("mailto:contact@nature-counts.org")}>
                <FontAwesomeIcon icon={faEnvelope} />
            </SocialButton>
            <SocialButton onClick={()=>window.open("https://www.linkedin.com/company/nature-counts-foundation/")}>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </SocialButton>
            <SocialButton  onClick={()=>window.open("https://twitter.com/NatureCountsfnd")}>
                <FontAwesomeIcon icon={faTwitter} />
            </SocialButton>
            <SocialButton onClick={()=>window.open("https://www.facebook.com/NatureCountsFoundation/")}>
                <FontAwesomeIcon icon={faFacebook} />
            </SocialButton>
            <SocialButton onClick={()=>window.open("https://www.instagram.com/nature_counts_foundation/")}>
                <FontAwesomeIcon icon={faInstagram} />
            </SocialButton>
            <img src={'/fullLogoBlack.png'} />

        </StyledFooter>
    )
}

export const SocialButton = styled.button`
    height: 36px;
    width: 36px;
    border: none;
    margin: 0 15px;
    flex-shrink: 0;
    border-radius: 18px;
    cursor: pointer;
    background-color: ${Theme.colors.grey};
    font-size: 18pt;
    color: ${Theme.colors.white};
    :hover {
        background-color: ${Theme.colors.black};
    }
    @media screen and (max-width: 800px) {
        margin: 2px;
    }

`;
export const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: ${Theme.colors.white};
    justify-content: flex-end;
    align-items: center;
    h3 {
        color: ${Theme.colors.black};
        padding: 30px 30px 0 30px;

    }
    h6 {
        padding-top: 16px;
        margin-right: 10px;
        color: ${Theme.colors.grey};
    }
    img {
        height: 120px;
        margin-right: 40px;
        margin-left: 80px;
        margin-bottom: 0px;
        transition: height 0.5s;
    }
    @media screen and (max-width: 800px) {
        flex-wrap: wrap;
        justify-content: center;
        img {
            margin-right: 50px;
            margin-left: 50px;
        }
    }
`;