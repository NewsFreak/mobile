/* React */
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/es/integration/react"
import configStore from "rdx/store"
import App from "./App"
import register from "./registerServiceWorker"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { MuiThemeProvider as V0MuiThemeProvider } from "material-ui"
import theme, { themeV0 } from "./theme"
import "./index.css"
const { persistor, store } = configStore()

// redux-persist initialization
const Persistor = () => (
  <PersistGate loading={null} persistor={persistor}>
    <MuiThemeProvider theme={theme}>
      <V0MuiThemeProvider muiTheme={themeV0}>
        <App />
      </V0MuiThemeProvider>
    </MuiThemeProvider>
  </PersistGate>
)

// Bootstrapper
const Bootstrap = () => (
  <Provider store={store}>
    <Persistor />
  </Provider>
)

ReactDOM.render(<Bootstrap />, document.getElementById("root"))

register()
