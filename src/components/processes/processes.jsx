import styled from "styled-components";
import Living from '../../assets/living_logo.svg'
import HomeGarden from '../../assets/hom-and-gardens_logo.svg'
import BookMyShow from '../../assets/book-my-show_logo.svg'
import Marriott from '../../assets/marriott_logo.svg'
import PieBackground from '../../assets/processes illustration.svg'
import Dots from '../../assets/Dots.svg'
import MenuDots from '../../assets/menu-dots.svg'
import ChartImage from '../../assets/ChartImage.svg'
import Red from '../../assets/red.svg'
import Cream from '../../assets/cream.svg'
import Purple from '../../assets/purple.svg'
import Brown from '../../assets/brown.svg'
import Green from '../../assets/green.svg'
import { useState } from 'react'




const Processes = () => {

    let [hoverState, setHoverState] = useState(null)

    const mouseEnter = (value) => {
        setHoverState(value)
    }

    const mouseLeave = () => {
        setHoverState(null)
    }


    return (
        <Section id="Processes">
            <div className="processes-cols">
                <div className="processes-cols__col6 processes-cols__header ">
                    <div className="processes-cols__body">
                        <h1>Your best processes</h1>
                        <p>It’s a smart workspace where teams, tools and content come workspace together.</p>
                    </div>
                    <div className="processes-cols__footer">
                        <img src={Living} alt="Living logo" />
                        <img src={HomeGarden} alt="Home Garden" />
                        <img src={BookMyShow} alt="Book My Show" />
                        <img src={Marriott} alt="Marriott" />
                    </div>
                </div>
                <PieChart className="processes-cols__col6">
                    <img className="pie_Background" src={PieBackground} alt="Pie bg" />
                    <img src={Dots} alt="Dots bg" className="Pie_dots" />
                    <div className="piechart">
                        <div className="piechart__chart">
                            <h3>Niches breakdown</h3>
                            <div className="piechart__chart__chartSVG">
                                <div className="content">

                                    <img className="ImageChart" src={ChartImage} alt="chart_img" useMap="#image-map" />
                                    <map name="image-map">
                                        <area onMouseEnter={() => mouseEnter('red')} onMouseLeave={mouseLeave} target="" alt="red" title="red" href="#red" coords="13,148,47,130,68,152,108,160,150,132,161,101,200,100,195,135,176,166,151,189,103,200,69,197,36,181" shape="poly" />
                                        <area onMouseEnter={() => mouseEnter('cream')} onMouseLeave={mouseLeave} target="" alt="cream" title="cream" href="#cream" coords="13,148,46,130,38,99,41,84,3,69,0,95,2,122" shape="poly" />
                                        <area onMouseEnter={() => mouseEnter('green')} onMouseLeave={mouseLeave} target="" alt="green" title="green" href="#green" coords="41,84,52,61,70,45,51,12,23,31,9,54,3,69" shape="poly" />
                                        <area onMouseEnter={() => mouseEnter('purple')} onMouseLeave={mouseLeave} target="" alt="purple" title="purple" href="#purple" coords="71,46,90,38,117,40,125,3,98,-1,80,2,63,6,51,11" shape="poly" />
                                        <area onMouseEnter={() => mouseEnter('black')} onMouseLeave={mouseLeave} target="" alt="black" title="black" href="#black" coords="117,40,129,3,147,10,165,24,181,42,193,60,200,82,200,100,161,101,157,77,145,58,127,45" shape="poly" />
                                    </map>


                                    <img src={Red} alt="Red" className={hoverState === 'red' ? 'sectors hoverSector' : 'sectors'} />
                                    <img src={Cream} alt="Cream" className={hoverState === 'cream' ? 'sectors hoverSector' : 'sectors'} />
                                    <img src={Brown} alt="Brown" className={hoverState === 'black' ? 'sectors hoverSector' : 'sectors'} />
                                    <img src={Purple} alt="Purple" className={hoverState === 'purple' ? 'sectors hoverSector' : 'sectors'} />
                                    <img src={Green} alt="Green" className={hoverState === 'green' ? 'sectors hoverSector' : 'sectors'} />
                                    <div className="graphTotal">
                                        <p>TOTAL</p>
                                        <h3>1258</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="piechart__list">
                            <a href="#MenuDots" className="piechart__list__button"><img src={MenuDots} alt="MenuDots" /></a>
                            <ul>
                                <li> <span style={{ backgroundColor: '#4c4e8e' }} className="icon"><span style={{ borderColor: '#4c4e8e' }} className={hoverState === 'purple' ? 'hoverState hoverStateActive' : 'hoverState'} /></span><p>Engineering</p> <span className="percentage">23%</span> </li>
                                <li> <span style={{ backgroundColor: '#8BB8A2' }} className="icon"><span style={{ borderColor: '#8BB8A2' }} className={hoverState === 'green' ? 'hoverState hoverStateActive' : 'hoverState'} /></span><p>Finance</p> <span className="percentage">17%</span> </li>
                                <li> <span style={{ backgroundColor: '#E5D2A2' }} className="icon"><span style={{ borderColor: '#E5D2A2' }} className={hoverState === 'cream' ? 'hoverState hoverStateActive' : 'hoverState'} /></span><p>Art</p> <span className="percentage">13%</span> </li>
                                <li> <span style={{ backgroundColor: '#FF4033' }} className="icon"><span style={{ borderColor: '#FF4033' }} className={hoverState === 'red' ? 'hoverState hoverStateActive' : 'hoverState'} /></span><p>Social</p> <span className="percentage">12%</span> </li>
                                <li> <span style={{ backgroundColor: '#432E2D' }} className="icon"><span style={{ borderColor: '#432E2D' }} className={hoverState === 'black' ? 'hoverState hoverStateActive' : 'hoverState'} /></span><p>Design</p> <span className="percentage">99%</span> </li>
                            </ul>
                        </div>

                    </div>
                </PieChart>

            </div>

        </Section>
    );
};

const Section = styled.section`
padding: 80px 0;

    padding: 64px;
    
    div.processes-cols{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1240px;
        gap: 40px;
        &__header{
            display: flex;
            flex-direction: column;
        }
        &__body{
             display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            h1{
                max-width: 220px;
                color: #0a033c;
                font-family: 'RegulatoryNova', 'sans-ertif';
                font-size: 44px;
            }
            p{
                display: block;
                max-width: 272px;
                font-size: 18px;
            }
        }
        &__footer{
            display: flex;
            justify-content: space-between;
            border-top: .2px dashed #666f7c;
            margin-top: 40px;
            padding-top: 40px;
        }
        &__col6{
            width: 100%;
        }
    }
  
`

const PieChart = styled.div`
    display: flex;
    position: relative;
    justify-content: flex-end;
    box-sizing: border-box;

    .pie_Background{
        position: absolute;
        bottom: -24px;
        right: -24px;
        border-radius: 30px;
        z-index: -1;
    }

    .Pie_dots{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);

    }

    .piechart{
    background-color: white;
    box-shadow: 0 85px 128px -19px rgb(0 0 0 / 20%);
    width: calc(100% - 60px);
    border-radius: 30px;
    height: 336px;
    padding: 32px 40px;
    display: flex;
    box-sizing: border-box;
    &__chart{
            box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 100%;
        /* margin-right: 30px; */
        h3{
            margin-top: 0;
            margin-bottom: 28px;
        }
        &__chartSVG{
            box-sizing: border-box;
            width: 100%;
            flex: auto;
            display: flex;
            position: relative;

            

            .content{
                display: flex;
                height: 200px;
                width: 200px;
                position: relative;

                .sectors{
                position: absolute;
                                    transform: scale(1);
                    z-index: 1;
                    transition: all 0.3s ease;

                }

                .ImageChart{
                    z-index: 2;
                    
                }


                .hoverSector{
                    transform: scale(1.1);
                }

                 .graphTotal{
                background-color: white;
                position: absolute;
                top: 20%;
                right: 20%;
                box-shadow: 0 4px 20px 0 rgb(0 0 0 / 20%);
                width: 120px;
                height: 120px;
                border-radius: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                z-index: 2;
                
                p{
                    margin: 0;
                    font-size: 13px;
                    color: #999;
                }
                h3{
                    margin: 0;
                    font-size: 32px;
                    font-weight: 300;
                }
            }
            }

           
        }
    }
    &__list{
        
        width: 100%;
        display: flex;
        flex-direction: column;
        &__button{
            color: transparent;
            height: 32px;
            width: 32px;
            background-color: rgba(211, 214, 223, 0.24);
            align-self: flex-end;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            margin-bottom: 28px;
        }
        ul{
            list-style-type: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            justify-content: space-between;
            
            li{
                display: flex;
                align-items: center;
                justify-content: space-between;

                

                .icon{
                    height: 8px;
                    width: 8px;
                    border-radius: 12px;
                    display: block;
                    margin-right: 12px;
                    align-self: center;
                    justify-self: center;
                    margin-top: -4px;
                    position: relative;

                    .hoverState{
                        display: block;
                        position: absolute;
                        height: 12px;
                        width: 12px;
                        border-radius: 12px;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50% ,-50%) scale(0);
                        border: 1.5px solid ;
                        transition: all 0.3s ease;

                    }

                    .hoverStateActive{
                        transform: translate(-50% ,-50%) scale(1);
                    }

                  

                    
                }

                P{
                    font-size: 14px;
                    flex: 4;
                    margin: 0;
                }

                .percentage{
                    flex: 1;
                    font-size: 14px;
                    font-weight: 600;
                    color: #0a033c;
                }
            }
           
        }
    }

    }
`


export default Processes;




