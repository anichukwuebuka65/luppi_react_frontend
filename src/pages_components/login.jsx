import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className='h-screen'>
        <div  className='grid grid-cols-2 h-full items-center'>
            <div className=" justify-self-center  rounded-full">
                <div className="mx-auto ">
                    <h1 className="text-7xl font-extrabold mb-5 text-blue-600">Luppi.com</h1>
                    <i className="font-bold opacity-90 text-lg ml-6">Connect with your friends online</i>
                </div>
            </div>
            <div  className="">
            <form className="flex flex-col w-3/5 shadow-lg border rounded px-3 py-5 space-y-3">
                <input className="border-slate-300 pl-1.5 border h-10 rounded focus:outline-none focus:border-slate-400" type="text" placeholder="E-mail address"/>
                <input className="border-slate-300 pl-1.5 border h-10 rounded focus:outline-none focus:border-slate-400" type="password" placeholder="Password"/>
                <div>
                    <input className="hover:cursor-pointer border-2  rounded " type="checkbox" />
                    <small className="ml-1.5">Remember me</small>
                </div>
                    <p>No account? <Link to="/register"><i className="text-blue-500">Sign up</i></Link></p>
                <button className="border-slate-300 hover:bg-blue-500 text-white h-9 rounded font-bold text-lg bg-blue-600" type="submit" >Login</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login