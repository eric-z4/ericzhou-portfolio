"use client";

import type { FC } from 'react';
import { useState } from 'react'

export const Sidepanel: FC = () => {
    const [leftVal, setLeftVal] = useState(16);

    function handleTabClick() {
        setLeftVal(leftVal ^ 16);
    }

    return (
        <div className={`fixed z-1 top-1/6 -left-${leftVal} w-16 h-2/3 transition-[left] delay-0 duration-200 ease-in-out`}>
            <div
                className='absolute block rounded-r-lg top-85/100 -right-5 w-5 h-22 bg-(--sidepanel-bg) text-center'
                onClick={handleTabClick}
            >
                &gt;
            </div>
            <div className='relative h-full'>
                <div className='absolute bottom-0 flex flex-col-reverse w-16 gap-3 p-2 bg-(--sidepanel-bg) overflow-hidden'>
                    <div className='flex aspect-square rounded-full border-2 border-black bg-blue-100'></div>
                    <div className='flex aspect-square rounded-full border-2 border-black bg-blue-100'></div>
                    <div className='flex aspect-square rounded-full border-2 border-black bg-green-100'></div>
                    <div className='flex aspect-square rounded-full border-2 border-black bg-green-100'></div>
                </div>
            </div>
        </div>
    );
};