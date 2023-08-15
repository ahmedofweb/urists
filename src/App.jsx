import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import Main from './components/Main/Main'

function App() {
  const [modal, setModal] = useState(false)

  return (
    <div className="App">
      {!modal && <Header setModal={setModal}/>}
      {!modal && <Main setModal={setModal}/>}
      {modal && <Modal setModal={setModal}/>}
    </div>
  )
}

export default App
