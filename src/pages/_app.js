import { NotifyProvider } from "../data/context/NotifyContext";
import { AuthProvider } from "../data/context/AuthContext";
import { AppProvider } from "../data/context/AppContext";

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/sass/index.sass'

function App({ Component, pageProps }) {
  return (
    <NotifyProvider>
      <AuthProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </AuthProvider>
    </NotifyProvider>
  )
}

export default App
