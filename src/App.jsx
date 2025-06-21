import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

// import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // const Title = import.meta.env.SITE_NAME;
  const Title = "Alpha";

  return (
    <> 
    <Header title={Title}/>
    <Home/>
    <Footer/>

    </>
  )
}

export default App
