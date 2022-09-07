import * as React from "react";
import styled from "styled-components";
import {Theme} from "../../styles";
import {SocialButton} from "../Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";
import emailjs from "emailjs-com";

export const Donate = () => {

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
            <BannerPhoto style={{backgroundImage: `url(https://d2zmi9say0r1yj.cloudfront.net/OceanImageBank_BrookPeterson_08.jpg)`}} />
            {/*<BannerPhoto style={{backgroundImage: `url(https://d2zmi9say0r1yj.cloudfront.net/OceanImageBank_BrookPeterson_09.jpg)`}} />*/}
        </DonateCol>
        {/*<StyledForm>*/}
        {/*    <h2>Donate to our cause</h2>*/}
        {/*    The Nature Counts Foundation seeks to improve the availability of biodiversity data and strengthen*/}
        {/*        the overall understanding of ecosystem conservation and restoration activities, paving the way for*/}
        {/*        researchers, investors, and practitioners to effectively respond to the human impact on nature. Our*/}
        {/*        analysis informs decisions that accelerate the conservation and restoration of nature. The*/}
        {/*        Foundation’s focus spans several activities, such as:*/}
        {/*        <ul>*/}
        {/*            <li>Monitoring</li>*/}
        {/*            <li>Performance Metric Development</li>*/}
        {/*            <li>Reporting</li>*/}
        {/*            <li>Industry-wide Standard Development</li>*/}
        {/*            <li>Advocacy</li>*/}
        {/*        </ul>*/}

        {/*        Please donate to our cause. We would be very grateful.*/}
        {/*    <FormRow>*/}
        {/*        <button><h5>CHF 100</h5></button>*/}
        {/*        <button><h5>CHF 500</h5></button>*/}
        {/*        <button><h5>CHF 1000</h5></button>*/}
        {/*        <button><h5>CHF 5000</h5></button>*/}
        {/*    </FormRow>*/}
        {/*    <Divider />*/}
        {/*    <FormRow>*/}
        {/*        <div>*/}
        {/*            <label>First Name</label>*/}
        {/*            <input></input>*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*            <label>Last Name</label>*/}
        {/*            <input></input>*/}
        {/*        </div>*/}

        {/*    </FormRow>*/}

        {/*    <label>Email</label>*/}
        {/*    <input></input>*/}
        {/*    <label>Phone</label>*/}
        {/*    <input></input>*/}
        {/*    <label>Country</label>*/}
        {/*    <input></input>*/}
        {/*    <Divider />*/}
        {/*    <label>Payment Method</label>*/}
        {/*    <input></input>*/}
        {/*    <button>Donate to Nature Counts Foundation</button>*/}
        {/*</StyledForm>*/}

        <StyledForm>
            <h2>Donate to our cause</h2>
            We are very grateful for your interest to support the Nature Counts Foundation. However, we are not accepting voluntary contributions until our tax-exempt status has been granted. We expect to officially become a non-profit foundation in December 2021, at which time we hope you will return to us and donate to our activities. Thanks again!

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

            <button onClick={handleSubmit}>Get in touch with the Nature Counts Foundation</button>
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
    button {
        background-color: ${Theme.colors.purple};
        
        border: 5px solid ${Theme.colors.purple};
        margin: 20px 0 0 0;
        padding: 20px;
        font-size: 14pt;
        font-family: ${Theme.fonts.subtitle};
        color: ${Theme.colors.white};
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

`;
export const DonateCols = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    margin: 20px 10vw 0 0;
    @media screen and (max-width: 800px) {
        flex-wrap: wrap;
            margin: 20px 10vw;
    }
`;
export const DonateCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    button {
        margin: 50px 0 0 0;
        align-self: center;
    }
`;

export const BannerPhoto = styled.div`
    display: flex;
    margin: 15px 0;
    flex-direction: column;
    margin-right: 50px;
    background-position: center;
    background-size: cover;
    min-width: 20vw;
    height: 300px;
    background-repeat: no-repeat;
    flex-grow: 1;
    p {
        background-color: ${Theme.colors.black};
        margin-top: 320px;
    }
    @media screen and (max-width: 800px) {
        width: 80vw;
        margin-right: 0;
        height: 600px;
        p {
            margin-top: 0px;
        }
    }
`;

export const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    div {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
    }
    button {
        flex-grow: 1;
        margin: 10px;
        flex-basis:0;
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