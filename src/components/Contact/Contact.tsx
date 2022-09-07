import * as React from "react";
import styled from "styled-components";
import {Theme} from "../../styles";
import {SocialButton} from "../Footer";
import {BannerPhoto, DonateCol, DonateCols} from "../Donate/Donate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faMapPin, faPhone} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import emailjs from "emailjs-com";

export const Contact = () => {

    const [reply_to, setEmail] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit  = (evt) => {
        evt.preventDefault();

        if (first && last && phone && reply_to && message) {
            const serviceId = 'service_4886hat';
            const templateId = 'template_ntti43q';
            const userId = 'user_vRa30SC9FbwOdg2e6az3a';
            const templateParams = {
                from_name: first + " " + last,
                reply_to,
                message,
                phone
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => {
                    if (response.status == 200) {
                        alert("success! we'll be in touch soon");
                        window.location.reload();
                    } else {
                        alert("there was an error, please try again later")
                    }
                })
                .catch(error => alert("there was an error, please try again later"));
        }
    }


    return (
<>

    <DonateCols>
    <DonateCol>


        <BannerPhoto style={{backgroundImage: `url(https://images.unsplash.com/photo-1546500840-ae38253aba9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80)`}} >



            <p style={{padding: `50px`}}>
                <h2>Nature Counts Foundation</h2><br />
                <h4>Office address</h4>
                <a href={"https://www.google.com/maps/place/Quellenstrasse+25,+8005+Z%C3%BCrich,+Switzerland/data=!4m2!3m1!1s0x47900a137fa69eb5:0x29f9ce63a2aec094?sa=X&ved=2ahUKEwi55IKPzPrzAhVxgv0HHQyoBkoQ8gF6BAgSEAE"}>Quellenstrasse 25<br />

                    8005 Zurich, Switzerland</a><br /><br />
                    <h4>contact</h4>
                <a href={"mailto:info@nature-counts.org"}>info@nature-counts.org</a><br />
                <a href={"tel:+41789349886)"}>+41 78 934 98 86</a><br />
            </p>
        </BannerPhoto>

    </DonateCol>

    <StyledForm>
            <h2 style={{color: Theme.colors.blue}}>Please contact us if you would like to:</h2>
            <ul>
                <li>Add your project to our Nature Scoreboard</li>
                <li>Donate to our cause</li>
                <li>Join our team</li>
                <li>Become a partner</li>
                <li>Learn more about our work</li>
            </ul>

            <FormRow>

                <SocialButton onClick={()=>window.open("mailto:contact@nature-counts.org")} style={{height: `50px`, width: `50px`, borderRadius: `25px`}}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </SocialButton>
                <SocialButton onClick={()=>window.open("https://www.linkedin.com/company/nature-counts-foundation/")}  style={{height: `50px`, width: `50px`, borderRadius: `25px`}}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </SocialButton>
                <SocialButton  onClick={()=>window.open("https://twitter.com/NatureCountsfnd")} style={{height: `50px`, width: `50px`, borderRadius: `25px`}}>
                    <FontAwesomeIcon icon={faTwitter} />
                </SocialButton>
                <SocialButton onClick={()=>window.open("https://www.facebook.com/NatureCountsFoundation/")}  style={{height: `50px`, width: `50px`, borderRadius: `25px`}}>
                    <FontAwesomeIcon icon={faFacebook} />
                </SocialButton>
                <SocialButton onClick={()=>window.open("https://www.instagram.com/nature_counts_foundation/")}  style={{height: `50px`, width: `50px`, borderRadius: `25px`}}>
                    <FontAwesomeIcon icon={faInstagram} />
                </SocialButton>
            </FormRow>
            <Divider />


        <FormRow>
        <div>
            <label>First Name</label>
            <input type="text" name="first" onChange={(v)=>setFirst(v.target.value)} />
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" name="last" onChange={(v)=>setLast(v.target.value)}  />
        </div>

    </FormRow>

    <label>Email</label>
    <input type="email" onChange={(v)=>setEmail(v.target.value)}/>
    <label>Phone</label>
    <input  onChange={(v)=>setPhone(v.target.value)} />
        <label>Message</label>
    <textarea  onChange={(v)=>setMessage(v.target.value)} name={"message"} style={{height: `100px`}} />

    <button className={"formbutton"} onClick={handleSubmit}><h5>Submit</h5></button>
    </StyledForm>
</DonateCols>

    </>
    )
}



export const StyledForm = styled.form`
    display: flex;
    margin: 30px 0;
    flex-direction: column;
    align-items: stretch;
    text-align: left;
    padding-top: 10px;
    align-self: center;
    padding-bottom: 30px;
    h2 {
        color: ${Theme.colors.blue};
    }
    font-family: ${Theme.fonts.subtitle};
    label {
        margin: 20px 0 0 0;
        text-transform: uppercase;
        font-weight: bold;
    }
    button.formbutton {
        background-color: ${Theme.colors.purple};
        padding: 5px 20px;
        border: 5px solid ${Theme.colors.purple};
        margin: 20px 0 0 0;
        align-self: center;
        :hover {
            background-color: ${Theme.colors.grey};
        }
    }
    input {
        margin: 0 0 5px 0;

        border: 1px solid ${Theme.colors.black};
        height: 30px;
        min-width: 300px;
    }
    @media screen and (max-width: 800px) {
        width: calc(100vw - 20vw);
    }
`;

export const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    div {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        width: 100%;
    }
    button {
        background-color: ${Theme.colors.grey};
        border: none;
        :hover {
            background-color: ${Theme.colors.blue};
        }
    }
    @media screen and (max-width: 800px) {
        flex-wrap: wrap;
        
    }
    `;



export const Divider = styled.div`
    height: 2px;
    opacity: 50%;
    background-color: ${Theme.colors.blue};
    margin: 20px 0 60px 0;
`;
