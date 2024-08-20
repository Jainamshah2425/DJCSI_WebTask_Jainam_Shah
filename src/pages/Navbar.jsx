import React,{useState} from 'react';
import pic from '../assets/Screenshot 2024-08-12 212636.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import sec from '../assets/sec.png';
import tir from '../assets/tir.png';
import raf from '../assets/rafiki.png';
import timage from '../assets/timage.png';
import h2 from '../assets/h2.png';
import h3 from '../assets/h3.png';
import bpic from '../assets/bpic.png';
import icon from '../assets/icon.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
  const [gm,setgm]=useState('');
  const handleTab =() =>{
    setgm('');
  }
  library.add(fas);
  return (
    <>
<div  >
  <nav className="bg-white pt-20 max-w-full overflow-x-hidden">
    <img className='size-10 absolute top-3 left-36' src={pic} alt="Logo" />
    <h1 className='text-4xl absolute top-3 left-48'>Nexcent</h1>
    <div className="flex space-x-4">
      <ul className='flex text-lg absolute top-5 right-28 bottom-0 space-x-10 mx-5'>
        <li >Home</li>
        <li>Features</li>
        <li>Community</li>
        <li>Blog</li>
        <li>Pricing</li>
        <li>
          <button className='bg-green-500 px-4 py-2 text-white'>
          
            Register Now <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
           
          </button>
        </li>
      </ul>
    </div>
  </nav>
</div>
 <div className=' min-h-screen'>
 <div className="w-full bg-slate-200 flex flex-col items-center pt-10">
   <h1 className="text-7xl pt-20  relative right-72 ">
     Lessons and insights
     <h1 className="text-green-600 text-5xl mt-8  ">
     From 8 years
   </h1>
   <h1 className="text-xl mt-4">
     Where to grow your business as a photographer: site or social media?
   </h1>
   <button className="bg-green-500 text-lg px-8 py-2 mt-8 text-white ">
     Register 
   </button>
   </h1> 
   <img className="mt-8  relative size-96 bottom-72 left-72" src={pic1} alt="Image description" />
 </div>


 <div  className="w-full mt-30 text-center">
   <h1 className="text-6xl relative bottom-24 bg-white">
     Manage your entire community<br></br>
     in a single system
   </h1>
   <h2 className='relative bottom-16'>
    Who is Nextcent suitable for?
   </h2>
 </div>
   <div className='w-full -mt-8 grid mx-1 gap-2 '>
 <span className='text-center w-1/4  rounded-lg shadow-md  hover:bg-green-300'>
  <img className='relative left-40' src={pic2}/>
 <h1 className='px-7 text-2xl'>Membership<br></br>
 Organisations   </h1>
 <h2 className='px-7 py-2'>
  Our membership management<br></br>
  software is provides full automation of<br></br>
  membership renewals and payments
 </h2>
 </span>
 <span className='text-center relative bottom-52 left-1/3 w-1/4 mx-8 rounded-lg shadow-md 
  hover:bg-green-300'>
  <img className='relative left-44' src={sec}/>
 <h1 className='px-7 text-2xl'>National<br></br>
 Associations   </h1>
 <h2 className='px-7 py-2'>
  Our membership management<br></br>
  software is provides full automation of<br></br>
  membership renewals and payments
 </h2>
 </span>

{/* 
 size */}
 <span className='text-center -mx-10  relative bottom-96 left-3/4 w-1/4 -my-5 rounded-lg shadow-md hover:bg-green-300'>
  <img className="relative left-44" src={tir}/>
 <h1 className='px-7 text-2xl '>Clubs And<br></br>
 Groups   </h1>
 <h2 className='px-7 py-2'>
  Our membership management<br></br>
  software is provides full automation of<br></br>
  membership renewals and payments
 </h2>
 </span>
 
 <div   className='flex flex-row items-center w-100%  relative bottom-80 px-20 '>
 <img className='h-80' src={raf}/>
 <div className=' flex-row '>
 <h1 className='text-5xl mx-20 px-10  '>
  The unseen of spending three <br></br>years at Pixelgrade
 </h1>
 <h3 className=' mx-20 px-10 py-5 '>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequatur mollitia cum nemo aut fuga voluptatibus quas exercitationem, veritatis libero unde beatae ullam, similique quae aliquid numquam, asperiores error sequi.
  <br></br><button className='bg-green-500 px-2 py-2 rounded-sm my-10 text-white'>
   Learn More
   
 </button>
 </h3>
 </div>
  </div>
  <div className='  relative bottom-72 w-full'>
    <h1 className='text-center text-4xl'> Caring is the new marketing</h1>
    <h2 className='text-center py-4'>The Nexcent blog is the best place to read about the latest membership insights ,<br></br>
    trends and more.See who's joining the community,read about how our community <br></br>
    are increasing their membership income and lot's more.
    </h2>
    <span className=' justify-center mx-52 grid  grid-cols-3'>
    
          <img className='h-60 ' src={timage}/>
   
          <img className=' h-60 -mx-16 rounded-lg  relative  -right-5' src={h2}/> 
           <img src={h3} className='h-60 rounded-lg -mx-20'/>
    </span>
    <span className='grid grid-cols-3'>
    <span className='bg-white shadow-md  flex w-64 h-36 rounded-md relative bottom-20 left-60 hover:bg-green-200 '>
     <h1 className='mx-4 my-2 text-center'> Creating Streamlined <br />Safegaurding Process with <br />OneRen
      
      <h3 className='text-green-500 my-3'>
        Readmore <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
      </h3>
    </h1>
    </span>
    <span className='bg-white shadow-md  flex w-64 h-36 rounded-md relative bottom-20 left-12 hover:bg-green-200 '>
     <h1 className='mx-4 my-2 text-center '> What are your Safegaurding <br />responsibilities and <br /> how can you manage them? 
      
      <h3 className='text-green-500 my-3'>
        Readmore <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
      </h3>
    </h1>
    </span>
    <span className='bg-white shadow-md  flex w-64 h-36 rounded-md relative bottom-20 -left-32  hover:bg-green-200 '>
     <h1 className='mx-4 my-2 text-center'> Revamping and Membership <br />Model with Trialthon <br />Australia
      
      <h3 className='text-green-500 my-3'>
          Readmore   <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </h3>
    </h1>
    </span>
    
    </span>
  </div> 
   </div>
 
 <div  className="w-full  -mt-56 text-white bg-customDark grid  grid-cols-4 ">
   <span>
   <h1 className="mx-20 relative top-5 text-4xl px-8">
     Nexcent
   </h1>
   <img src={bpic} className='relative bottom-5 left-16 size-10'/>
    <h3 className='mx-16'>
      Copyright @ 2020 Landlify UI Kit,<br />
      All rights reserved.
    </h3>
    <img  className='w-28 mx-16 py-8' src={icon}/>
    </span>



    <span className='text-white mx-36'>
   <h1 className="mx-20 relative top-5 text-4xl px-8">
     Company
   </h1>
   <h3>
   <ul className='relative top-8 left-28'> 
    <li >About us</li>
    <li >Blog</li>
    <li >Contact us</li>
    <li >Pricing </li>
    <li >Testimonials</li>
   </ul>
   </h3>
    </span>

    <span className='text-white mx-4'>
   <h1 className="mx-20 relative top-5 text-4xl px-8">
     Support
   </h1>
   <h3>
   <ul className='relative top-8 left-28'> 
    <li >Help center</li>
    <li >Terms of service</li>
    <li >Legal</li>
    <li >Privacy policy </li>
    <li >Status</li>
   </ul>
   </h3>
    </span>
{/* add awsesome icons and input type */}
    <span >
      <h3 className='text-3xl relative top-5'>Stay up to Date</h3>
      <input type="email"    
       placeholder="Enter your email" className=" text-white bg-customLight relative top-10 w-60 h-10 rounded-lg">
        
       </input>
       <FontAwesomeIcon onClick={()=>{
        window.alert("we will contact u soon")
        
       }} className='relative top-10 right-7' icon="fa-solid fa-location-arrow" />
    </span>

 </div>
</div>

</>

  )
}

export default Navbar
