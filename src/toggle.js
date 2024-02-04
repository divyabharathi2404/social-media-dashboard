import React, { useState,useEffect } from 'react';

export default function Switcher() {
  const [isDark, setIsDark] = useState(false)

  
  useEffect(() => {
    console.log("insde HandleThemeChange",isDark);
    if (isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [isDark]);
  return (
    <>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isDark}
            onChange={()=>{ setIsDark(!isDark)}}
            className='sr-only'
          />
          <div className='block h-7 w-14 rounded-full'></div>
          <div className= { ` dot absolute h-5 w-5 left-1 ${isDark ? 'translate-x-7 delay-75' : '-translate-x-0 delay-75'} 
            top-1 rounded-full transition  ` } ></div>
        </div>
      </label>
    </>
  )
}
