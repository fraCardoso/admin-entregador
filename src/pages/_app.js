import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProvider } from '../config/context/AppContext'
import {AuthProvider} from '../config/context/AuthContext'

function MyApp({ Component, pageProps }) {
  return ( 
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>  
    </AuthProvider>    
)
}

export default MyApp