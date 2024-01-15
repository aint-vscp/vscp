'use client'

import React, { useState } from 'react';

export default function Info() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    document.body.style.overflow = 'hidden';
    setIsClicked(true);
  };

  const handleExit = () => {
    document.body.style.overflow = 'auto';
    setIsClicked(false);
  };

  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="flex min-h-screen relative items-center justify-center w-full">
        <div className="rounded-xl bg-secondary-color overflow-hidden relative text-center p-4 group items-center flex flex-col min-w-5xl hover:shadow-2xl shadow-secondary-color transition-all duration-500 shadow-xl items-center justify-center">
          <div className="text-gray-500 group-hover:scale-105 transition-all cursor-pointer items-center justify-center" onClick={handleClick}>
            <img className="rounded-full m-4 w-52 h-52 object-cover" src="/imgs/SONY9587.JPG" alt="Vash Puno" />
          </div>
          <div className="group-hover:pb-10 transition-all duration-500 delay-200 cursor-pointer" onClick={handleClick}>
            <h1 className="font-semibold text-3xl text-gray-700">Vash C. Puno</h1>
            <p className="text-gray-500 text-sm">Computer Science Student</p>
          </div>
          <div className="flex flex-col items-center transition-all duration-500 delay-200 group-hover:bottom-2 -bottom-full absolute w-full p-2">
            <div className="flex justify-center item-center pr-3 pl-3 text-2xl bg-gray-700 text-white hover:pr-5 hover:pl-5 transition-all duration-500 delay-200 rounded-full shadow-sm">
              <a className="hover:scale-110 transition-all duration-500 delay-200" href="mailto:vscpdev@gmail.com" >
                <i className="fas fa-envelope text-lg"/>
              </a>
            </div>
          </div>
        </div>
        {isClicked && (
          <>
            <div className="fixed top-0 left-0 w-screen h-screen z-5 bg-gray-900 opacity-70" onClick={handleExit}></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1">
              <div className="m-12 bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-6000 hover:scale-110 duration-700 p-5 z-70">
                <div className="flex flex-row justify-between w-full">
                  <img className="flex-none w-10 h-10 object-cover" src="/icon/vscp.ico" alt="VSCP" />
                  <div className="group x-container cursor-pointer hover:group" onClick={handleExit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50">
                      <path className="stroke-current transform group-hover:-rotate-45 transition-transform duration-500 ease-in-out group-hover:stroke-red-400" d="M10 25L40 25" stroke="#222831" strokeWidth="4" style={{ transformOrigin: 'center' }} />
                      <path className="stroke-current transform group-hover:rotate-45 transition-transform duration-500 ease-in-out group-hover:stroke-red-400" d="M10 25L40 25" stroke="#222831" strokeWidth="4" style={{ transformOrigin: 'center' }} />
                    </svg>
                  </div>
                </div>
                <h3 className="py-2 text-text-color-2 font-bold">More about me:</h3>
                <h3 className="py-2 text-text-color-2 font-semi-bold">Vash C. Puno</h3>
                <p className="px-2 text-xs text-text-color-2">*V_S_ C P_ _ _</p>
                <p className="py-3 text-sm leading-7 text-slate-300 space-y-4">
                  <span className='font-bold'>Employment: </span><span className="text-text-color-2 font-semi-bold">Student</span><br/>
                  <span className='font-bold'>E-mail: </span><span className="text-text-color-2 font-semi-bold">vscpdev@gmail.com</span><br/>
                  <span className='font-bold'>Location: </span><span className="text-text-color-2 font-semi-bold">Philippines</span><br/>
                  <span className='font-bold'>Languages: </span><span className="text-text-color-2 font-semi-bold">English, Filipino</span><br/>
                  <span className='font-bold'>Hobbies: </span><span className="text-text-color-2 font-semi-bold">Coding, Gaming, Watching Anime</span><br/>
                  <span className='font-bold'>Skills: </span><span className="text-text-color-2 font-semi-bold">HTML, CSS, JavaScript, TypeScript, NextJS, NodeJS, MongoDB, MySQL, Python, Java, C, C++, C#, PHP, TailwindCSS, Figma, Adobe XD, Adobe Photoshop, Cybersecurity</span><br/>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
