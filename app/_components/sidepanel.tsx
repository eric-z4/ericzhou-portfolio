"use client";

import { useState, type FC } from 'react';

export const Sidepanel: FC = () => {
    const [leftVal, setLeftVal] = useState(-16);

    function handleTabClick() {
        setLeftVal(leftVal ^ -16);
    }

    function handleThemeChangeClick(newTheme: string) {
        document.documentElement.id = newTheme;
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
                <div className='absolute bottom-0 flex flex-col-reverse w-16 rounded-r-lg gap-3 p-2 bg-(--sidepanel-bg) overflow-hidden'>
                    <div
                        className='flex aspect-square rounded-full border-2 border-black bg-linear-to-br from-zinc-300 from-48% to-zinc-800 to-52%'
                        onClick={() => handleThemeChangeClick("")}
                    >
                    </div>
                    <div
                        className='flex aspect-square rounded-full border-2 border-black bg-radial-[at_25%_25%] from-zinc-600 from-45% to-zinc-900 to-50%'
                        onClick={() => handleThemeChangeClick("force-dark")}
                    >
                    </div>
                    <div
                        className='flex aspect-square rounded-full border-2 border-black bg-radial-[at_25%_25%] from-white from-45% to-zinc-400 to-50%'
                        onClick={() => handleThemeChangeClick("force-light")}
                    >
                    </div>
                </div>
            </div>
        </div>
    );
};