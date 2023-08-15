import React from 'react'

function After( {setModal} ) {
  return (
    <div className='after'>
        <img src="./galochka.svg" alt="" />
        <h2>Спасибо, ваша заявка принята</h2>
        <p>Мы свяжемся с вами в течение х минут</p>
        <button className='close-window btn' onClick={() => {
            setModal(false)
        }}>Закрыть окно</button>
    </div>
  )
}

export default After