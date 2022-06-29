import { useState } from 'react';
import Link from 'next/link'

export default function AvatarUsuario() {
    const [usuario, setUsuario] = useState('');
    return (
        <Link href="/profile">
            <img
                src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                alt="Avatar do Usuário"
               className='h-10 w-10 rounded-full cursor-pointer' 
            />
        </Link>
    )
}