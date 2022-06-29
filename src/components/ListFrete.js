import { useContext, useEffect } from 'react'
import { AuthContext } from '../config/context/AuthContext'
import Link from 'next/link';


export default function ListFrete() {
    const { allFretes,setFreteState } = useContext( AuthContext );

        
    return(
        <div>            
            <div className='p-2'>
                {allFretes && allFretes.length == 0 ?<>
                    <h3 className='mb-5'>Não exite corridas em andamento!</h3>
                    <Link href="/"><a>
                        <button className="bg-slate-800 hover:bg-slate-500 w-full
                            text-white px-4 py-4 mt-7" >Adicionar frete
                        </button>
                    </a></Link> 
                    </>
                    :
                    <h4>Corridas em andamentos:</h4>      
                }
            {allFretes && allFretes.map((f,key)=>(<>
                {f.status != 'finalizado' &&
                <div key={key} className="px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-5">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                            {new Date(f.created.seconds * 1000).toLocaleDateString("pt-br")}{' - '} 
                            {new Date(f.created.seconds * 1000).toLocaleTimeString("pt-br")}     
                        </span> 
                        <p className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-orange-400 rounded cursor-pointer">{f.status}</p>
                    </div> 
                    <div className="mt-2">
                        {f.rota.length == 2 &&
                        <p className="text-2xl font-bold text-gray-700 dark:text-white">Simples coleta entrega</p>}
                        {f.rota.length > 2 &&
                        <p className="text-2xl font-bold text-gray-700 dark:text-white">Rota com {f.rota.length} pontos</p>} 
                        <hr/>
                        <p className='text-1xl text-gray-700 dark:text-white mt-3 mb-3'>Valor - R$
                            <span className='text-green-500'>  {f.price.toFixed(2)}</span> -  {f.formPgt}</p>
                        <hr/> 
                        {f.rota.map((r,i)=>(
                            <div key={i}>
                                <p className="mt-2 text-gray-500 dark:text-gray-800">
                                 <span className='text-gray-800 dark:text-gray-400'>Ponto: {i+1}</span> - {r.location} <br/>
                                 <span className='text-gray-800 dark:text-gray-400'>Complemento: </span>{r.number}  <br/>
                                <span className='text-gray-800 dark:text-gray-400'>Instrução: </span>{r.instrucao}</p>
                            </div>
                        ))}
                                                
                        <p className="mt-2 text-gray-500 dark:text-gray-800">
                            <span className='text-gray-800 dark:text-gray-400'>Cliente:</span> {f.cliente} <br/>
                            <span className='text-gray-800 dark:text-gray-400'>Contato:</span> {f.contato} </p> 
                    </div> 
                    <div className="flex items-center justify-between mt-4 mb-3">
                        <p  className="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</p> 
                        <div className="flex items-center">                
                        <p className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Procurando entregador...</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='text-end'>
                        {f.status=='cancelado' &&
                        <button 
                            onClick={()=>setFreteState(f.id,'notificando')} 
                            className="bg-orange-400 hover:bg-orange-800
                            text-white px-3 py-3 mt-2">
                                Reativar frete
                        </button> } 
                        {f.status=='notificando' &&
                        <button 
                            onClick={()=>setFreteState(f.id,'cancelado')} 
                            className="bg-red-400 hover:bg-red-800
                            text-white px-3 py-3 mt-2">
                                Cancelar frete
                        </button>                    
                        }
                        {f.status == 'notificando' &&
                        <button 
                            onClick={()=>setFreteState(f.id,'aceito')}  
                            className="bg-green-400 hover:bg-green-800
                            text-white px-3 py-3 mt-2 ml-2">
                                Aceitar frete
                        </button>  }
                        {f.status == 'aceito' &&
                        <button 
                            onClick={()=>setFreteState(f.id,'iniciado')}  
                            className="bg-green-400 hover:bg-green-800
                            text-white px-3 py-3 mt-2 ml-2">
                                Iniciar frete
                        </button>  }
                        {f.status == 'iniciado' &&
                        <button 
                            onClick={()=>setFreteState(f.id,'finalizado')}  
                            className="bg-green-400 hover:bg-green-800
                            text-white px-3 py-3 mt-2 ml-2">
                                Finalizar frete
                        </button>  }
                       </div> 
                </div>}</>
            ))}
            </div>           
        </div>
    )
}