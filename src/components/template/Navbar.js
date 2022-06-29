import AvatarUsuario from './AvatarUsuario'
import BotaoAlternarTema  from './BotaoAlternarTema'

export default function Navbar() {
    return(
        <nav className="px-2 sm:px-4 py-2.5 dark:bg-gray-800 h-20">
            <div className="container flex flex-wrap justify-between items-center mt-2 mx-auto">
                <h4 className='dark:text-gray-200'>Entregador-express</h4> 
                <div className={`flex flex-grow justify-end items-center`}>
                    <BotaoAlternarTema />
                    <AvatarUsuario /> 
                </div>
            </div>
        </nav>
    )
}