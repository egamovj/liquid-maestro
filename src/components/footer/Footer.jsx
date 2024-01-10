import Image from 'next/image'
import style from './footer.module.css'
import logo from '../../assets/icons/Logo.svg'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <Image src={logo} alt='logo'/>
        <p>World of extraordinary flavors & <br /> unrivaled mixology expertise</p>
      </div>
    </footer>
  )
}

export default Footer