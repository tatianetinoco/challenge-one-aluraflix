import styles from './CampoTexto.module.css';

function CampoTexto(props){

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return(
        <div className={styles.campoTexto}>
            <label>{props.label}</label>
            <input 
            value = {props.valor}
            onChange={aoDigitado}
            placeholder={props.placeholder} 
            required={props.obrigatorio}

            />
        </div>
    )
}

export default CampoTexto;
