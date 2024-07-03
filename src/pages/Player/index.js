import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import dados from 'data/db.json';

function Player () {
    const parametros = useParams();
    const videoId = Number(parametros.id);
    let videoPlay;

    dados.cards.some(card => {
        videoPlay = card.videos.find(video => video.id === videoId);
        return videoPlay; 
    });

    console.log(videoPlay);

    const getEmbedUrl = (url) => {
        const videoId = url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <>
            <h2 className={styles.titulo}>{videoPlay.titulo}</h2>
            <div className={styles.playerSection}>
                {videoPlay ? (
                    <div>
                        <iframe className={styles.iframeVideo}
                            width="900px" 
                            height="600px" 
                            src={getEmbedUrl(videoPlay.url)}
                            title={videoPlay.titulo}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </iframe>
                    </div>
                ) : (
                    <p>Video not found</p>
                )}
            </div>
            <p className={styles.descricao}>{videoPlay.descricao}</p>
        </>
    );
}

export default Player;
