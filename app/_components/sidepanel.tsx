"use client";

import { useState, type FC } from 'react';
import { themes } from '../_themes/themes.json';

export const SidepanelThemeButton: FC<{ bg: string, themeName: string; }> = ({ bg, themeName }) => {
    const circularDiv: string = "flex aspect-square rounded-full relative";
    const circularInput: string = "-m-1 aspect-square rounded-full appearance-none cursor-pointer";
    const borderDiv: string = "border-2 border-black";
    const borderInput: string = "opacity-0 checked:opacity-100 hover:not-checked:opacity-100 border-2 border-(--foreground-primary) checked:border-y-(--foreground-primary) checked:border-x-transparent transition-opacity duration-400";

    function handleThemeChangeClick(newTheme: string) {
        document.documentElement.id = newTheme;
    }

    return (
        <div className={`${circularDiv} ${borderDiv} ${bg}`}>
            {themeName === "" ? (
                <input
                    type='radio'
                    name='themeRadio'
                    className={`${circularInput} ${borderInput} checked:animate-slow-spin`}
                    onClick={() => handleThemeChangeClick(themeName)}
                    defaultChecked={true}
                >
                </input>
            ) : (
                <input
                    type='radio'
                    name='themeRadio'
                    className={`${circularInput} ${borderInput} checked:animate-slow-spin`}
                    onClick={() => handleThemeChangeClick(themeName)}
                >
                </input>
            )}
        </div>
    )
}

export const Sidepanel: FC = () => {
    const [leftVal, setLeftVal] = useState(-16);

    function handleTabClick() {
        setLeftVal(leftVal ^ -16);
    }

    return (
        <div className='fixed z-1 top-1/6 w-14 md:w-16 h-2/3 transition-[left] delay-0 duration-200 ease-in-out' style={{ left: `calc(var(--spacing) * ${leftVal})` }}>
            <div
                className='absolute block rounded-r-lg bottom-4 -right-5 w-5 h-22 bg-(--sidepanel-bg) text-center select-none'
                onClick={handleTabClick}
            >
                &gt;
            </div>
            <div className='relative h-full'>
                <div className='absolute bottom-0 flex flex-col-reverse w-14 md:w-16 rounded-r-lg gap-3 p-2 bg-(--sidepanel-bg)'>
                    <p className='text-sm'>Themes</p>
                    {themes.map((theme, i) => {
                        return <SidepanelThemeButton
                            key={theme.name + i}
                            bg={theme.classBg}
                            themeName={theme.name}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};