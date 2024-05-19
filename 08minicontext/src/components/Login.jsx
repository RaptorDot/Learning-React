import React from 'react'
import { useState , useContext } from 'react'
import userContext from '../context/userContext'

function Login() {
        const [password, setPassword] = useState(initialState)

    const HandleSubmit = ()=>{}
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username'/>
        <input type="text" placeholder='password' />
        <button onClick={HandleSubmit}>Submit</button>

    </div>
  )
}

export default Login