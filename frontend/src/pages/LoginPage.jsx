import axios from "axios";
import React, { useState } from "react"
import { Link, Navigate, useSearchParams } from "react-router-dom"
import { UserContext } from "../UserContext";
import { useContext } from "react";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser} = useContext(UserContext);

  async function handleLoginSubmit( ev ) {
    ev.preventDefault();
    try {
      const {data} =await axios.post('/login', {
        email,
        password,
      });
      setUser(data);
      alert("Login Successful");
      setRedirect(true);
    } catch (e) {
      alert("Login failed");
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  
  return (
    <div className="flex justify-around mt-4 grow item-center">
      <div className="mb-64">
        <h1 className="mb-4 text-4xl text-center">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input type="email" placeholder="your@gmail.com" value={email} onChange={ev=> setEmail(ev.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} />
          <button className="primary">Login</button>
            <div className="py-2 text-center text-gray-500">
                Don't have an account yet?  <Link to="/register" className="text-black underline">Register now</Link>      
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
