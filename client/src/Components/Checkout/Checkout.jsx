



import React, { useEffect, useState } from 'react'
import '../Checkout/checkout.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useRef } from 'react'


const Checkout = () => {
        const [sessionId, setSessionId] = useState('')
        const [cartId, setCartId] = useState('')
        const [message, setMessage] = useState('')
        const [messageType, setMessageType] = useState('')
        const navigate = useNavigate()
        const sessionInput = useRef()


        useEffect(() => {
                if(sessionInput.current) {
                    sessionInput.current.focus()
                }

        }, [])


            const UserCheckout = async (e) => {
                 e.preventDefault()

                try {
                    const response = await fetch('http:localhost:9007/checkout', {
                        method: "POST",
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ sessionId, cartId })
                    });
                        const data = await response.json()
                        if(response.ok) {
                            setMessage('checkout has been processed')
                            setMessageType('success')
                            navigate('/home')
                        } else {
                            setMessage(data.message || 'Something went wrong!')
                            setMessageType('error')
                        }
                }catch(error) {
                    setMessage('An error occurred. Please try again later.');
                    setMessageType('error');
                }
            }

  return (


   <>

                <Navbar />







 
            <div className='checkout-container'>
                <div className='checkout-wrapper'>
                    
                    <form onSubmit={UserCheckout}>
                        <div>
                          <label htmlFor='sessionId'>Session ID</label>
                          <input onChange={(e) => setSessionId(e.target.value)} type="text" ref={sessionInput} value={sessionId} placeholder='user session id' ></input>
                        </div>

                        <div>
                          <label htmlFor='cartId'>Cart ID</label>
                          <input onChange={(e) => setSessionId(e.target.value)} type="text" value={sessionId} placeholder='user session id' ></input>
                        </div>


                        <div>
                            <button type="submit">Submit</button>
                        </div>

                    </form>




                    {message && (
                        <div className={`message ${messageType === 'success' ? 'success' : 'error'}`}>

                            {message}

                        </div>
                    )}







                </div>

            </div>



   </>

  )
}

export default Checkout
