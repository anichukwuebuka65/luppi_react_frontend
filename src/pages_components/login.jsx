

const Login = () => {
  return (
    <div className='h-screen'>
        <div  className='grid grid-cols-2 h-full items-center'>
            <div className=" ">
                <div className="mx-auto">
                    <h1 className="text-5xl font-extrabold mb-5 text-blue-600">Luppi</h1>
                    <p>Connect with friends online</p>
                </div>
            </div>
            <div  className="">
                <form className="flex flex-col w-1/2 bg-slate-300 rounded p-3 space-y-3">
                    <input className="border-slate-300 border-2 h-10 rounded focus:outline-none focus:border-slate-400" type="text" />
                    <input className="border-slate-300 border-2 h-10 rounded focus:outline-none focus:border-slate-400" type="password" />
                    <div>
                        <input className="hover:cursor-pointer border-2  rounded " type="checkbox" />
                        <small className="ml-1.5">I agree to terms and conditions!</small>
                    </div>
                    <input className="border-slate-300 text-white h-9 rounded  bg-blue-600" type="submit" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login