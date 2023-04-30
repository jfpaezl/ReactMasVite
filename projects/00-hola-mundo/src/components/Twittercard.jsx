import styled from 'styled-components'

export function Twittercard(){
    return(
        <TwitterCardCss>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src="https://unavatar.io/reddit.com" 
                    alt="avatr" />
                <div className='tw-followCard-info'>
                    <strong>Oscar Verela</strong>
                    <span className='tw-followCard-infoUserName'>@orcarkriblin</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
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