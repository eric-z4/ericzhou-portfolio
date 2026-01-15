"use client";

import { useState, type FC } from 'react';
import { projects } from './projects.json';
import Image from 'next/image';

const ProjectWrapper: FC = () => {
    const [lastClickedDiv, setLastClickedDiv] = useState("");

    function handleProjectClick(text: string, index: number) {
        if (lastClickedDiv === (text + index)) {
            alert(text);
        }
        setLastClickedDiv(text + index);
    }

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr py-5 gap-3'>
            {projects.map((item, i) => {
                return (
                    <div
                        id={item.title + i}
                        key={item.title + i}
                        tabIndex={0}
                        className = 'relative group aspect-square w-full overflow-hidden mx-auto outline-3 outline-transparent hover:outline-(--project-outline) focus:outline-(--project-outline) transition-[outline-color] delay-0 duration-300 ease-in-out' 
                        onClick={() => handleProjectClick(item.title, i)}
                    >
                        <Image
                            src={"/images/" + item.thumbnail}
                            alt=''
                            fill={true}
                            className='object-cover'
                            loading="eager"
                        />
                        <div className='absolute inset-x-0 bg-linear-to-b from-(--project-fade) from-10% group-hover:from-90% group-focus:from-90% to-transparent to-70% group-hover:to-100% group-focus:to-100% opacity-85 h-full p-2 text-lg text-(--project-text) select-none transition-[--tw-gradient-from-position] delay-0 duration-200 ease-in-out'>
                            <h4 className='opacity-100 wrap-anywhere'>
                                {item.title}
                            </h4>
                            <hr className='my-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity delay-0 duration-200 ease-in-out'></hr>
                            <p className='opacity-0 group-hover:opacity-100 group-focus:opacity-100 text-sm transition-opacity delay-0 duration-200 ease-in-out'>
                                {item.date}
                            </p>
                            <p className='opacity-0 group-hover:opacity-100 group-focus:opacity-100 wrap-break-word pt-4 text-sm transition-opacity delay-0 duration-200 ease-in-out'>
                                {item.description}
                            </p>
                        </div>
                        <div className='absolute w-full text-center bottom-1/8'>
                            <p className='opacity-0 group-hover:opacity-100 group-focus:opacity-100 text-sm transition-opacity delay-0 duration-200 ease-in-out'>Click/tap again for more details</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectWrapper;