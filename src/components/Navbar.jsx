import React from 'react'

function Navbar() {
    return (
        <div className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#40407a] py-4 shadow-md sticky top-0'>
            <div className="left flex items-center space-x-3 justify-center ">
            <h2 className='font-bold text-2xl text-white'>Movie~Info</h2>
                <img className='w-10' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="img" />
                {/* <h2 className='font-bold text-2xl text-white'>Movie~Info</h2> */}
            </div>
            <div className="right">
                <ul className=' flex space-x-4 text-white justify-center '>
                    <li><a href="/">Home</a></li>
                    <li><a href="https://amsrportfolio.netlify.app/about">About</a></li>
                    <li><a href="https://amsrportfolio.netlify.app/contact">Contact</a></li>
                    <li><a href="https://amsrportfolio.netlify.app/service">Services</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar