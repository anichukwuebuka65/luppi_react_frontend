import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link , useNavigate} from "react-router-dom"
import { axiosInstance } from "../axios"

const Login = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [isEmpty, setIsEmpty] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const [error, setError] = useState()
    const dispatch = useDispatch()

    const login = async(e) => {
        e.preventDefault()
        if(!email || !pwd )  {
            setIsEmpty("pls enter credientials")
            return
        }
        try {
            setIsLoading(true)
            const response = await axiosInstance.post('/login',{
                email, 
                password: pwd
                },{
                headers: {'Content-Type' : 'Application/json'}
            })
            if (response.status === 200) {
                 dispatch({type:'fetchUser', payload: response.data})
                sessionStorage.setItem("user", JSON.stringify(response.data))
                setIsLoading(false)
                navigate("/home")
            } 
        } catch (error) {
            setError(error.response.data)
            setIsLoading(false)
            dispatch({type:'fetchUserError', payload: error.message})
            console.log(error)
        }
    }



    useEffect(() => {
        axiosInstance.get("/")

       if(isLoggedIn) navigate("/home")
    },[])

  return (
    <div className='md:h-screen '>
        <div  className='lg:grid md:grid-cols-2 h-full items-center p-4 mt-10 '>
            <div className=" lg:justify-self-center  rounded-full flex justify-center mx-auto mb-16">
                <div className="mx-auto mb-9 ">
                    <h1 className=" text-5xl md:text-7xl font-extrabold mb-5 text-blue-600">Luppi.com</h1>
                    <i className="font-bold opacity-90 text-lg ml-6">Connect with your friends online</i>
                </div>
            </div>
            <div  className="sm:w-3/5 w-4/5 shadow-lg border rounded-lg px-5 py-7  mx-auto">
                {isEmpty || error ? <p className="italic text-red-500">{isEmpty}{error}</p> : null}
                <form onSubmit={login} className="flex flex-col space-y-5">
                    <input value={email} 
                    onChange={(e) => {setEmail( e.target.value); setIsEmpty(""); setError("")}}
                    className="border-slate-300  pl-1.5 border shadow-md h-10 rounded-lg focus:outline-none focus:border-slate-400" type="text" placeholder="E-mail address" autoComplete="off"/>
                    <input value={pwd} 
                    onChange={(e) => {setPwd( e.target.value); setIsEmpty("") ; setError("")}} 
                    className="border-slate-300 pl-1.5 border shadow-md h-10 rounded-lg focus:outline-none focus:border-slate-400" type="password" placeholder="Password" autoComplete="off"/>
                    <div>
                        <input checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="hover:cursor-pointer border-2  rounded " type="checkbox" />
                        <small className="ml-1.5">Remember me</small>
                    </div>
                        <p>No account? <Link to="/register"><i className="text-blue-500">Sign up</i></Link></p>
                    <button className="border-slate-300 hover:bg-blue-500 text-white h-9 rounded font-bold text-lg bg-blue-600" type="submit" >Login</button>
                </form>
        {isLoading && <div className='italic text-2xl mt-5 opacity-80 text-center'>Loading...</div>}
            </div>
        </div>

    </div>
  )
}

export default Login