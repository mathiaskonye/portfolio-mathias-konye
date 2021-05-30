import Navlayout from './components/navbar'
import Menu from './components/menu'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Herobanner from './components/herobanner'
import Ghostbtn from './components/ghostbtn'
import Ctabtn from './components/ctabtn'
import Footer from './components/footer'
import Head from 'next/head'
import HeroAbout from './components/heroabout'



export default function home() {
  return (

    <>
    <Head>
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
        <h2 className={utilStyles.navtext}>About <i className="fas fa-angle-right"></i></h2>
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


    <HeroAbout>
     <div className={utilStyles.wrapper}>
     <div className={utilStyles.bgAbout}>
     <div className={utilStyles.marginTop}>
    <div className={utilStyles.headerHomeImage}></div>
    <h1>Mathias Kønye</h1>
    </div>
      <h5>Hey. Im 23 years young. I grew up in Oslo, Norway and that is where I still live today. I started coding and designing websites in 2019 and I`ve come a long way since then. I started learning HTML/CSS and JavaScript through Noroff School Of Technology in Oslo, but I am going to expand my knowledge and skills with other programming languages. Infact, I have already started.<br></br><br></br>
      Im always eager to learn more because I have a passion for developing user-friendly, solid and nice looking websites. These are the programming languages I know currently: HTML/CSS, SCSS, JavaScript, I can also do a little bit of React.<br></br><br></br> Contact me If you would like to know more!
      </h5>
      <div className={utilStyles.btnContainer}>
        <Link href="contact">
        <a>
        <Ctabtn>Contact Me</Ctabtn>
        </a>
        </Link>
      </div>
     </div>
     </div>
    </HeroAbout>
    </div>

    <Footer>
      <h4 className={utilStyles.footerText}>Mathias Portfolio&trade;</h4>
      <h4><Link href="/posts/first-post"><a className={utilStyles.icons}><i className="fab fa-github-square"></i></a></Link> <Link href="/posts/first-post"><a className={utilStyles.icons}><i className="fas fa-envelope"></i></a></Link></h4>
    </Footer>
      
    
    </>
  )
}