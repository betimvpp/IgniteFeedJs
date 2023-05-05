import styles from './Header.module.css';
import IgniteLogo from '../assets/logo.svg';
export function Header () {
  return(
    <div className={styles.header}>
      <img src={IgniteLogo}/>
      <h1>Ignite Feed</h1>
    </div>
  )
}