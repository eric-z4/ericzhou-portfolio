"use client";

import { useState, type FC } from 'react';
import { projects } from './projects.json';
import Image from 'next/image';
import Link from 'next/link';

const ProjectWrapper: FC = () => {
    const detailHoverFade: string = "opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity";
    const gradientBg: string = "bg-linear-to-b from-(--project-fade) from-10% group-hover:from-90% group-focus:from-90% to-transparent to-70% group-hover:to-100% group-focus:to-100%";
    const detailTransitionProps: string = "delay-0 duration-200 ease-in-out";
    const [lastClickedDiv, setLastClickedDiv] = useState("");

    function handleNavigateClick(e: {preventDefault: () => void}, text: string, index: number) {
        if (matchMedia('(pointer: fine)').matches) {
            console.log(text);
        } else {
            if (lastClickedDiv === (text + index)) {
                console.log(text);
            } else {
                e.preventDefault();
            }
            setLastClickedDiv(text + index);
        }
    }

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr py-5 gap-3'>
            {projects.map((item, i) => {
                return (
                    <Link key={item.title + i} href={item.route} onNavigate={(e) => handleNavigateClick(e, item.title, i)}>
                        <div
                            id={item.title + i}
                            tabIndex={-1}
                            className='relative group aspect-square w-full overflow-hidden mx-auto outline-3 outline-transparent hover:outline-(--foreground-primary) focus:outline-(--foreground-primary) transition-[outline-color] delay-0 duration-300 ease-in-out'
                        >
                            <Image
                                src={"/images/" + item.thumbnail}
                                alt=''
                                fill={true}
                                loading="eager"
                                sizes="80vw"
                                className='object-cover'
                            />
                            <div className={`absolute inset-x-0 opacity-85 h-full p-2 text-lg text-(--project-text) select-none ${gradientBg} transition-[--tw-gradient-from-position] ${detailTransitionProps}`}>
                                <h4 className='opacity-100 wrap-anywhere'>
                                    {item.title}
                                </h4>
                                <hr className={`my-2 ${detailHoverFade} ${detailTransitionProps}`}></hr>
                                <p className={`text-sm ${detailHoverFade} ${detailTransitionProps}`}>
                                    {item.date}
                                </p>
                                <p className={`wrap-break-word pt-4 text-sm ${detailHoverFade} ${detailTransitionProps}`}>
                                    {item.description}
                                </p>
                            </div>
                            <div className={`pointer-fine:hidden absolute w-full text-center bottom-1/8 ${detailHoverFade} ${detailTransitionProps}`}>
                                <p className='text-sm'>Click/tap again for more details</p>
                            </div>
                        </div>
                    </Link>
                    
                );
            })}
        </div>
    );
};

export default ProjectWrapper;