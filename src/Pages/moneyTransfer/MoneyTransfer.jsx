import React,{useState} from 'react'
import PooyaPass from '../../Components/pooyaPass/PooyaPass'


export default function MoneyTransfer() {
  const [passAppear, setPassAppear] = useState(false)
  const passHandler = () => {
    setPassAppear(!passAppear )
  }
  const oncloseHandler = () => {
    setPassAppear(false)
  }
  console.log(passAppear)
  return (
    <>
     
      <button className='text-white' onClick={passHandler}>click</button>

      {passAppear && <PooyaPass onClose={oncloseHandler}/>}
      
    </>
  )
}
