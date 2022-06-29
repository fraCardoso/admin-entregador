import {useState ,useContext} from 'react'
import Link from 'next/link'
import { AuthContext } from '../config/context/AuthContext'

export default function Autentication() {
    const {signin} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img 
                    src="https://source.unsplash.com/random"
                    alt="Imagem da Tela de Autenticação"
                    className="h-screen w-full object-cover" />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className="text-3xl font-bold mb-5">
                    Entre com a Sua Conta
                </h1>
                <label className="block">
                    <span className="text-gray-700">Email</span>
                    <input
                    onChange={(e)=> setEmail(e.target.value)} 
                    className="form-input mt-1 block w-full px-4 py-4 border-solid border-2 border-gray-300" 
                    placeholder="Informe seu melhor email"/>
                </label>
                <label className="block mt-2">
                    <span className="text-gray-700">Password</span>
                    <input
                    onChange={(e)=> setPassword(e.target.value)}
                    type="password" 
                    className="form-input mt-1 block w-full px-4 py-4 border-solid border-2 border-gray-300" 
                    placeholder="Informe sua senha"/>
                </label>
                <button onClick={()=> signin(email,password)} className="
                    w-full bg-green-500 hover:bg-green-800
                    text-white px-4 py-4 mt-6
                ">
                    Entrar
                </button>

                <Link href="/cadastro">
                <p className="mt-8">               
                    Novo por aqui?                    
                    <a className="
                        text-blue-500 hover:text-blue-700 font-semibold
                        cursor-pointer
                    "> Crie um Conta</a>
                </p>
                </Link>
            </div>
        </div>
    )
}