import { Link } from "react-router-dom";
import styles from './Header.module.css'
import Menu from "components/Menu";
import logo from '../../assets/img/logo.png'

function Header(){
    return(
        <header className={styles.Header}>
            <section className={styles.HeaderContent} >
                <Link to="/">
                    <img src={logo} alt="Logo da AluraFlix" />
                </Link>

                <nav>
                    <Menu url = "/">
                        Home
                    </Menu>

                    <Menu url = "/novovideo">
                        Novo Vídeo
                    </Menu>
                </nav>
            </section>
        </header>
    )
}

export default Header;
