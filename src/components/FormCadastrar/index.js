import { useState } from 'react'
import CampoTexto from 'components/CampoTexto';
import styles from './FormCadastrar.module.css';
import ListaSuspensa from 'components/ListaSuspensa';
import CampoMensagem from 'components/CampoMensagem';
import ButtonForm from 'components/ButtonForm';


function FormCadastrar(props){

    const categorias = [
        'Selecione uma categoria',
        'Front End',
        'Back End',
        'Mobile'
    ]

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState('')
    const [video, setVideo] = useState('')
    const [descricao, setDescricao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoVideoCadastrado({
            titulo, 
            categoria, 
            imagem, 
            video, 
            descricao
        })

    }

    return (
        <section className={styles.containerForm}>
            <div className={styles.headerForm} >
                <h2>Novo Vídeo</h2>
                <p>Complete o Formulário para criar um novo Card de Vídeo</p>
            </div>
            <h2 className={styles.tituloForm}>Criar Card</h2>

            <form onSubmit={aoSalvar}>
                <CampoTexto 
                    label= "Título"       
                    placeholder="Digite o Título"           
                    obrigatorio={true} 
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />

                <ListaSuspensa 
                    label= "Categoria" itens={categorias}                      
                    obrigatorio={true}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />

                <CampoTexto 
                    label= "Imagem"       
                    placeholder="Digite o Link da Imagem"   
                    obrigatorio={true}
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <CampoTexto 
                    label= "Vídeo"        
                    placeholder="Digite o Link do Vídeo"    
                    obrigatorio={true}
                    valor={video}
                    aoAlterado={valor => setVideo(valor)}
                /> 

                <CampoMensagem 
                    label= "Descrição" 
                    placeholder="sobre o que é esse vídeo?" 
                    obrigatorio={true} 
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />

                <div className={styles.btn}>
                    <ButtonForm type="submit">Cadastrar</ButtonForm>
                    <ButtonForm type="reset">Limpar</ButtonForm>
                </div>
            </form>
        </section>
    )
}

export default FormCadastrar;
