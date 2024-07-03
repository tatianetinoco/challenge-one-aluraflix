import styles from './Home.module.css'
import Banner from "components/Banner";
import Card from "components/Card";
import dados from 'data/db.json';

function Home(){
    return (
        <>
            <Banner />
            <section className={styles.container}>
                {dados.cards.map(category => (
                    <div key={category.categoria}>
                        <h2 style={{ 
                            color: 'white', 
                            backgroundColor: category.cor,
                            padding: '0.5rem',
                            width: '432px',
                            height: '70px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '15px',
                            marginBottom: '40px'
                         }}
                        >
                            {category.categoria}</h2>
                        <div className={styles.cards}>
                            {category.videos.map(video => (
                                <Card {...video} key={video.id} cor={category.cor}/>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Home;
