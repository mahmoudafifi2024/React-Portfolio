import Header from './Components/1-Header/Header'
import Hero from './Components/2-Hero/Hero'
import MainContent from './Components/3-MainContent/MainContent'
import Contact from './Components/4-Contact/Contact'
import Footer from './Components/5-Footer/Footer'
import './index.css'
function App() {


  return (
    <div className='container'>
    <Header />
    <Hero></Hero>
    <div className='divider'></div>
    <MainContent/>
    <div className='divider'></div>
    <Contact/>
    <div className='divider'></div>
    <Footer/>
    </div>
  )
}

export default App
