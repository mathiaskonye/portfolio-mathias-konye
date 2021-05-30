import utilStyles from '../styles/utils.module.css'

export default function NavBar() {
    return (
      <>
      <nav className="navigation">
       <Link href="/">
        <a className={utilStyles.anchorLogo}>
         <h1 className={utilStyles.brand}>Mathias Portfolio</h1>
        </a>
       </Link>
    </nav>
        <div className="menu">
          <div>
            <Link href="/posts/first-post">
              <a>
                <h2 className={utilStyles.navtext}>
                  My Work <i className="fas fa-angle-right"></i>
                </h2>
              </a>
            </Link>
          </div>
          <div>
            <h2 className={utilStyles.navtext}>
              About <i className="fas fa-angle-right"></i>
            </h2>
          </div>
          <div>
            <Link href="/contact">
              <a>
                <h2 className={utilStyles.navtext}>
                  Contact <i className="fas fa-angle-right"></i>
                </h2>
              </a>
            </Link>
          </div>
        </div>
      </>
    );
}