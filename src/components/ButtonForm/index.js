import styles from './ButtonForm.module.css';

function ButtonForm({children}){
    return(
        <div>
            <button className={styles.btnForm}>{children}</button>
        </div>
    )
}

export default ButtonForm;

