import logoImg from '../assets/logo-ignite.svg'

import styles from './header.module.css';


export function Header() {
   return (
    <header className={styles.header}>
        <img src={logoImg} alt="Logo Ignite-feed" />


    </header>

   ); 
}