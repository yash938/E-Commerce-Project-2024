import React from 'react'
import Logo from "../../../public/images/Logo.png"
import search from "../../../public/images/search-line.png"
import { Link } from 'react-router-dom'
import '../../App.css'
function Nav() {
  return (
    <section id='Nav' className='w-[100vw] bg-[#FFFFFF] shadow  h-[11vh]  flex '> 

         <div id='NavLeft' className="left w-[40%] h-full flex "> 

                <span id='logo' className="h-full w-[30%] flex justify-evenly items-center">
                    <img className='w-28 h-10' src={Logo} alt="" />
                    <p className='hidden'><i class="ri-menu-2-line"></i><br /></p>
                    <p className='hidden'>Zyntra</p>
                </span> 

                <span id='NavLinks' className="w-[70%] text-[14px] font-[700] pl-4 h-full flex justify-start items-end gap-10 navigation">
                    <li><Link to="shop/men">MEN</Link> <p></p></li>
                    <li><Link to="shop/women">WOMEN</Link><p></p></li>
                    <li><Link to="shop/kids">KIDS</Link><p></p></li>
                    <li><Link to="shop/home-living">KIDS</Link><p></p></li>
                    <li><Link to="personal-care">Beauty</Link><p></p></li>
                </span> 

         </div>

         <div id='NavRight' className="right w-[60%] h-full flex justify-end items-center "> 
             <div id='search' className="w-[60%] h-full flex items-center justify-center">
                <span className='w-[10%] h-[50%] rounded-l-sm  flex justify-center bg-[#F5F5F6] items-center'><i class="ri-search-line"></i></span>
                <input type="text" placeholder='search for product,brands and more' className='p-2  h-[50%] w-[85%] bg-[#F5F5F6] outline-none rounded-r-sm' />
             </div> 

             <div id='userCredentail' className="w-[25%]  h-full  userCredentail flex justify-evenly items-center">
                
                   <p id='profileIcon'><i class="ri-user-line text-2xl"></i><br /><span>Profile</span></p>
                   <p id="searchIcon" className='hidden'><img src={search} alt="" /><br /></p>
                   <p><i class="ri-heart-line text-2xl"></i> <br /><span>wishlist</span></p>
                   <p><i class="ri-shopping-bag-4-fill text-2xl"></i> <br /><span>Bag</span></p>
                  
                   
             </div>
         </div> 

    </section>
  )
}

export default Nav