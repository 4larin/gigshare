import styled from "styled-components";
import Arrow from '../../assets/Arrow Right.svg'
import Dots from '../../assets/Dots.svg'
import Illustration from '../../assets/period stats illustration.svg'
import FineGirl from '../../assets/fine_girl.png'
import Col1 from '../../assets/period stats 1.svg'
import Col2 from '../../assets/period stats 2.svg'
import Col3 from '../../assets/period stats 3.svg'

const Personal = () => {
    return (
        <Section id="Personal">
            <div className="body">
                <PeriodStatistics>
                    <img src={Dots} alt="dots" className="dots" />
                    <img src={Illustration} alt="Background" className="periodS_image" />
                    <Card>
                        <div>
                            <img className="fine_girl" src={FineGirl} alt="Gig share lady" />
                        </div>
                        <div className="Statics_graph">
                            <div className="period_stat_header">
                                <h3>Period statics</h3>
                                <p>January</p>
                            </div>
                            <div className="bars">
                                <img src={Col1} alt="Column1" />
                                <img src={Col2} alt="Column2" />
                                <img src={Col3} alt="Column3" />
                            </div>
                        </div>
                    </Card>

                </PeriodStatistics>
                <div className="RunYourBusinessSection">
                    <h1>Run your business <br /> in Gig Share</h1>
                    <p>
                        In Gig Share, you can work directly with the leading communication platforms - Slack and Zoom. Now you can have a brief meeting with your colleagues or even a video conference with just a couple of mouse clicks.
                    </p>
                    <div className="footer">
                        <a className="btn" href="#a">Get Started</a>
                        <a className="btn-secondary" style={{ marginLeft: '10px' }} href="#a">Learn more <span ><img src={Arrow} alt="arrow" /></span> </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};


const Section = styled.section`
margin: 0 auto;
padding: 64px 0;
    .body{
        display: flex;
        gap: 80px;
        max-width: 1240px;
        margin: 0 auto;
        height: 100%;

        div{
            display: flex;
            flex-direction: column;
            gap: 40px;
            width: 100%;
            h1{
                margin: 0;
            }
            p{
                font-size: 18px;
                color: rgba(10, 3, 60, 0.8);
                margin: 0            }
            a{
                padding: 19px 36px;
                text-decoration: none;
                font-size: 18px;
                border-radius: 12px;
                margin: 0;
            }
            a.btn{
                color: white;
                background-color: #4c4e8e;
                display: block;
                width: fit-content;
            }
            a.btn-secondary{
                color:#0a033c ;
                padding-left:  0;
                padding-right:  0;
            }
            .footer{
                display: flex;
                flex-direction: row;
            }
            
        }
    }

`

const PeriodStatistics = styled.div`
        position: relative;

        .dots{
            position: absolute;
            right: -40px;
            top: 50%;
            transform: translateY(-70%);
        }
        .periodS_image{
            position: absolute;
            border-radius: 30px;
            left: -24px;
            bottom: -24px;
            z-index: -1
        }
        .period_stat_header{
            gap: 0 !important;
        }
`

const Card = styled.div`
    background-color: white;
    display: flex !important;
    flex-direction: row !important;
    border-radius: 30px;
    max-width: 555px !important;
    height: 100%;
    position: relative;
    box-shadow:0 85px 128px -19px rgb(0 0 0 / 20%);

    img.fine_girl{
        position: absolute;
        height: calc(370px + 40px);
        left: 20px;
        bottom: 0;
        /* visibility: hidden; */
    }
    .Statics_graph{
        margin: 40px 0 0 60px;
        display: flex !important;
        height: 100%;
        gap: 10px !important;
        justify-content: space-between;
        max-height: 280px ;

        h3{
            font-size: 22px;
            color: #0a033c;
            margin: 0;
            margin-bottom: 4px;
        }
        p{
            margin-top: 6px;
            font-size: 14px !important;
        }

    }

    .bars{
        display: flex;
        flex-direction: row !important;
        gap: 15px !important;
        align-items: baseline;
        width: fit-content;
        justify-content: center;

        img{
            width: 24px;
        }
    }
`

export default Personal;

