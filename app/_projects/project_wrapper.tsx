"use client";

import { useState, type FC } from 'react';
import { projects } from './projects.json';
import Image from 'next/image';
import Link from 'next/link';

const detailHoverFade: string = "opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity";
const gradientBg: string = "bg-linear-to-b from-(--project-fade) from-10% group-hover:from-90% group-focus:from-90% to-transparent to-70% group-hover:to-100% group-focus:to-100%";
const detailTransitionProps: string = "duration-200 ease-in-out";

const ProjectDropdownInfo: FC<{ index: number, title: string, tags: string[], date: string, desc: string; }> = ({ index, title, tags, date, desc }) => {
    return (
        <div className={`absolute inset-x-0 opacity-85 h-full p-2 text-lg text-(--project-text) select-none ${gradientBg} transition-[--tw-gradient-from-position] ${detailTransitionProps}`}>
            <h4 className='opacity-100 wrap-anywhere'>
                {title}
            </h4>
            <div className='inline-block'>
                {tags.map((tag, j) => {
                    return (
                        <span key={tag + index + j} className='mx-1 first:ml-0 last:mr-0 p-1 text-xs text-(--project-text) bg-black rounded-full'>{tag}</span>
                    );
                })}
            </div>
            <hr className={`my-2 ${detailHoverFade} ${detailTransitionProps}`}></hr>
            <p className={`text-sm ${detailHoverFade} ${detailTransitionProps}`}>
                {new Date(date).toLocaleDateString()}
            </p>
            <p className={`wrap-break-word pt-4 text-sm ${detailHoverFade} ${detailTransitionProps}`}>
                {desc}
            </p>
            <p className={`wrap-break-word pt-4 text-sm ${detailHoverFade} ${detailTransitionProps}`}>
                ---
            </p>
        </div>
    );
}

const ProjectOverview: FC = () => {
    
    const [lastClickedDiv, setLastClickedDiv] = useState("");

    function handleNavigateClick(e: {preventDefault: () => void}, text: string, index: number) {
        if (!matchMedia('(pointer: fine)').matches) {
            if (lastClickedDiv !== (text + index)) {
                e.preventDefault();
            }
            setLastClickedDiv(text + index);
        }
    }

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr py-5 gap-3'>
            {projects.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).map((item, i) => {
                return (
                    <Link key={item.title + i} href={'/' + item.route} onNavigate={(e) => handleNavigateClick(e, item.title, i)}>
                        <div
                            id={item.title + i}
                            tabIndex={-1}
                            className='relative group aspect-square w-full overflow-hidden mx-auto outline-3 outline-offset-[calc(var(--spacing)*1)] outline-transparent hover:outline-(--foreground-primary) focus:outline-(--foreground-primary) transition-[outline-color] duration-300 ease-in-out'
                        >
                            <Image
                                src={"/images/" + item.thumbnail}
                                alt={item.title}
                                fill={true}
                                loading="eager"
                                sizes="80vw"
                                className='object-cover'
                            />
                            <ProjectDropdownInfo index={i} title={item.title} tags={item.tags} date={item.date} desc={item.description} />
                            <div className={`absolute w-full text-center bottom-1/8 ${detailHoverFade} ${detailTransitionProps}`}>
                                <p className='text-sm'>Click/tap <span className='pointer-fine:hidden'>again</span> for more details</p>
                            </div>
                        </div>
                    </Link>
                    
                );
            })}
        </div>
    );
};

export default ProjectOverview;