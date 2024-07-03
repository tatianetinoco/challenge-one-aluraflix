import styles from './Card.module.css';
import iconeDeletar from '../../assets/img/deletar.png';
import iconeEditar from '../../assets/img/editar.png';
import { Link } from 'react-router-dom';

function Card( {id, img, titulo, url, categoria, cor}){
    return(
        <div className={styles.content} 
        style={{ 
            border: `2px solid ${cor}`,
            boxShadow: `0 0 15px ${cor}`,
            WebkitBoxShadow: `0 0 15px ${cor}`,
            MozBoxShadow: `0 0 15px ${cor}`
        }}
            >
             <Link className={styles.link} to={`/${id}`}>
                <img src={img} alt={titulo} className={styles.img}/>
                <h3>{titulo}</h3>
            </Link>   
            <div className={styles.cardFooter} style={{ borderTop: `2px solid ${cor}`, boxShadow: `0 0 15px ${cor}` }}>
                <div>
                    <img src={iconeDeletar} alt="Deletar Card" title="Deletar Card" className={styles.deletar}/>
                    <p>Deletar</p>
                </div>
                <div>
                    <img src={iconeEditar} alt="Editar Card" title="Editar Card" className={styles.editar}/>
                    <p>Editar</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
