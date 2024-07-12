import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin, BsTwitterX} from 'react-icons/bs'
function Footer() {
  return (
    

<footer class="bg-white rounded-lg shadow dark:bg-gray-300">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
        <Link to='/' className='self-center whitespace-nowrap  font-semibold text-lg sm:text-xl'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Hamdan</span>
          Blog
        </Link>

            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-green-900 gap-5 ">
                <li>
                    <div class=" me-4 md:me-6 ">
                    <b className='ml-2'>About</b>
                    </div>
                    <div>
                        <Link to='https://www.youtube.com/watch?v=Kkht2mwSL_I&list=PPSV' target='_blank' rel='noopener noreferer' className='hover:underline'>Hamdan Blog</Link><br />
                        <Link to='https://www.youtube.com/watch?v=Kkht2mwSL_I&list=PPSV' target='_blank' rel='noopener noreferer'className='hover:underline'>Portfolio</Link>
                        </div>

                </li>
                <li>
                    <div class="me-4 md:me-6">
                        <b>Follow Us</b>
                        </div>
                        <div>
                        <Link to='https://www.youtube.com/watch?v=Kkht2mwSL_I&list=PPSV' target='_blank' rel='noopener noreferer'className='hover:underline'>github</Link><br />
                        <Link to='https://www.youtube.com/watch?v=Kkht2mwSL_I&list=PPSV' target='_blank' rel='noopener noreferer'className='hover:underline'>Linkedin</Link>
                        </div>
                </li>
                <li>
                    <div class="me-4 md:me-6">
                    <b>Licensing</b>
                    </div>
                    <div>
                        <Link to='https://www.youtube.com/watch?v=Kkht2mwSL_I&list=PPSV' target='_blank' rel='noopener noreferer'className='hover:underline'>Privacy Policy</Link><br />
                        <Link to='#' target='_blank' rel='noopener noreferer'className='hover:underline'>Terms and Condition</Link>
                        </div>
                </li>
                <li>
                    <div href="#" class="ml-5">
                    <b>Contact
                        </b>
                        </div>
                        <div>
                        <Link to='https://www.youtube.com/watch?v=Kkht2mwSL_I&list=PPSV' target='_blank' rel='noopener noreferer'className='hover:underline'>+917994969074</Link><br />
                        <Link to='https://www.youtube.com/watch?v=Kkht2mwSL_I&list=PPSV' target='_blank' rel='noopener noreferer'className='hover:underline ml-2'>hamdanz074@gmail.com</Link>
                        </div>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-yellow-900">© 2024 <Link to="https://flowbite.com/" class="hover:underline">Blog™</Link>. All Rights Reserved.</span>
        <div className='flex gap-2 sm:mt-2 mt-4 sm:justify-center'>
            <Link to='#'><BsFacebook/></Link>
            <Link to='#'><BsInstagram/></Link>
            <Link to={'#'}> <BsTwitterX/></Link>
            <Link to='#'><BsLinkedin/></Link>
        </div>
        
    </div>
</footer>


  )
}

export default Footer