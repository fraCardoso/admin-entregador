import { useContext } from 'react'
import { IconeCasa, IconeSair } from "../icons";
import Logo from "./Logo";
import MenuItem from './MenuItem'
import { AuthContext } from '../../config/context/AuthContext'

export default function Sidebar() {
    const {user,logout} = useContext(AuthContext);

    return(
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col items-center justify-center              
                h-20 w-20 bg-green-500 
            `}>
                <Logo />               
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                
            </ul>
            <ul>
                <MenuItem
                    texto="Sair" icone={IconeSair} 
                   onClick={()=> logout()} 
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}