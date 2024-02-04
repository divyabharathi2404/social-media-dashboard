import React from 'react';
import data from './lib/overview.json';

export default function OverView() {
   console.log("data", data);
   return (
      <>
      <div className='view-header'>
         <h2 className=' text-2xl font-bold '> Overview - Today</h2>
      </div>
      <div className='card '>
         <div class="overview  ">
            {
               data?.map((dat) => {
                  return (
                     <div className="overview-card w-full p-5 cursor-pointer rounded-[5px]">
                        <div className='cat flex content-center justify-between mb-4'>
                           <p className='  text-color text-sm font-bold opacity-70'>{dat.type}</p>
                           <img className="logo" src={`images/icon-${dat.network_type === 'facebook' ? 'facebook' :
                              dat.network_type === 'instagram' ? 'instagram' :
                                 dat.network_type === 'twitter' ? 'twitter' :
                                    'youtube'
                              }.svg`}
                              alt="" />
                        </div>
                        <div  className='flex content-center justify-between'>
                           <p className=' text-color text-2xl font-bold'>{dat.count}</p>
                           <div className={` ${dat.per_stats}-rate flex mt-2  `}>
                              <img className="icon mt-2 " src={`images/icon-${dat.per_stats === 'up' ? 'up' : 'down'
                                 }.svg`} alt="" />
                              <p className='ml-1'>{`${dat.percentage}%`}</p>
                           </div>
                        </div>

                     </div>
                  )
               })
            }
         </div>
      </div>

      </>

   )
}

