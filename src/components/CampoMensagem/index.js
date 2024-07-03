import styles from './CampoMensagem.module.css';

function CampoMensagem(props){
    return(
        <div className={styles.CampoMensagem}>
            <label>{props.label}</label>
            <textarea onChange={evento => props.aoAlterado(evento.target.value)} value= {props.valor} placeholder={props.placeholder} required={props.obrigatorio}></textarea>
        </div>
    )
}

export default CampoMensagem;