import Image from 'next/image';

import Links from './links/Links';
import NavLink from './links/navLink/navLink';

import styles from './header.module.css';
import Logo from '../../assets/icons/Logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src={Logo} alt='Liquid Maestro'/>
          </div>
          <div>
            <Links/>
          </div>
        </div>
      </nav>
      <div className={styles.hero}>
        <span>Indulge in</span>
        <h1>Liquid Artistry</h1>
        <p>Step into a world of <br /> extraordinary flavors and <br /> unrivaled mixology expertise</p>
        <button>EXPLORE</button>
      </div>
    </header>
  )
}

export default Header