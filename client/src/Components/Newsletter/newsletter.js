



import React, { useEffect, useState } from 'react'
import '../Newsletter/newsletter.css'

const Newsletter = () => {
     const [newsLetterEmail, setNewsLetterEmail] = useState('')
     const [inputLoad, setInputLoad] = useState(false)


     useEffect(() => {
        setNewsLetterEmail('')
     }, [])
   


     const UserNewsletter = async (e) => {
                e.preventDefault()
                setInputLoad(true)
                try{
                    const response = await fetch('http://localhost:9005/subscribe', {
                        method: "POST",
                        headers:{'Content-Type': 'application/json'},
                        credentials: 'include',
                        body: JSON.stringify( {newsLetterEmail })
                    });
                        if(response.status === 200) {
                            alert('your email has been accepted')
                            console.log(response.message)
                            setNewsLetterEmail('')
                        } else {
                            const data = await response.json()
                            alert(data.message)
                            console.log(data.message)

                        }
                    }catch(error) {
                            console.error(`email error: ${error}`)
                    } finally {
                        setInputLoad(false)
                    }
     }


     
    
  return (
   <>


        <div className='newsletter-container'>

            <div className='newsletter-wrapper'>
                <div><h3>Get Exclusive Offers On Your Email</h3></div>
                <div><p>Subscribe to our newletter and stay updated with the latest shoes</p></div>

            </div>

           <div className='newsletter-wrapper-two'>  
            <form onSubmit={UserNewsletter}>
                <input onChange={(e) => setNewsLetterEmail(e.target.value)} type="email"  placeholder='enter-email'></input>
                <input type="submit" className='subscribe' disabled={inputLoad} value={inputLoad ? 'Subscribe' : 'Email Subscribe'} ></input>
            </form>
           </div>


        </div>


   </>




  )
}

export default Newsletter
