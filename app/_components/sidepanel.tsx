"use client";

import { useState, type FC } from 'react';
import { themes } from '../_themes/themes.json';

const circularDiv: string = "flex aspect-square rounded-full relative";
const circularInput: string = "absolute inset-0 m-0 rounded-full appearance-none bg-transparent cursor-pointer";
const borderDiv: string = "border-2 border-black";
const borderInput: string = "opacity-0 checked:opacity-100 hover:not-checked:opacity-100 border-2 border-(--foreground-primary) checked:border-y-(--foreground-primary) checked:border-x-transparent transition-opacity duration-400";
const tooltipClass: string = "absolute w-max p-1 top-1/2 left-[125%] -translate-y-1/2 bg-black rounded-sm text-sm select-none";
const tooltipArrow: string = "before:absolute before:top-1/2 before:-ml-3 before:-translate-y-1/2 before:border-4 before:border-r-black before:border-y-transparent before:border-l-transparent";

export const SidepanelThemeButton: FC<{ bg: string, themeName: string, tooltip: string, toggleTooltip: string; }> = ({ bg, themeName, tooltip, toggleTooltip }) => {
    function handleThemeChangeClick(newTheme: string) {
        document.documentElement.id = newTheme;
    }

    return (
        <div className={`${circularDiv} ${borderDiv} ${bg}`}>
            <input
                type='radio'
                name='themeRadio'
                className={`${circularInput} ${borderInput} checked:animate-slow-spin peer`}
                onClick={() => handleThemeChangeClick(themeName)}
                defaultChecked={themeName === "" ? true : false}
            >     
            </input>
            <div className={`${tooltipClass} ${tooltipArrow} text-white opacity-0 hover:opacity-80 transition-opacity duration-300 ease-in-out pointer-events-none ${toggleTooltip}`}>
                {tooltip}
            </div>
        </div>
    )
}

export const Sidepanel: FC = () => {
    const [tooltipToggle, setTooltipToggle] = useState("");
    const [leftVal, setLeftVal] = useState(-14);

    function handleTabClick() {
        setLeftVal(leftVal ^ -14);
        if (tooltipToggle === "") {
            setTooltipToggle("peer-checked:opacity-80");
        } else {
            setTooltipToggle("");
        };
    }

    return (
        <div className='fixed z-1 top-1/6 w-14 h-2/3 transition-[left] duration-200 ease-in-out' style={{ left: `calc(var(--spacing) * ${leftVal})` }}>
            <div
                className='absolute block rounded-r-lg bottom-4 -right-5 w-5 h-22 bg-(--sidepanel-bg) text-center select-none'
                onClick={handleTabClick}
            >
                &gt;
            </div>
            <div className='relative h-full'>
                <div className='absolute bottom-0 flex flex-col-reverse w-14 rounded-r-lg gap-3 p-2 bg-(--sidepanel-bg)'>
                    <p className='text-xs'>Themes</p>
                    {themes.map((theme, i) => {
                        return <SidepanelThemeButton
                            key={theme.name + i}
                            bg={theme.classBg}
                            themeName={theme.name}
                            tooltip={theme.tooltip}
                            toggleTooltip={tooltipToggle}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};