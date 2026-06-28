import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoMark}>CA</div>
          <span className={styles.logoText}>Code Architecture</span>
        </div>

        <nav className={styles.navigation}>
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">Solutions</a>
          <a href="/">Documentation</a>
          <a href="/">Pricing</a>
        </nav>

        <div className={styles.actions}>
          <button className={styles.login}>Sign In</button>
          <button className={styles.primary}>Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;