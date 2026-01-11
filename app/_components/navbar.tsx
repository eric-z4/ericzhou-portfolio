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
        <div className='flex items-baseline bg-(--head-foot-bg) px-(--outer-padding)'>
            <h2 className='flex grow shrink-0 py-3 md:py-5 m-0'><Link href='/'>Eric Zhou</Link></h2>
            <ul
                className='flex py-3 md:py-5 m-0 gap-5 list-none'
            >
                {topLevelNavbarItems.map(item => {
                    const route = item.route || ('href' in item ? item.href! : '');
                    // Current route if true
                    return pathname == route ? (
                        <li key={route}>
                            <Link href={route} className='no-underline opacity-100'>
                                {item.title}
                            </Link>
                        </li>
                    ) : (
                        <li key={route}>
                            <Link href={route} className='no-underline opacity-40 transition-opacity delay-0 duration-300 ease-in-out hover:opacity-100'>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};