import React, { use } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {set, useForm} from 'react-hook-form'
import axios from 'axios';
import toast from 'react-hot-toast';
function Login() {
  const {
    register,
    handleSubmit,
    formState:{errors}
  }=useForm();
  const navigate = useNavigate();
  const onSubmit= async (data)=>{
   const userInfo = {
            email: data.email,
            password: data.password
        }
      await axios.post("http://localhost:5000/user/login", userInfo)
      .then((res)=>{
        console.log(res.data);
        if(res.data){
            toast.success('Successfully logged in');
            document.getElementById("my_modal_3").close();
             setTimeout(() => {
            
              window.location.reload();
            localStorage.setItem("users",JSON.stringify(res.data.user))
             },1000);
            // Redirect to home page after successful login
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
    <div>
      
<dialog id="my_modal_3" className="modal ">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>{document.getElementById("my_modal_3").close()}}
       
      >✕</Link>
   
    <h3 className="font-bold text-lg">Login</h3>
   <div className="mt-4 space-y-2">
    <span>Email</span><br></br>
    <input type="email" placeholder="Enter your Email" className="w-80 px-3 py-1 rounded-md outline-none dark:bg-slate-900 dark:text-white border"
    {...register("email",{required:true})} />
    {errors.email && <span className='text-red-500'>This field is required</span>}
   </div>
   
    <div className="mt-4 space-y-2">
    <span>Password</span><br></br>
    <input type="text" placeholder="Enter your Password" className="w-80 px-3 py-1 rounded-md outline-none dark:bg-slate-900 dark:text-white border"  
    {...register("password",{required:true})}/>
    {errors.password && <span className='text-red-500'>This field is required</span>}
   </div>
   <div className='flex justify-around mt-4'>
    <button  className="btn btn-secondary ">Login</button>
    <p>Not registered?<Link to="/signup" className='underline text-blue-600'> Signup</Link></p>
   </div>
    </form>
  </div>
  
</dialog>

    </div>
  )
}

export default Login