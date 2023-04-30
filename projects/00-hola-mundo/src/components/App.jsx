import { Twittercard } from './Twittercard'
import './../assets/index.css'

export function App (){
    const users = [
        {
            id: 1,
            name: "Miguel",
            userName: 'migue',
            isFollowing: true
        },
        {
            id: 2,
            name: "Andres Peralta",
            userName: "anper",
            isFollowing: true
        }

    ]


    return(
    <div className='App'>
        {/*Forma simple de crear componentes con props*/}
        <Twittercard 
            name="Juan Felipe Paez"
            userName="juanfe"
        />

        {/*Forma de crear los componentes con objetos*/}
        {
            users.map(user =>{
                const {name, userName, isFollowing, id} = user
                return(
                    //cuando se crea un componente de esta forma toca añadirle un identificador
                    <Twittercard key={id} name={name} userName={userName} initialIsFollowing={isFollowing}/>
                )
            })
        }

    </div>
    )
}