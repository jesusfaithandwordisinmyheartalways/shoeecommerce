



import React, { useRef } from 'react'
import '../Components/Signup/signup.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [buttonLoad, setButtonLoad] = useState(false)
    const navigate = useNavigate()
    const userInput = useRef()

    useEffect(() => {
            document.body.classList.add('landpage-background');
            document.body.style.backgroundColor = 'black';

        return () => {
                document.body.classList.remove('landpage-background')
                document.body.style.backgroundColor = '';
        }
    }, []);


    useEffect(() => {
        if(userInput.current) {
            userInput.current.focus()
        }
    }, [])



    const UserSignUp = async (e) => {
            e.preventDefault()
            setButtonLoad(true) // Disable the button right at the start
            try {
                const response = await fetch('http://localhost:9007/signup', {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    credentials: "include",
                    body: JSON.stringify({ name, password , email })
                });
                    if(response.status === 200) {
                        alert('User credentials have been accepted')
                        console.log(response.message)
                        navigate('/login')
                    } else {
                        const data = await response.json();
                        alert(data.message);
                    }
                  }catch(error) {
                        alert(error.message || 'signup error')
                        console.error(`system error: ${error}`)
                  } finally {
                    setButtonLoad(false)    // Re-enable the button regardless of success or failure
                  }
          }


  return (

    <div className='container' >

      

       <div className='wrapper'>
         <div><h3>ShoeStore Register </h3></div>

         <div>
        <form onSubmit={UserSignUp}>
             <div><input onChange={(e) => setName(e.target.value)} ref={userInput} type='text' value={name} placeholder='Username' required></input></div>
             <div><input onChange={(e) => setPassword(e.target.value)} type='password' value={password} placeholder='Password' required></input></div>
             <div><input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='Email' required></input></div>
               <input className='wrapper-input'  disabled={buttonLoad} value={buttonLoad ? 'Submitting' : 'Register'}  type='submit' />
               <div className='sign-up'>Already Have an Account? <Link to="/login" className='link-signup'><div>Login</div></Link></div>
            </form>
        </div>


       </div>


    </div>
    

    
  )
}




export default SignUp
