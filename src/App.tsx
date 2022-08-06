import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { AppContainer } from './global/GlobalStyles'

export default function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  )
}
