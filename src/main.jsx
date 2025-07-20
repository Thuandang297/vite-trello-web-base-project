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
import 'antd/dist/reset.css' // phiên bản mới AntD 5+ cần import reset

const persistor = persistStore(store)

//Kĩ thuật Inject store là kĩ thuật dùng để import store
injectStore(store)

import { ConfirmProvider } from 'material-ui-confirm'
import { BrowserRouter } from 'react-router-dom'
import { LoadingProvider } from './context/LoadingContext'
import PageLoadingSpinner from './components/Molecules/Loading/PageLoadingSpinner'
// import { LoadingProvider } from './context/LoadingContext'
// import LoadingSpinner from './components/Loading/LoadingSpinner'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <GlobalStyles styles={{ a: { textDecoration: 'none' } }} />
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <ConfirmProvider>
            {/* <LoadingProvider> */}
            {/* <PageLoadingSpinner caption={'Đang tải dữ liệu'} /> */}
            {/* </LoadingProvider> */}
            <App />
<<<<<<< HEAD
  {/* <LoadingOverlay show={false} /> */ }
=======

>>>>>>> feature/update_menu_bar
          </ConfirmProvider >
  <ToastContainer />
        </CssVarsProvider >
      </PersistGate >
    </Provider >
  </BrowserRouter >

)
