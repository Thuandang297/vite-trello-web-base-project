import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import App from '~/App'
import theme from '~/theme'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
//Cấu hình react router dom với BrowserRouter

const persistor = persistStore(store)

import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <App />
          <ToastContainer />
        </CssVarsProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>

)
