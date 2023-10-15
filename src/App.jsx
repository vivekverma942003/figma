import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar';
import Content from './components/content';
import './App.css'
import Join from './components/join';
import Footer from './components/footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Join/>
    <Content/>
      <Footer/>
    </>
  )
}

export default App;
