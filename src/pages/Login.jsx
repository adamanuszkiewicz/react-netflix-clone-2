import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [rememberLogin, SetRememberLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { user, logIn } = UserAuth()
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await logIn(email, password)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/80a8277e-14eb-4192-83f7-45c27cd0652b/US-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_99b9a7c9-7791-4a48-b335-09e8ee246500_small.jpg"
          alt="///"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />
  
        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/40 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-nsans-bold">Login</h1>
  
              <form 
                onSubmit={handleFormSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
  
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
  
                <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold">
                  Login
                </button>
  
                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input  
                      type="checkbox" 
                      className="mr-2"
                      checked={rememberLogin} 
                      onChange={(e) => SetRememberLogin(!rememberLogin)} 
                    />
                    Remember me
                  </p>
                  <p className="">Need Help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">
                    New to Netflix?
                  </span>
                  <Link to="/Sign Up">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login