import React  from 'react';
import Switcher from './toggle';

export default function Dashboard() {
 
   return (
      <>
         <div className="dasboard ">
            <div className="card dash-nav flex  content-center pt-4">
               <div className="left float-left ">
                  <h1 className='text-color text-2xl font-bold '>Social Media Dashboard</h1>
                  <p className='text-color text-xs font-semibold opacity-70 tracking-wide'>Total Followers: 23,004</p>
               </div>
               <div className="right flex flex-row gap-3 content-center justify-center">
                  <p className='toggle-txt text-sm font-bold  tracking-wide mt-1'>Dark Mode</p>
                  <Switcher/>
               </div>
            </div>
            <div>
               <div className="card flex  gap-9  content-center justify-center ">
                  <div className="card-item cursor-pointer fb-card w-60 ">
                     <div className="flex flex-row content-center justify-center mt-6 gap-2">
                        <img className="logo" src="/images/icon-facebook.svg" alt="facebook" />
                        <p class="tag_name text-color">@nathanf</p>
                     </div>
                     <p class="count mt-4">1987</p>
                     <p class="type">FOLLOWERS</p>
                     <div className="up-rate flex gap-1 content-center justify-center mt-3 mb-4 ">
                        <img className="icon mt-2 " src="/images/icon-up.svg" alt="up" />
                        <p>12 Today</p>
                     </div>
                  </div>
                  <div className="card-item  cursor-pointer twitter-card w-60 ">
                     <div className="flex flex-row content-center justify-center mt-6 gap-2">
                        <img className="logo" src="images/icon-twitter.svg" alt="twitter" />
                        <p class="tag_name text-color" >@nathanf</p>
                     </div>
                     <p class="count mt-4"> 1044</p>
                     <p class="type">FOLLOWERS</p>
                     <div className=" up-rate flex gap-1 content-center justify-center mt-3 mb-4" >
                        <img className="icon mt-2" src="/images/icon-up.svg" alt="up" />
                        <p>99 Today</p>
                     </div>
                  </div>
                 <div className=" card-item   cursor-pointer insta-card insta-bg w-60">
                     <div className="flex flex-row content-center justify-center mt-6 gap-2">
                        <img className="logo" src="images/icon-instagram.svg" alt="instagram" />
                        <p class="tag_name text-color"> @realnathanf</p>
                     </div>
                     <p class="count mt-4">11k</p>
                     <p class="type">FOLLOWERS</p>
                     <div className="up-rate flex gap-1 content-center justify-center mt-3 mb-4">
                        <img className="icon mt-2" src="/images/icon-up.svg" alt="up" />
                        <p>1099 Today</p>
                     </div>
                  </div>
                  <div className="card-item  cursor-pointer yt-card w-60  ">
                     <div className="flex flex-row content-center justify-center mt-6 gap-2">
                        <img className="logo" src="images/icon-youtube.svg" alt="youtube" />
                        <p class="tag_name text-color">Nathan F.</p>
                     </div>
                     <p class="count mt-4">8239</p>
                     <p class="type">SUBSCRIBERS</p>
                     <div className="down-rate flex gap-1 content-center justify-center mt-3 mb-4">
                        <img className="icon" src="/images/icon-down.svg" alt="down" />
                        <p>144 Today</p>
                     </div>
                  </div>

               </div>
            </div>
         </div>

      </>
   )
}