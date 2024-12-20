"use client"

import React from 'react';
import { SiNextdotjs, SiReact, SiPython, SiWordpress, SiPhp, SiKotlin, SiFlutter, SiElementor } from 'react-icons/si';

const stackItems = [
    { id: 1, name: 'Next.js', icon: SiNextdotjs, color: '#000000' },     // Next.js (Black)
    { id: 2, name: 'React.js', icon: SiReact, color: '#61DAFB' },       // React.js (Light Blue)
    { id: 3, name: 'Python', icon: SiPython, color: '#306998' },        // Python (Blue)
    { id: 4, name: 'WordPress', icon: SiWordpress, color: '#21759B' },  // WordPress (Blue)
    { id: 8, name: 'Elementor', icon: SiElementor, color: '#010051' },  // Elementor (Night Blue)
    { id: 5, name: 'PHP', icon: SiPhp, color: '#777BB4' },              // PHP (Purple)
    { id: 6, name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },        // Kotlin (Purple)
    { id: 7, name: 'Flutter', icon: SiFlutter, color: '#02569B' },      // Flutter (Blue)
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