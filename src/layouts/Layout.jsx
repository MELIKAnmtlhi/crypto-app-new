import styles from "./Layout.module.css";

function Layout({children}) {
  return <>
    <header className={styles.header}>
        <h1>Crypto App</h1>
        {/* <p> <a href="http://botostart.ir">Botostart</a> | React.js full course</p> */}
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed by Melika with 💓</p>
    </footer>
  </>
}

export default Layout;