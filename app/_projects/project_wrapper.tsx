"use client";

import type { FC } from 'react';
import { projects } from './projects.json';
import Image from 'next/image';

const ProjectWrapper: FC = () => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr py-5 gap-5'>
            {projects.map((item, i) => {
                return (
                    <div key={item.title + i} className='relative aspect-square w-full overflow-hidden mx-auto outline-3 outline-transparent hover:outline-(--project-outline) transition-[outline-color] delay-0 duration-300 ease-in-out' onClick={() => alert(item.title)}>
                        <Image
                            src={"/images/" + item.image}
                            alt=''
                            fill={true}
                            className='object-cover'
                            loading="eager" />
                        <div className='absolute flex inset-x-0 bg-linear-to-b from-(--project-fade) from-18% hover:from-90% to-transparent opacity-85 h-1/2 p-2 text-lg text-(--project-text) select-none transition-[--tw-gradient-from-position] delay-0 duration-200 ease-in-out'>
                            <p className='opacity-100 w-1/2 wrap-anywhere'>
                                {item.title}
                            </p>
                            <p className='opacity-100 w-1/2 text-right'>
                                {item.date}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectWrapper;