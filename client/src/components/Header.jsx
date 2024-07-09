import { Button, TextInput } from 'flowbite-react';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar bg-gray-600">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-yellow-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <li><Link to={'/'} className='hover:bg-yellow-700'><b>Home</b></Link></li><hr />
        <li><Link to={'/about'} className='hover:bg-yellow-700'><b>About</b></Link></li><hr />
        <li><Link to={'/projects'} className='hover:bg-yellow-700'><b>Projects</b></Link></li><hr />
      </ul>
    </div>
    <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Hamdan</span>
        Blog
      </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={'/'} className='hover:bg-yellow-600'><b className='text-white'>Home</b></Link></li>
      <li><Link className='hover:bg-yellow-600'><b className='text-white'>About</b></Link></li>
      <li><Link className='hover:bg-yellow-600'><b className='text-white'>Projects</b></Link></li>

    </ul>
  </div>
  <form className="relative flex items-center justify-center">
          <input
            type="text"
            placeholder="Search"
             className='pr-10 pl-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 hidden lg:inline'
          />
          <AiOutlineSearch className="absolute right-3 text-gray-400 hidden lg:inline" />
        </form>
        
        <Button className='flex items-center justify-center w-12 h-10  ml-2 lg:hidden sm:ml-auto rounded btn text-yellow-400 bg-blue-600'>
        <AiOutlineSearch />
      </Button>
  <div className="navbar-end">

  <Button className='items-center justify-center w-12 h-10 text-gray-500 m-2  sm:inline rounded bg-black'>
        <FaMoon className='ml-4  text-white'/>
      </Button>
    
    <Link to={'/signin'} className="btn bg-gradient-to-r from-purple-500 to-blue-500"><b>Signin</b></Link>
  </div>
</div>
  );
}

export default Header;
