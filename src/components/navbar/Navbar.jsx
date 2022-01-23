import styled from 'styled-components';
import Logo from '../../assets/logo.svg'
import LogoutLogo from '../../assets/Logout button.svg'

const Navbar = () => {
    return (
        <Appbar className="header">
            <div className="logo">
                <a href="#home" className="header_logo">
                    <img src={Logo} alt="gig share logo" />
                    <p>gig share</p>
                </a>
            </div>
            <div className="links">
                <ul>
                    <li><a href="#BigTransfer" data-link-alt="Big Transfer"><span>Big Transfer</span></a></li>
                    <li><a href="Processes" data-link-alt="Processes"><span>Processes</span></a></li>
                    <li><a href="Benefits" data-link-alt="Benefits"><span>Benefits</span></a></li>
                    <li><a href="Personal" data-link-alt="Personal"><span>Personal</span></a></li>
                </ul>
            </div>
            <div className="buttons">
                <a className='LogoutBtn' href='#a'><img src={LogoutLogo} alt="Logout" /></a>
                <a href='#sign-up'>Sign Up</a>
            </div>
        </Appbar>
    );
};

const Appbar = styled.nav`
    max-width: 1240px;
    margin: 20px auto 0 auto;
    display: flex;
    justify-content: space-between;
    z-index: 5;
    align-items: center;
.logo{
        a{
            display: flex;
            align-items: center;
            text-decoration: none;
        }
        p{
            color: white;
            margin: 0 0 0 18px;
            font-size: 30px;
            font-weight: 900;
            font-family: 'RegulatoryNova', 'sans-serif';
            letter-spacing: 2px;
            margin-bottom: 7px;

        }
}

.links{
      ul{
          display: flex;
          list-style-type:none;
          justify-content: space-between;
          min-width: 600px;

          a{
            text-decoration:none;
            color: #c7c7c7;
            font-size: 18px;
            position: relative;
            overflow: hidden;
            display: block;
            text-align: center;
            animation-duration: 1s;
            animation-fill-mode: both;
            
            // text element inside
            span {
            display: block;
            transition: transform 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550); } 
            
            // slide text from data-link-title
            &:after {
            content: attr(data-link-alt);
            display: inline;
            position: absolute;
            transition: top 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
            top: 100%;
            left: 0;
            right: 0;
            text-align: center; }
            
            // animation when hovered
            &:hover {
                
                span {
                transform: translateY(-100%); 
                }
                
                &:after {
                top: 0; }
            }
            
        }



        @keyframes rubberBand {
            0% {
                transform: scale3d(1, 1, 1);
            }

            30% {
                transform: scale3d(1.25, 0.75, 1);
            }

            40% {
                transform: scale3d(0.75, 1.25, 1);
            }

            50% {
                transform: scale3d(1.15, 0.85, 1);
            }

            65% {
                transform: scale3d(.95, 1.05, 1);
            }

            75% {
                transform: scale3d(1.05, .95, 1);
            }

            100% {
                transform: scale3d(1, 1, 1);
            }
        }

        
      }

}

.buttons{
    a{
        text-decoration: none;
        color: white;
        padding:19px 35px;
        border:1px solid #b2b7bd;
        border-radius:10px

    }
    a.LogoutBtn{
        border: none;
        background-color: #8bb8a2;
        padding: 20px 16px  ;
        margin-right: 16px;
            display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 20px;
}

    }
}


`

export default Navbar;
