


import React from 'react'
import '../Components/Login/login.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [buttonLoad, setButtonLoad] = useState(false)
    const navigate = useNavigate()
    const loginInput = useRef()


    useEffect(() => {
       document.body.classList.add('login-background')
       document.body.style.backgroundColor = 'white'

       return () => {
        document.body.classList.remove('login-background')
        document.body.style.backgroundColor = ''
       }
    }, [])


    useEffect(() => {
      if(loginInput.current) {
        loginInput.current.focus()
      }
    }, [])





    const UserLogin = async (e) => {
        e.preventDefault()
        setButtonLoad(true) // Disable the button right at the start
        try{
            const response = await fetch('http://localhost:9007/login', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                credentials: "include",
                body: JSON.stringify({ name, password, email})
            });
                if(response.ok) {
                  alert('User credentials have been accepted')
                  console.log('user has successfully log in')
                  navigate('/home')
                } else {
                  const data = await response.json()
                  alert(data.message || 'Login failed')
                }
              }catch(error) {
                  console.error(`error has occurred: ${error}`)
            } finally {
                setButtonLoad(false)
            }
    }




  return (
    <div className='login-container' >

      

       <div className='login-wrapper'>
         <div><h3>ShoeStore Login </h3></div>

         <div>
        <form onSubmit={UserLogin}>
             <div><input onChange={(e) => setName(e.target.value)} ref={loginInput} type='text' value={name} placeholder='Username' required></input></div>
             <div><input onChange={(e) => setPassword(e.target.value)} type='password' value={password} placeholder='Password' required></input></div>
             <div><input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='Email' required></input></div>
               <input className='login-wrapper-input'  disabled={buttonLoad} value={buttonLoad ? 'Submitting' : 'Login'}  type='submit' />
               <div className='login-sign-up'>Do Not Have an Account? <Link to="/" className='login-link-signup'><div>Register</div></Link></div>
            </form>
        </div>


       </div>


    </div>
    
  )
}





export default Login
