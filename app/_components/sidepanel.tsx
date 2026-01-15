"use client";

import { useState, type FC } from 'react';

export const Sidepanel: FC = () => {
    const [leftVal, setLeftVal] = useState(-16);

    function handleTabClick() {
        setLeftVal(leftVal ^ -16);
    }

    return (
        <div className='fixed z-1 top-1/6 w-16 h-2/3 transition-[left] delay-0 duration-200 ease-in-out' style={{ left: `calc(var(--spacing) * ${leftVal})` }}>
            <div
                className='absolute block rounded-r-lg bottom-4 -right-5 w-5 h-22 bg-(--sidepanel-bg) text-center select-none'
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