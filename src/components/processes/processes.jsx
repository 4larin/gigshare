import styled from "styled-components";
import Living from '../../assets/living_logo.svg'
import HomeGarden from '../../assets/hom-and-gardens_logo.svg'
import BookMyShow from '../../assets/book-my-show_logo.svg'
import Marriott from '../../assets/marriott_logo.svg'
import PieBackground from '../../assets/processes illustration.svg'
import Dots from '../../assets/Dots.svg'

const Processes = () => {
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

                    </div>
                </PieChart>

            </div>

        </Section>
    );
};

const Section = styled.section`
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

    }
`


export default Processes;
