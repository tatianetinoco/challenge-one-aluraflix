import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/img/logo.png'

function Footer(){
    return(
        <>
           <footer className={styles.Footer}>
                <section className={styles.FooterContent}>
                    <Link to="/">
                        <img src={logo} alt="Logo AluraFlix" />
                    </Link>
                    <h3>Desenvolvido Por Tatiane Tinoco</h3>
                    <div className={styles.footerMedias} >
                        <Link 
                        to="https://www.linkedin.com/in/tatianetinoco/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.footerMediaLink} 
                        >
                        LinkedIn
                        </Link>
                        
                        <Link 
                        to="https://github.com/tatianetinoco" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.footerMediaLink} 
                        >
                        Github
                        </Link>
                    </div>
                    <small>Challenge ONE AluraFlix - 2024</small>
                </section>
           </footer>
        </>
      
    )
}

export default Footer;
