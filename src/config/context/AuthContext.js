import React, { useEffect, useState } from "react";
import { app } from '../firebase'
import { useRouter } from 'next/router'; 
import { getAuth, onAuthStateChanged,signOut} from "firebase/auth";

const auth = getAuth();

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const router  = useRouter();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)
  const [allFretes, setAllFretes] = useState([]);
  
  useEffect(()=> {
    getUser(); 
    if(user){
      getAllFretes(user.uid);
     }  
    return; 
  },[user])
 

  const signin = async(email,password) => {  
    try {
        await app.auth().signInWithEmailAndPassword(email,password).then(()=>{ 
            getUser();                  
            router.push('/');
            setLoadingForm(false);  
        })
    } catch (error) {     
        console.log(error.message);            
    }
  }

  //vereficar usuer logado 
  async function getUser() {      
    return await  onAuthStateChanged(auth, (usuario) => {
      if (usuario) {       
        setUser(usuario); 
        setLoading(false);    
        router.push("/");  
      }else{
        router.push("/autentication");
      }
    })
  }

  async function logout() {
    return await signOut(auth).then(()=>{
      setUser({});
      setLoading(true);
    })
  }


  const getAllFretes = async (id) => {                   
    await app.auth().onAuthStateChanged(user=>{
      if(user){
        app.firestore().collection('fretes')//.where('postedBy', '==', user.uid)//.orderBy('created', 'desc')
          .onSnapshot((snap) => {
              const docs = snap.docs.map(doc=>({
                  id: doc.id,
                  ...doc.data()
              }));              
              setAllFretes(docs)         
        })  
      }
    })        
  }

  const setFreteState = async (id,param) => {
    return await  app.firestore().collection('fretes').doc(id).set({
      status: param
    },{merge:true})
  }

  return (
    <AuthContext.Provider value={{           
      signin,
      user,
      loading,
      logout,
      getAllFretes,
      allFretes,
      setFreteState     
    }}>{children}</AuthContext.Provider>
  );
}