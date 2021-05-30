import Navlayout from './components/navbar'
import Menu from './components/menu'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Herobanner from './components/herobanner'
import Ghostbtn from './components/ghostbtn'
import Ctabtn from './components/ctabtn'
import Footer from './components/footer'
import Head from 'next/head'



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
      <Link href="/mywork">
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
    <Herobanner>
     <div className={utilStyles.bgColor}>
        <div className={utilStyles.headerHomeImage}></div>
         <h1>Mathias Kønye</h1>
        <hr></hr>
      <div className={utilStyles.btnContainer}>
        <Link href="/about">
        <a>
        <Ctabtn>About Me</Ctabtn>
        </a>
        </Link>
      </div>
     </div>
    </Herobanner>
    </div>

    <Footer>
      <h4 className={utilStyles.footerText}>Mathias Portfolio&trade;</h4>
      <h4><Link href="/posts/first-post"><a className={utilStyles.icons}><i className="fab fa-github-square"></i></a></Link> <Link href="/posts/first-post"><a className={utilStyles.icons}><i className="fas fa-envelope"></i></a></Link></h4>
    </Footer>
      
    
    </>
  )
}