
import { Link ,useNavigate} from 'react-router-dom'
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
function Signup() {
     const {
        register,
        handleSubmit,
        formState:{errors}
      }=useForm();
      const navigate = useNavigate();
      const onSubmit= async(data)=>{
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
      await axios.post("http://localhost:5000/user/signup", userInfo)
      .then((res)=>{
        console.log(res.data);
        if(res.data){
            toast.success('Signup successful');
            localStorage.setItem("users",JSON.stringify(res.data))
            navigate('/');
        }
      }).catch((error)=>{
        if(error.response){
            console.log(error);
          toast.error(error.response.data.message);
        }
      });
      }
    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-gray-50 px-2 dark:bg-slate-900 dark:text-white">
                <div className="w-full max-w-md border-2 shadow-md p-5 rounded-md bg-white md:max-w-xl relative dark:bg-slate-900 dark:text-white">
                    <div className='modal-box>'>
                    <form  onSubmit={handleSubmit(onSubmit)} method="dialog" className="space-y-4">
                        <h3 className="font-bold text-lg text-center">Signup</h3>
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </Link>
                        <div>
                            <label className="block mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 rounded-md outline-none border dark:bg-slate-900 dark:text-white"
                                  {...register("fullname",{required:true})}
                            />
                            {errors.fullname && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div>
                            <label className="block mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="w-full px-3 py-2 rounded-md outline-none border dark:bg-slate-900 dark:text-white"
                                  {...register("email",{required:true})}
                            />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div>
                            <label className="block mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                className="w-full px-3 py-2 rounded-md outline-none border dark:bg-slate-900 dark:text-white"
                                  {...register("password",{required:true})}
                                  
                            />
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 mt-4">
                            <button className="btn btn-secondary w-full md:w-auto">Signup</button>
                            <p className="text-sm">
                                Have account?</p>
                                <button className="underline text-blue-600 ml-1" onClick={()=>document.getElementById("my_modal_3").showModal()}>
                                    Login
                                </button>
                             
                            
                        </div>
                    </form>
                       <Login/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup