import React, { useContext } from 'react'
import { AppContext } from '../../config/context/AppContext'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout(props) {
    const {tema} = useContext(AppContext);
  
    return (
        <div className={`${tema} flex h-screen w-screen`}>
            <Sidebar/>
            <div className={`
                flex flex-col w-full  
                bg-gray-300 dark:bg-gray-800 
            `}>
                <Navbar />
                <hr/>
                <div className={`
                    flex flex-col mt-7
                    dark:text-gray-200 p-5
                `}>
                    {props.children}
                </div>
            </div>
        </div>
    )
       
}