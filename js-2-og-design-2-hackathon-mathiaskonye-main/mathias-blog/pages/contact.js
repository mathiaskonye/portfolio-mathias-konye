import Navlayout from './components/navbar'
import Menu from './components/menu'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Herobanner from './components/herobanner'
import Ghostbtn from './components/ghostbtn'
import Ctabtn from './components/ctabtn'
import Footer from './components/footer'
import Head from 'next/head'
import Contact from './components/contactcontainer'
import ContactContainer from './components/contactcontainer'
import Image from 'next/image'



export default function contact() {
    
    return (
  
      <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Mathias Kønye</title>
      </Head>
  

      <Navlayout>
       <Link href="/">
        <a className={utilStyles.anchorLogo}>
         <h1 className={utilStyles.brand}>Mathias Portfolio</h1>
        </a>
       </Link>
      </Navlayout>
  
       <div className={utilStyles.wrapperMenu}>
      <Menu>
        <div>
           <Link href="/posts/first-post">
            <a>
             <h2 className={utilStyles.navtext}>My Work <i className="fas fa-angle-right"></i></h2>
            </a>
           </Link>
        </div>
        <div>
        <Link href="/about">
            <a>
             <h2 className={utilStyles.navtext}>About <i className="fas fa-angle-right"></i></h2>
            </a>
        </Link>
        </div>
        <div>
         <Link href="/contact">
            <a>
             <h2 className={utilStyles.navtext}>Contact <i className="fas fa-angle-right"></i></h2>
            </a>
         </Link>
        </div>
      </Menu>
        </div>

  <div className={utilStyles.smoothTrans}> 
    <div className={utilStyles.wrapper}>
    <ContactContainer>
            <div className={utilStyles.contactBg}>
            <h2 className={utilStyles.contactH1}>LETS TALK!</h2>
            <h3>For any questions or inquiries, please contact me on my phone number or shoot me a message through email. Thank you.</h3>
            <hr></hr>
            <h4><i className="fas fa-phone"></i> Phone: +47 988 79 983</h4>
            <h4><i className="fas fa-envelope"></i> E-mail: mathiaskonye@gmail.com</h4>
            </div>
            <div className={utilStyles.contactBg}>
            <div className={utilStyles.responsiveImage}>
            </div>
            </div>
    </ContactContainer>
    </div>
  </div>

    <Footer>
      <h4 className={utilStyles.footerText}>Mathias Portfolio&trade;</h4>
      <h4><Link href="/posts/first-post"><a className={utilStyles.icons}><i className="fab fa-github-square"></i></a></Link> <Link href="/posts/first-post"><a className={utilStyles.icons}><i className="fas fa-envelope"></i></a></Link></h4>
    </Footer>
        
      </>
    )
  }