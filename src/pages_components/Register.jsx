import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { axiosInstance } from '../axios'

const Register = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [confirmPwd, setConfirmPwd] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [errMsg, setErrMsg] = useState()
    const [fetchErrMsg, setFetchErrMsg] = useState()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const nameRegex = /^[A-Za-z0-9]{3,15}$/;
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,20}$/;
    const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const validate = () => {
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
        return "validated"
    }

    async function register(e){
        e.preventDefault()
        const validated = validate()
        if(!validated) return
        try {
            setIsLoading(true)
           const response = await axiosInstance.post("register",{firstname,lastname,email, pwd})
           if (response.status === 200){
            setFirstname("")
            setLastname("")
            setEmail("")
            setPwd("")
            setConfirmPwd("")
            setErrMsg("")
            setIsLoading(false)
            navigate("/login")
           } 
        } catch (error) {
            setFetchErrMsg("something went wrong")
            setIsLoading(false)
        }  
    }

  return (
        <div className='md:h-screen'>
            <div  className='lg:grid md:grid-cols-2 h-full items-center p-4 '>
                <div className=" lg:justify-self-center  rounded-full flex justify-center mx-auto">
                    <div className="mx-auto mb-14 ">
                        <h1 className=" text-5xl md:text-7xl font-extrabold mb-5 text-blue-600">Luppi.com</h1>
                        <i className="font-bold opacity-90 text-lg ml-6">Connect with your friends online</i>
                    </div>
                </div>
                <div  className="sm:w-3/5 w-4/5 shadow-lg border rounded-lg px-5 py-7  mx-auto">
                    <small className='text-red-500'>{errMsg}</small>
                <form onSubmit={register} className="flex flex-col  space-y-5 ">
                    <input value={firstname} onChange={(e) => setFirstname( e.target.value) } className=" border-slate-300  pl-1.5 border shadow-md h-10 rounded-lg focus:outline-none focus:border-slate-400" type="text" placeholder='Firstname'/>
                    <input value={lastname} onChange={(e) => setLastname( e.target.value) }  className=" border-slate-300  pl-1.5 border shadow-md h-10 rounded-lg focus:outline-none focus:border-slate-400" type="text" placeholder="Lastname" />
                    <input value={email} onChange={(e) => setEmail( e.target.value) }  className=" border-slate-300  pl-1.5 border shadow-md h-10 rounded-lg focus:outline-none focus:border-slate-400" type="email" placeholder="E-mail"/>
                    <input value={pwd} onChange={(e) => setPwd( e.target.value) }  className="  border-slate-300  pl-1.5 border shadow-md h-10 rounded-lg focus:outline-none focus:border-slate-400" type="password" placeholder="Password"/>
                    <input value={confirmPwd} onChange={(e) => setConfirmPwd( e.target.value) }  className="  border-slate-300  pl-1.5 border shadow-md h-10 rounded-lg focus:outline-none focus:border-slate-400" type="password" placeholder="Confirm Password"/>
                    <div>
                        <input checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="hover:cursor-pointer border-2  rounded " type="checkbox" />
                        <small className="ml-1.5">Remember me</small>
                    </div>
                        <p>Already have an account? <Link to="/login"><i className="text-blue-500">Login</i></Link></p>
                    <button className="border-slate-300 hover:bg-blue-500 font-bold text-lg text-white h-9 rounded  bg-blue-600" type="submit" >Signup</button>
                </form>
                {isLoading && <div className='italic text-2xl mt-5 opacity-80 text-center'>Loading...</div>}
                {fetchErrMsg && <div className='italic text-2xl mt-5 text-red opacity-80 text-center'>{fetchErrMsg}</div>}
                </div>
            </div>
        </div>
  )
}

export default Register