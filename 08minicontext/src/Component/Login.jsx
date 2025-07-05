import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext' 

function Login() {
    const {setUser} = useContext(UserContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div>
        <h2>Login</h2>
        <p>Please enter your credentials to login.</p>
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => setUser({username, password})}>Login</button>
    </div>
  )
}

export default Login