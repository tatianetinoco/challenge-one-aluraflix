import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu({ url, children }){
    const localizacao = useLocation();
    return (
        <Link to={url} className = {`
        ${styles.Link} 
        ${localizacao.pathname === url ? styles.btnActive : ""}`} >
            {children}  
        </Link>
    )
}

export default Menu;
