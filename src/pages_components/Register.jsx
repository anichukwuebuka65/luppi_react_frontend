import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'

const Register = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [confirmPwd, setConfirmPwd] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [errMsg, setErrMsg] = useState()

    const nameRegex = /^[A-Za-z0-9]{3,15}$/;
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,20}$/;
    const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const register = (e) => {
        e.preventDefault()
        const validFirstname = nameRegex.test(firstname)
        const validLastname = nameRegex.test(lastname)
        const validPwd = pwdRegex.test(pwd)
        const validEmail = emailRegex.test(email)


        if(!validFirstname || !validLastname) 
            return setErrMsg("Names must be alphanumerical,more than 3 and less than 15 characters!")
        if(!validEmail) 
            return setErrMsg("invalid email!")
        if(!validPwd  ) 
            return setErrMsg("Password must contain atleast one uppercase letter, one lowercase letter, a number and one special character!")
        if(pwd !== confirmPwd) 
            return setErrMsg("Passwords do not match!")
        
        setFirstname("")
        setLastname("")
        setEmail("")
        setPwd("")
        setConfirmPwd("")
        setErrMsg("")

        console.log ("success")
    }

  return (
        <div className='h-screen'>
            <div  className='grid grid-cols-2 h-full items-center'>
                <div className=" justify-self-center">
                    <div className="mx-auto">
                        <h1 className="text-7xl font-extrabold mb-5 text-blue-600">Luppi.com</h1>
                        <i className="font-bold opacity-90 text-lg ml-6">Connect with your friends online</i>
                    </div>
                </div>
                <div  className="w-3/5 border-2 rounded border-slate-300 shadow-lg px-3 py-5">
                    <small className='text-red-500'>{errMsg}</small>
                <form onSubmit={register} className="flex flex-col  space-y-3  mt-2 ">
                    <input value={firstname} onChange={(e) => setFirstname( e.target.value) } className="  border-slate-300 pl-1.5 border-2 h-10 rounded focus:outline-none focus:border-slate-400" type="text" placeholder='Firstname'/>
                    <input value={lastname} onChange={(e) => setLastname( e.target.value) }  className="  border-slate-300 pl-1.5 border-2 h-10 rounded focus:outline-none focus:border-slate-400" type="text" placeholder="Lastname" />
                    <input value={email} onChange={(e) => setEmail( e.target.value) }  className="  border-slate-300 pl-1.5 border-2 h-10 rounded focus:outline-none focus:border-slate-400" type="email" placeholder="E-mail"/>
                    <input value={pwd} onChange={(e) => setPwd( e.target.value) }  className="  border-slate-300 pl-1.5 border-2 h-10 rounded focus:outline-none focus:border-slate-400" type="password" placeholder="Password"/>
                    <input value={confirmPwd} onChange={(e) => setConfirmPwd( e.target.value) }  className="  border-slate-300 pl-1.5 border-2 h-10 rounded focus:outline-none focus:border-slate-400" type="password" placeholder="Confirm Password"/>
                    <div>
                        <input checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="hover:cursor-pointer border-2  rounded " type="checkbox" />
                        <small className="ml-1.5">Remember me</small>
                    </div>
                        <p>Already have an account? <Link to="/login"><i className="text-blue-500">Login</i></Link></p>
                    <button className="border-slate-300 hover:bg-blue-500 font-bold text-lg text-white h-9 rounded  bg-blue-600" type="submit" >Signup</button>
                </form>
                </div>
            </div>
        </div>
  )
}

export default Register