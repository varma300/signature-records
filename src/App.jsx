import { useState } from 'react'
import Header from './Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Home />
     <Footer />
    </>
  )
}

export default App
