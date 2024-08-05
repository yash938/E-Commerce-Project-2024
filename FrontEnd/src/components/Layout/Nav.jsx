import React from 'react'
import Logo from "../../../public/images/Logo.png"
import { Link } from 'react-router-dom'
import '../../App.css'
function Nav() {
  return (
    <section className='Nav w-[100vw] h-[11vh] bg-blue-900 flex '>
         <div className="left w-[40%] h-full flex bg-green-700"> 

                <span className="logo h-full w-[30%] bg-red-500 flex justify-center items-center">
                    <img className='w-28 h-10' src={Logo} alt="" />
                </span> 

                <span className="w-[70%] text-[14px] font-[700] pl-4 h-full flex justify-start items-center gap-10 navigation">
                    <li><Link to="shop/men">MEN</Link></li>
                    <li><Link to="shop/women">WOMEN</Link></li>
                    <li><Link to="shop/kids">KIDS</Link></li>
                    <li><Link to="shop/home-living">KIDS</Link></li>
                    <li><Link to="personal-care">Beauty</Link></li>
                </span>
         </div>

         <div className="right w-[60%] h-full flex ">
             <div className="bg-yellow-400 search w-[60%] h-full flex items-center justify-center">
                <span className='w-[10%] h-[50%] rounded-l-sm bg-[#F5F5F6] flex justify-center items-center'><i class="ri-search-line"></i></span>
                <input type="text" placeholder='search for product,brands and more' className='p-2  h-[50%] w-[85%] bg-[#F5F5F6] outline-none rounded-r-sm' />
             </div>
             <div className="w-[40%] h-full flex userCredentail">
                   <p><i class="ri-user-line"></i><br />Profile</p>
                   <p><i class="ri-heart-line"></i> <br />wishlist</p>
                   <p><i class="ri-shopping-bag-4-fill"></i> <br />Bag</p>
             </div>
         </div>
    </section>
  )
}

export default Nav
