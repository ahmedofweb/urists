import './Modal.css'
import { useState } from 'react'
import Loader from './Loader'

function Before( {setAfterBefore} ) {
  const [loader , setLoader] = useState(false)

  return (
    <div className='before'>
        <img className='modal-img' src="./modal-img.png" alt="" />
        <div className="info">
            <h2 className='title'>Бесплатная юридическая <br /> консультация по телефону</h2>
            <div className="online-users">
              <img src="./online-users.svg" alt="" />
              <p>64 юриста сейчас онлайн</p>
            </div>
            {loader && <Loader/>}
            <form className="form" onSubmit={() => {
                setLoader(true)
                setTimeout(() => {
                  setLoader(false)
                  setAfterBefore(true)
                }, 5000);
            }}>
                <div className="user">
                    <p>Номер телефона</p>
                   <input type="number" className="user-tell" required/>
                </div>
                <div className="user">
                    <p>Ваше имя</p>
                   <input type="text" className="user-name" required/>
                </div>
                <button className='submit'>Отправить</button>
            </form>
            <p className='info-text'>Отправляя вопрос, вы соглашаетесь с условиями Пользовательского соглашения</p>
            <img className='modal-mobile-img' src="./modal-img.png" alt="" />
        </div>
    </div>
  )
}

export default Before