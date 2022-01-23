import styled from "styled-components";
import FastSwitching from '../../assets/fast switching.svg'
import SendLargeFiles from '../../assets/send large files.svg'
import MaterialsAvailable from '../../assets/materials available.svg'


const Benefits = () => {
    return (
        <Section id="Benefits">
            <h1>Work even more effeciently with Gig Share</h1>
            <div className="benefit-cards">
                <BCard>
                    <div>
                        <img src={FastSwitching} alt="Fast Switching" />
                    </div>
                    <h3 className="header">Fast switching <br /> between different tools </h3>
                    <p className="body">You can download documents in different file formats, import files to Evernote</p>
                </BCard>
                <BCard>
                    <div>
                        <img src={SendLargeFiles} alt="Send Large FIles" />
                    </div>
                    <h3 className="header">Sending<br />large files safely </h3>
                    <p className="body">Application lets users preview PDF documents on a range of devices and supports password protection</p>
                </BCard>
                <BCard>
                    <div>
                        <img src={MaterialsAvailable} alt="Make Materials Available" />
                    </div>
                    <h3 className="header">Make materials<br />available to loved ones </h3>
                    <p className="body">The app has improved support for popular PDF extensions such as Fill and Sign</p>
                </BCard>

            </div>
        </Section>
    );
};

const Section = styled.section`
max-width: 1240px;
margin: 0 auto;
padding: 64px;
    h1{
        text-align: center;
        max-width: 567px;
        margin: 0 auto;
        margin-bottom: 50px;
    }

    .benefit-cards{
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        gap: 32px;

        h2{
            width: 100%;
            min-height: 200px;
            background-color: grey;
        }
    }
`
const BCard = styled.div`
width: 375px;
background-color: white;
padding: 32px 48px;
border-radius: 30px;
display: flex;
align-items: center;
flex-direction: column;
div{
    border-radius: 8px;
    background-color:#4c4e8e;
}
img{
    margin: 22px;
}

p{
    text-align: center;

}
h3.header{
    font-size: 22px;
    color: #0a033c;
    font-weight: 600;
    text-align: center;
    margin-top: 32px;
}
p.body{
    color: #0a033c;
    font-size:18px ;
    margin-top: 0;
}
`


export default Benefits;
