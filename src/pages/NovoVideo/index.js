import styles from './NovoVideo.module.css'
import FormCadastrar from 'components/FormCadastrar';
import { useState } from 'react';

function NovoVideo(){

    const [videos, setVideos] = useState([]);

    const aoNovoVideoCadastrado = (novoVideo) => {
        console.log(novoVideo);
        setVideos([...videos, novoVideo])
    }

    return(
        <main className={styles.main}>
            <FormCadastrar aoVideoCadastrado = {novoVideo => aoNovoVideoCadastrado(novoVideo)}/>
        </main> 
    )
}

export default NovoVideo;
