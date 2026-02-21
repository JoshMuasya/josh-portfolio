"use client"

import React from 'react';
import { IoLogoJavascript } from 'react-icons/io';
import { SiNextdotjs, SiReact, SiPython, SiTypescript } from 'react-icons/si';

const stackItems = [
    { id: 1, name: 'Next.js', icon: SiNextdotjs, color: '#000000' },     // Next.js (Black)
    { id: 2, name: 'React.js', icon: SiReact, color: '#61DAFB' },       // React.js (Light Blue)
    { id: 3, name: 'Python', icon: SiPython, color: '#306998' },        // Python (Blue)
    { id: 4, name: 'Typescript', icon: SiTypescript, color: '#306998' },  
    { id: 5, name: 'Javascript', icon: IoLogoJavascript, color: '#306998' },  
  ];

export const Stack = () => {


    return (
        <section className='py-16 glass' id='stack'>
            <div className='max-w-[1200px] mx-auto px-4 text-center'>
                <h2 className='text-5xl text-gray-200 font-bold mb-4'>My Stack</h2>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-5'>
                    {stackItems.map((item) => (
                        <div 
                        key={item.id} 
                        className='flex flex-col items-center justify-center rounded-xl p-4'>
                            <div className='mb-4 bg-white/10 p-6 rounded-xl'>
                                {React.createElement(item.icon, {
                                    className: 'w-32 h-32',
                                    style: {color: item.color}
                                })}
                            </div>
                            <p className='text-gray-400 font-semibold'>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}