import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
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
          <form className='flex flex-col gap-4'>
            <div className=''>
              <label className="input input-bordered flex items-center gap-2 mt-5 font-bold border-purple-500 border-2 text-yellow-500">
                Username:
                <input type="text" className="grow placeholder-green-400 text-gray-400 text-sm italic" placeholder="Type username here" id='username'/>
              </label>

              <label className="input input-bordered flex items-center gap-2 mt-5 font-bold border-purple-500 border-2 text-yellow-500">
                Email:
                <input type="text" className="grow placeholder-green-400 text-gray-400 text-sm italic" placeholder="Type email here" id='email'/>
              </label>

              <label className="input input-bordered flex items-center gap-2 mt-5 font-bold border-purple-500 border-2 text-yellow-500">
                Password:
                <input type="text" className="grow placeholder-green-400 text-gray-400 text-sm italic" placeholder="Type password here" id='password' />
              </label>
            </div>
            <Button className='bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500' type='submit'>Sign Up</Button>
          </form>
          <div className="flex gap-2 mt-2 text-sm">
            <span>Already have an account?</span>
            <Link to='/signin' className='text-blue-500'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup