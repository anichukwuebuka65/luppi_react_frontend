import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
        <div className='h-screen'>
            <div  className='grid grid-cols-2 h-full items-center'>
                <div className=" justify-self-center">
                    <div className="mx-auto">
                        <h1 className="text-7xl font-extrabold mb-5 text-blue-600">Luppi.com</h1>
                        <i className="font-bold opacity-90 text-lg ml-6">Connect with your friends online</i>
                    </div>
                </div>
                <div  className="">
                <form className="flex flex-col w-3/5 border shadow-md border-slate-300 space-y-3 rounded px-3 py-5 ">
                    <input className="  border-slate-300 pl-1.5 border h-10 rounded focus:outline-none focus:border-slate-400" type="text" placeholder='Firstname'/>
                    <input className="  border-slate-300 pl-1.5 border h-10 rounded focus:outline-none focus:border-slate-400" type="text" placeholder="Lastname" />
                    <input className="  border-slate-300 pl-1.5 border h-10 rounded focus:outline-none focus:border-slate-400" type="email" placeholder="E-mail"/>
                    <input className="  border-slate-300 pl-1.5 border h-10 rounded focus:outline-none focus:border-slate-400" type="password" placeholder="Password"/>
                    <input className="  border-slate-300 pl-1.5 border h-10 rounded focus:outline-none focus:border-slate-400" type="password" placeholder="Confirm Password"/>
                    <div>
                        <input className="hover:cursor-pointer border-2  rounded " type="checkbox" />
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