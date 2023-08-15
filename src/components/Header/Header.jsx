import './Header.css'

import { BsQuestionCircle } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'

function Header( {setModal} ) {
  return (
    <div className='header'>
        <img className='logo' src="./logo.svg" alt="" width={211} height={38}/>
        <div className='device'>
        <div className="input">
            <input type="text" placeholder='Я хочу найти...'/>
            <img src="./search.svg" alt="" width={24} height={24}/>
        </div>
        <button className='btn header-btn' onClick={()=> {
            setModal(true)
        }}><span><BsQuestionCircle/></span> Задать вопрос</button>
        <a className="tell" href="tel:+88003029270">
            <h2 className='tell-title'>8 800 302-92-70</h2>
            <p>Бесплатный звонок юристу 24/7</p>
        </a>
        </div>
        <FiSearch className='mobile-search'/>

    </div>
  )
}

export default Header