import Navbar from "../navbar/Navbar";
import styled from "styled-components";
import CL from '../../assets/Hero_Illustration_CL.svg'
import BL from '../../assets/Hero_Illustration_BL.svg'
import CR from '../../assets/Hero_Illustration_CR.svg'
import BR from '../../assets/Hero_Illustration_BR.svg'

const BigTransfer = () => {
  return (
    <Section id="Big-Transfer">
      <Navbar />
      <div className="shadow1 CenterLeft" />
      <div className="shadow1 CenterRight" />
      <div className="shadow1 BottomRight" />
      <div className="shadow1 BottomLeft" />
      <HeroContent>
        <h1>Big transfers, <br /> bigger impact</h1>
        <p>The simplest way to send big ideas around the world, and discover new creative work while you’re at it.</p>
        <div className="addFile_border">
          <div>Some button text</div>
        </div>
      </HeroContent>
    </Section>
  );
};


const Section = styled.section`
    background-color: #636c78;
    height: calc(100vh - 40px);
    margin: 30px ;
    border-radius: 40px;
    padding: 40px;
    box-sizing: border-box !important;
    position: relative;
    min-height: 850px;


  div.shadow1{
    box-shadow: 0 60px 60px -40px rgb(0 0 0 / 30%);
  }

  div.CenterLeft{
    position: absolute;
    top: 40%;
    left: -30px;
    width: 176px;
    height: 365px;
    background-repeat: repeat;
    background-size: cover;
    background-image: url('${CL}');
    background-position: center;
    transform:  translateY(-50%);
    border-radius: 0 40px 40px 0;
  }

  div.CenterRight{
    position: absolute;
    top: 40%;
    right: -30px;
    width: 170px;
    height: 250px;
    background-repeat: repeat;
    background-size: cover;
    background-image: url('${CR}');
    border-radius: 40px 0 0 40px  ;
    transform:  translateY(-60%);

  }
 
  div.BottomLeft{
    position: absolute;
    height: 120px;
    width:235px;
    bottom: 0;
    left: 160px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    background-image: url('${BL}');
    border-radius: 40px 40px 0 0;

  }
  div.BottomRight{
    position: absolute;
    height: 200px;
    width:285px;
    bottom: 100PX;
    right: 70px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    background-image: url('${BR}');
    border-radius: 40px;
    ${'' /* transform: rotate(180deg); */}

  }
`

const HeroContent = styled.div`
  position: absolute;
  height: 50%;
  width: 65%;
  top: 47%;
  left: 50%;
  transform: translate(-50% ,-50%);

  h1{
    font-family: 'RegulatoryNova', 'sans-serif';
    font-size: 80px;
    line-height: 1.1em;
    font-weight: 500;
    color: white;
    text-align: center;
    max-width: 760px;
    margin: 0 auto 42px auto;
  }
  p{
    font-size: 22px;
    color:#dcdcdc;
    text-align: center;
    max-width: 600px;
    margin: 0 auto 40px auto;
  }

  div.addFile_border{
    padding: 20px;
    display: block;
    margin: 0 auto;
    height: 193px;
    width: 242px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='45' ry='45' stroke='%23E6E6E699' stroke-width='3' stroke-dasharray='6%2c14' stroke-dashoffset='59' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 45px;
  }
`


export default BigTransfer;
