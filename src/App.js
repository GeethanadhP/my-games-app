import React, { Component } from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import store from './state/store'

import Home from './ui/screens/Home'

class App extends Component {
  render() {
    return <Home />
  }
}

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </StoreProvider>
  )
}
