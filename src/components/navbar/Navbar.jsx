import styled from 'styled-components';
import Logo from '../../assets/logo.svg'
import LogoutLogo from '../../assets/Logout button.svg'
import { FooterLink } from '../about/about';

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
                    <li><FooterLink link="#BigTransfer" linkText="BigTransfer" data-link-alt="Big Transfer"></FooterLink></li>
                    <li><FooterLink link="#Processes" linkText="Processes" data-link-alt="Processes"></FooterLink></li>
                    <li><FooterLink link="#Benefits" linkText="Benefits" data-link-alt="Benefits"></FooterLink></li>
                    <li><FooterLink link="#Personal" linkText="Personal" data-link-alt="Personal"></FooterLink></li>
                </ul>
            </div>
            <div className="buttons">
                <a className='LogoutBtn' href='#a'><img src={LogoutLogo} alt="Logout" /></a>
                <a className='btn-primary' href='#sign-up'>Sign Up</a>
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
    height: 62px;
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
          margin: 0;
          margin-top: 4px;

         a.btn{
                color: #c7c7c7;
                display: block;
                width: fit-content;
                position: relative;
                /* overflow: hidden; */
                text-decoration: none;

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

}

.buttons{
    display: flex;
    a{
        text-decoration: none;
        color: white;
        border:1px solid #b2b7bd;
        border-radius:10px;
        transition: all ease 0.2s;

        &:hover{
            border-color: white;
        }

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


.btn-primary{
    display: block;
    padding:19px 35px;

}

`

export default Navbar;
