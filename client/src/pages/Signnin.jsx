import { Alert, Button, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice'

function Signin() {
  const [formData,setFormData]=useState({})
  const {loading,error:errorMessage}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleChange=(e)=>{
  setFormData({...formData,[e.target.id]:e.target.value})
  }
 const handleSubmit=async(e)=>{
  e.preventDefault()
  if(!formData.email||!formData.password){
    return dispatch(signInFailure('Please fill up all the fields'))
  }
 try {
  dispatch(signInStart())
  const res=await fetch('/api/auth/signin',{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formData)
  });
  const data=await res.json()
  if(data.success===false){
  dispatch(signInFailure(data.message))
  }
  if(res.ok){
    dispatch(signInSuccess(data))
    navigate('/')
  }
 } catch (error) {
  dispatch(signInFailure(error.message))
 }
 }  
return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to='/' className='  font-extrabold text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Hamdan</span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum modi, reiciendis fugiat nostrum ad voluptatem eaque pariatur quos. Quam ducimus optio in earum amet reprehenderit, facilis voluptas. Aut, debitis consequuntur!
          </p>
        </div>
        {/* right */}
        <div className="flex-1 border-4 border-violet-500 p-2 rounded-box">
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className=''>
             <label className="input input-bordered flex items-center gap-2 mt-5 font-bold border-purple-500 border-2 text-yellow-500">
                Email:
                <input type="text" className="grow placeholder-green-400 text-gray-400 text-sm italic" placeholder="Type email here" id='email' onChange={handleChange}/>
              </label>

              <label className="input input-bordered flex items-center gap-2 mt-5 font-bold border-purple-500 border-2 text-yellow-500">
                Password:
                <input type="password" className="grow placeholder-green-400 text-gray-400 text-sm italic" placeholder="Type password here" id='password' onChange={handleChange}/>
              </label>
            </div>
            <Button className='bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500' type='submit' disabled={loading}>
              {
                loading?(

                  <span className="loading loading-spinner text-primary" >
                    
                  </span>

                ):'Login'
              }
            </Button>
          </form>
          <div className="flex gap-2 mt-2 text-sm">
            <span>Don't have an account?</span>
            <Link to='/signup' className='text-blue-500'>Sign Up</Link>
          </div>
          {
            errorMessage &&(
              <Alert className='mt-5 text-red-700' color='failure'> {errorMessage} </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Signin