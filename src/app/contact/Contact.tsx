import { FC } from "react";
import Form from "./ContactForm";
import { Heading } from "../../components";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

const Contact: FC = () => {

    const onClickIcon = (value: string) => {
        let link = "";
        switch(value) {
            case "linkedin":
                link = 'https://www.linkedin.com/in/siva-guhan-998696235/';
                break;
            case "github": 
                link = "https://github.com/SivaGuhan";
                break;
            default:
                break;
        }

        window.open(link, "_blank");
    }

    return (
        <section id="contact" className="contact-wrapper-container">
            <div className="contact-details-container">
                <div className="contact-form">
                    <Heading title="Get in Touch"/>
                    <Form />
                </div>
                <div className="contact-link-wrapper">
                    <div className="follow-wrapper">
                        <p className="head">Follow me on</p>
                        <div className="follow-items-wrapper">
                            <PiLinkedinLogoFill color="#0a66c2" onClick={() => onClickIcon("linkedin")}/>
                            <FaGithub onClick={() => onClickIcon("github")}/>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="details-wrapper">
                        <div className="detail">Email: sivasguhan@gmail.com</div>
                        <div className="detail">Mobile: +91 8807713589</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;