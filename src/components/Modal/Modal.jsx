import './Modal.css'
import { GrFormClose } from 'react-icons/gr'
import { useState } from 'react'

import Before from './Before'
import After from './After'
import Loader from './Loader'
function Modal( {setModal} ) {
  const [afterBefore , setAfterBefore] = useState(false)
  return (
    <div className="modal-backdrop">
      <div className='modal'>
      <GrFormClose className='btn-close' onClick={()=>{setModal(false)}}/>
      { !afterBefore && <Before setAfterBefore={setAfterBefore}/>}
      { afterBefore && <After setModal={setModal}/>}
       <Loader/>
    </div>
    </div>
  )
}

export default Modal