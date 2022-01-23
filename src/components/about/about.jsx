import styled from "styled-components";
import ArrowRight from '../../assets/Arrow Right.svg'
import GetStartedIllust from '../../assets/GetStarted.svg'
import FooterIcon from '../../assets/footerIcon.svg'
import { useState } from "react";
import DropdownIcon from '../../assets/DropdownArrow.svg'

export const FooterLink = (props) => {
    return (
        <a className="btn" href={props.link}>
            <div>
                <span data-link-alt={props.linkText}>{props.linkText}</span>
            </div>
        </a>
    )
}

const About = () => {

    let [dropdownOpened, setDropdownOpened] = useState(false)
    const toggleDropdown = () => {
        setDropdownOpened((prevState) => {
            return !prevState
        })
    }

    return (
        <Section id="About">
            <div className="container">
                <GetStarted>
                    <div><h3>Get started <br /> with our app?</h3></div>
                    <div className="GetStarted Button">
                        <a style={{ visibility: 'hidden' }} href="#GetStarted">
                            <div>
                                <span>
                                    <img src={ArrowRight} alt="ArrowRight" />
                                    <img src={ArrowRight} alt="ArrowRight" />
                                </span>
                            </div>
                        </a>
                    </div>
                </GetStarted>

                <div className="aboutUs__content">
                    <div className="links">
                        <div className="links__about">
                            <h3>About Us</h3>
                            <p>A smart workspace is a digital enviroment that brings together all the content of the workgroup members with theor favourit tools.</p>
                        </div>
                        <div className="links__sitemap">
                            <h3>Sitemap</h3>
                            <ul>
                                <li> <FooterLink link="#BigTransfers" linkText="Big Transfers" >Big Transfers</FooterLink></li>
                                <li> <FooterLink link="#Processes" linkText="Processes" >Processes</FooterLink></li>
                                <li> <FooterLink link="#Benefits" linkText="Benefits" >Benefits</FooterLink></li>
                                <li> <FooterLink link="#Personal" linkText="Personal" >Personal</FooterLink></li>
                                <li> <FooterLink link="#About" linkText="About" >About</FooterLink></li>
                            </ul>
                        </div>
                        <div className="links__community">
                            <h3>Community</h3>
                            <ul>
                                <li><FooterLink link="#Facebook" linkText="Facebook" /></li>
                                <li><FooterLink link="#Instagram" linkText="Instagram" /></li>
                                <li><FooterLink link="#LinkedIn" linkText="Linked In" /></li>
                                <li><FooterLink link="#Behance" linkText="Behance" /></li>
                                <li><FooterLink link="#Dribble" linkText="Dribble" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_copyright">
                        <div className="copyright">
                            <img src={FooterIcon} alt="Icon" />
                            <p>2021 Halo Lab. All rights reserved</p>
                        </div>
                        <div className="dropdown" onClick={toggleDropdown}>
                            <div>English <span>
                                <img className={dropdownOpened ? 'opened' : ''} src={DropdownIcon} alt="Dropdown" />
                            </span></div>
                            <div style={{ display: dropdownOpened ? "block" : 'none' }} className="DropdownContent">
                                <ul>
                                    <li><span></span> English</li>
                                    <li> Français</li>
                                    <li> Russian</li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Section>
    );
};


const Section = styled.section`
box-sizing: border-box;
padding: 80px 0;
margin-top: 100px;
position: relative;
padding-bottom: 0;

    .container{
        margin: 0 auto;
        background-color: #636c78;
        min-height: 200px;
        margin: 30px;
        border-radius: 40px;
        min-height: 460px;
    }

    .aboutUs__content{
        max-width: 1240px;
        margin: 0 auto;
        padding-top: 150px;

        .links{
            display: flex;
            border-bottom: 1px solid hsla(0, 0%, 94.9%, 0.2);
            padding-bottom: 20px;
            h3{
                color: white;
                font-size: 22px;
                font-weight: 400;
            }
           &__about{
               flex: 40%;
               p{
                 color: #c7c7c7;
                 max-width: 350px;
                 font-size: 18px;

               }
           }

           &__sitemap,
           &__community{
               flex: 30%;
               ul{
                   margin: 0;
                   display: flex;
                   flex-direction: column;
                   padding:0 ;
                   list-style-type: none;
                   flex-wrap: wrap;
                   max-height: 130px;
                   li{
                       margin: 10px 0;
                       padding: 0;
                       min-width: 150px;
                   }
                   a{
                       text-decoration: none;
                   }
               }

           }

            a.btn{
                color: #c7c7c7;
                display: block;
                width: fit-content;
                position: relative;
                /* overflow: hidden; */

                div{
                    width: 100%;
                    height: 21px;
                    overflow: hidden;
                    span{
                        transform: translateY(0);
                        transition: all ease 0.2s;
                        position: relative;
                        display: block;
                        &::after{
                            content: attr(data-link-alt);
                            position: absolute;
                            top: -20px;
                            left: 0;
                        }

                    }

                }

                &:hover{
                    div{
                    span{
                        transform: translateY(20px);
                        color: white;

                    }

                }

                }


                
            }

        }


        .footer_copyright{
            display: flex;
            justify-content: space-between;
            padding-top: 32px;
            padding-bottom: 32px;

            .copyright{
                display: flex;
                align-items: center;

                p{
                    margin-left: 12px;
                    color: #c7c7c7;
                    font-size: 18px;
                }
            }

            .dropdown{
                color: #c7c7c7;
                position: relative;
                cursor: pointer;
                display: flex;
                 align-content: center;
                align-items: center;
                img{
                    fill:  #c7c7c7;
                    opacity: 0.5;
                    width: 12px;
                    margin-left: 4px;
                    margin-bottom: 2px;
                    transition: all 0.1s ;
                    

                }

                .opened{
                        transform: rotate(180deg)
                }

                .DropdownContent{
                    background-color: white;
                    padding: 16px 24px;
                    border-radius: 16px;
                    position: absolute;
                    top: -160px;
                    right: 0;
                    ul{
                        margin: 0;
                        padding: 0;
                        list-style-type: none;
                        li{
                            padding: 6px 8px;
                            margin: 6px;
                            color:rgba(10, 3, 60, 0.7) ;
                            position: relative;

                            span{
                                display: block;
                                width: 8px;
                                height: 8px;
                                background-color: #4c4e8e;
                                position: absolute;
                                left: -10px;
                                border-radius: 8px;
                                top: 9px;
                            }
                        }
                    }
                }
            }
        }

    }
`

const GetStarted = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: url("${GetStartedIllust}");
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    width: 720px;
    margin: 0 auto;
    padding: 50px;
    background-size: cover;
    transform: translate(-50%, 5%);
    top: 0;
    left: 50%;
    position: absolute;
    h3{
        font-size: 44px;
        color: white;
        margin: 0;
    }

`

export default About;
