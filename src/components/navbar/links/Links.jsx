import NavLink from "./navLink/navLink";
import styles from './links.module.css'

const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Menu",
            path: "/menu",
        },
      ];
    
    
      return (
        <div className={styles.links}>
          { links.map((link => ( <NavLink item={link} key={link.title}/> ))) }
        </div>
      )
}

export default Links