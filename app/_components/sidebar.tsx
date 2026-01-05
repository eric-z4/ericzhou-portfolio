'use client';

import { usePathname } from 'next/navigation';
import type { PageMapItem } from 'nextra';
import { Anchor } from 'nextra/components';
import { normalizePages } from 'nextra/normalize-pages';
import type { FC } from 'react';

export const Sidebar: FC<{ pageMap: PageMapItem[]; }> = ({ pageMap }) => {
    const pathname = usePathname();
    const { docsDirectories } = normalizePages({
        list: pageMap,
        route: pathname
    });

    return (
        <div
            className='p-5 bg-green-400'
        >
            <h3>Sidebar</h3>
            <ul
                className='m-0 p-0 gap-5 flex flex-col list-none'
            >
                {docsDirectories.map(function renderItem(item) {
                    const route =
                        item.route || ('href' in item ? (item.href as string) : '');
                    const { title } = item;
                    return (
                        <li
                            key={route}
                            className='py-[4px] pr-[4px] pl-[10px] border-1 border-solid'
                        >
                            {'children' in item ? (
                                <details>
                                    <summary>{title}</summary>
                                    {item.children.map(child => renderItem(child))}
                                </details>
                            ) : (
                                <Anchor href={route} className='decoration-solid'>
                                    {title}
                                </Anchor>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};