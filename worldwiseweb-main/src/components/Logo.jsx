import styles from "./Logo.module.css";

function Logo() {
  return <a href="/"><img src="/logo.png" alt="WorldWise logo" className={styles.logo} /></a>;
}

export default Logo;
