import styled from "styled-components";
import ArrowRight from '../../assets/Arrow Right.svg'
import GetStartedIllust from '../../assets/GetStarted.svg'
import FooterIcon from '../../assets/footerIcon.svg'

const About = () => {
    return (
        <Section id="About">
            <div className="container">
                <GetStarted>
                    <div><h3>Get started <br /> with our app?</h3></div>
                    <div className="GetStarted Button">
                        <a href="#GetStarted">
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
                                <li> <a href="#BigTransfers" >Big Transfers</a></li>
                                <li> <a href="#Processes" >Processes</a></li>
                                <li> <a href="#Benefits" >Benefits</a></li>
                                <li> <a href="#Personal" >Personal</a></li>
                                <li> <a href="#About" >About</a></li>
                            </ul>
                        </div>
                        <div className="links__community">
                            <h3>Community</h3>
                            <ul>
                                <li><a href="#Facebook">Facebook</a></li>
                                <li><a href="#Instagram">Instagram</a></li>
                                <li><a href="#LinkedIn">Linked In</a></li>
                                <li><a href="#Behance">Behance</a></li>
                                <li><a href="#Dribble">Dribble</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_copyright">
                        <div className="copyright">
                            <img src={FooterIcon} alt="Icon" />
                            <p>2021 Halo Lab. All rights reserved</p>
                        </div>
                        <div>
                            <div>English <span>Icon</span></div>
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
                   max-height: 120px;
                   li{
                       margin: 10px 0;
                       padding: 0;
                       min-width: 150px;
                   }
                   a{
                       color: #c7c7c7;
                       text-decoration: none;
                   }
               }

           }
        }


        .footer_copyright{
            display: flex;
            justify-content: space-between;
            padding-top: 32px;

            .copyright{
                display: flex;
                align-items: center;

                p{
                    margin-left: 12px;
                    color: #c7c7c7;
                    font-size: 18px;
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
