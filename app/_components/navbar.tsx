'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { PageMapItem } from 'nextra';
import { normalizePages } from 'nextra/normalize-pages';
import type { FC } from 'react';

export const Navbar: FC<{ pageMap: PageMapItem[]; }> = ({ pageMap }) => {
    const pathname = usePathname();
    const { topLevelNavbarItems } = normalizePages({
        list: pageMap,
        route: pathname
    });

    return (
        <div className='flex sticky top-0 z-1 items-center bg-(--head-foot-bg) px-(--outer-padding)'>
            <h2 className='flex grow shrink-0 py-3 md:py-5 m-0'>
                <Link href='/'>Eric Zhou</Link>
            </h2>
            <div className='flex basis-16 shrink-0 h-16 relative peer md:hidden'>
                <input type='checkbox'
                    id='navMenuCheck'
                    name='navMenuCheck'
                    className='absolute inset-0 scale-50 appearance-none bg-transparent cursor-pointer'
                />
                <i className='bi bi-list absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-4xl pointer-events-none' />
            </div> 
            <div className='w-1/2 absolute right-4.5 top-2.5 px-5 py-3 bg-(--midground) invisible peer-has-checked:visible rounded-sm md:w-auto md:static md:top-0 md:px-0 md:pt-7 md:pb-3 md:flex md:bg-transparent md:visible'>
                <div
                    className='block text-right cursor-pointer md:hidden'
                    onClick={() => {
                        const checkbox = document.getElementById('navMenuCheck') as HTMLInputElement;
                        if (checkbox !== null) {
                            checkbox.checked = false;
                        }
                    }}>
                    <i className='bi bi-x-lg text-3xl' />
                </div>
                <ul
                    className='block h-fit text-right list-none text-lg/12 md:flex md:justify-end m-0 md:gap-5 '
                >
                    {topLevelNavbarItems.map(item => {
                        const route = item.route || ('href' in item ? item.href! : '');
                        return (
                            <li key={route}>
                                {pathname == route ?
                                    <Link href={route} className='no-underline opacity-100 text-(--foreground-primary)'>
                                        {item.title}
                                    </Link> :
                                    <Link href={route} className='no-underline opacity-40 transition-opacity delay-0 duration-300 ease-in-out hover:opacity-100'>
                                        {item.title}
                                    </Link>
                                }
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

//pathname == route ? (
//    <li key={route}>
//        <Link href={route} className='no-underline opacity-100 text-(--foreground-primary)'>
//            {item.title}
//        </Link>
//    </li>
//) : (
//    <li key={route}>
        //<Link href={route} className='no-underline opacity-40 transition-opacity delay-0 duration-300 ease-in-out hover:opacity-100'>
        //    {item.title}
        //</Link>
//    </li>
//);