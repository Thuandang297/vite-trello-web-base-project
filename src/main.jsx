import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import App from '~/App'
import theme from '~/theme'
import { injectStore } from '~/utils/authorizeAxios'
import { store } from './redux/store'
import { GlobalStyles } from '@mui/material'
//Cấu hình react router dom với BrowserRouter

const persistor = persistStore(store)

//Kĩ thuật Inject store là kĩ thuật dùng để import store
injectStore(store)

import { ConfirmProvider } from 'material-ui-confirm'
import { BrowserRouter } from 'react-router-dom'
import LoadingOverlay from './components/Atom/LoadingOverLay'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <GlobalStyles styles={{ a: { textDecoration: 'none' } }} />
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <ConfirmProvider>
            <App />
            {/* <LoadingOverlay show={false} /> */}
          </ConfirmProvider>
          <ToastContainer />
        </CssVarsProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>

)
