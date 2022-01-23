import Navbar from "../navbar/Navbar";
import styled from "styled-components";
import CL from '../../assets/Hero_Illustration_CL.svg'
import BL from '../../assets/Hero_Illustration_BL.svg'
import CR from '../../assets/Hero_Illustration_CR.svg'
import BR from '../../assets/Hero_Illustration_BR.svg'
import PUpload from '../../assets/Plus Upload.svg'




const BigTransfer = (props) => {



  return (
    <Section id="Big-Transfer">
      <Navbar />
      <div className="shadow1 CenterRight" />
      <div style={{ transform: `translateY(${props.y * 0.1}px)` }} className="shadow1 CenterLeft" />
      <div className="shadow1 BottomRight" />
      <div className="shadow1 BottomLeft" />
      <HeroContent>
        <h1>Big transfers, <br /> bigger impact</h1>
        <p>The simplest way to send big ideas around the world, and discover new creative work while you’re at it.</p>
        <div className="addFile_border">
          <div>
            <div className="btn-bg">
              <div className="btn-inactive">
                <div className="btn-bg__normal">
                  <span><img src={PUpload} alt="upload" /></span>
                  <p>Add your files</p>
                  <span>Up to 20 GB</span>
                </div>
                {/* <div className="bg-btn__hover">
                  <div className="image1"><img src={UBHover} alt="ubh" /></div>
                  <div className="image2"><img src={UBHover} alt="ubh" /></div>
                  <div className="image3"><img src={UBHover} alt="ubh" /></div>
                </div> */}


                {/* <div className="btn-uploading">
                  uploading state
                </div> */}


              </div>
            </div>
          </div>
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
    display: flex;
    margin: 0 auto;
    height: 193px;
    width: 242px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='45' ry='45' stroke='%23E6E6E699' stroke-width='3' stroke-dasharray='6%2c14' stroke-dashoffset='59' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 45px;



    .btn-bg{
      background-color: #7d8490;
      height: 100%;
      width: 242px;
      border-radius: 45px;
      display: flex;
      justify-content: center;
      align-items: center;

      &__normal{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        img{
          background-color: white;
          padding: 18px;
          border-radius: 50px;
          box-shadow: 0px 10px 20px rgb(65 70 78 / 40%) ;

        }
        p{
          margin: 6px;
        }
        span{
        color: #ccc;
        font-size: 14px;


        }
      }

    }



  }
`


export default BigTransfer;
