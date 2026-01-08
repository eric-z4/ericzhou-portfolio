'use client';

import { usePathname } from 'next/navigation';
import type { PageMapItem } from 'nextra';
import { Anchor } from 'nextra/components';
import { normalizePages } from 'nextra/normalize-pages';
import type { FC } from 'react';

export const Navbar: FC<{ pageMap: PageMapItem[]; }> = ({ pageMap }) => {
    const pathname = usePathname();
    const { topLevelNavbarItems } = normalizePages({
        list: pageMap,
        route: pathname
    });

    return (
        <div className='flex items-center bg-(--head-foot-bg) px-(--outer-padding)'>
            <h2 className='flex grow shrink-0 p-5 m-0'>Eric Zhou</h2>
            <ul
                className='flex p-5 m-0 gap-5 list-none'
            >
                {topLevelNavbarItems.map(item => {
                    const route = item.route || ('href' in item ? item.href! : '');
                    return (
                        <li key={route}>
                            <Anchor href={route} className='no-underline'>
                                {item.title}
                            </Anchor>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};