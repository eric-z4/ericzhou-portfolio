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
        <div className='flex bg-(--head-foot-bg) px-(--outer-padding) mx-(--outer-margin)'>
            <h1 className='flex-auto justify-left p-5 m-0'>Eric Zhou</h1>
            <ul
                className='flex justify-right p-5 m-0 gap-5 list-none'
            >
                {topLevelNavbarItems.map(item => {
                    const route = item.route || ('href' in item ? item.href! : '');
                    return (
                        <li key={route}>
                            <Anchor href={route} style={{ textDecoration: 'none' }}>
                                {item.title}
                            </Anchor>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};