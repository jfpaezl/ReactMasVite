import styled from 'styled-components'
import { useState } from 'react'

//para inicializar un estado con una prop la buena practica es nombrarla con initial al inicio
export function Twittercard({userName, name, initialIsFollowing}){//usar simpre las props entre {} para que lo lea como java script
    //crear hoocks 
    //useState devuelve un arreglo con 2 posiciones el primero es para devolver el valor del estado y el segundo es para insertar una funcion que nos permite actualizar el estado
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    


    //colocar las funciones que van a servir en el componente
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const bottonClassname = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    //primero se busca el boton que nos va a cambiar el estado y se crea una funcion para saber que hace cuando se le da onclick
    const handleClick = () =>{
        //se llama la funcion que nos prmite actualizar el estado y se le da la vuelta al estado
        setIsFollowing(!isFollowing)
    }


    //realizar los elementos del componente
    return(
        <TwitterCardCss>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src="https://unavatar.io/reddit.com" 
                    alt="avatr" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={bottonClassname} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                    
                </button>
            </aside>
        </TwitterCardCss>
    )
}

//creae el css con styled-components

const TwitterCardCss = styled.article`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: .8rem;
    justify-content: space-between;

    .tw-followCard-header {
    display: flex;
    align-items: center;
    gap: 4px
    }

    .tw-followCard-info {
    display: flex;
    flex-direction: column;
    }

    .tw-followCard-infoUserName {
    opacity: .6;
    }

    .tw-followCard-avatar {
    width: 48px;
    height: 48px;
    border-radius: 1000px;
    }

    .tw-followCard-button {
    cursor: pointer;
    margin-left: 16px;
    border: 0;
    border-radius: 999px;
    padding: 6px 16px;
    font-weight: bold;
    border: 1px solid #000;
    transition: .3s ease background-color;
    }

    .tw-followCard-button:hover {
    opacity: .8;
    }

    .tw-followCard-text {
    display: block;
    }

    .tw-followCard-button.is-following {
    border: 1px solid #bbb;
    background: transparent;
    color: #fff;
    width: 140px;
    }

    .tw-followCard-button.is-following:hover {
    background-color: rgba(255, 0, 0, 0.178);
    color: red;
    border: 1px solid red;
    transition: .3s ease all;
    opacity: 1;
    }

    .tw-followCard-button.is-following:hover .tw-followCard-text {
    display: none;
    }

    .tw-followCard-button.is-following:hover .tw-followCard-stopFollow {
    display: block;
    }

    .tw-followCard-stopFollow {
    display: none;
    }
`