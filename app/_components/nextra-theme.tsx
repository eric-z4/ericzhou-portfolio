import type { PageMapItem } from 'nextra';
import type { FC, ReactNode } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export const NextraTheme: FC<{
    children: ReactNode;
    pageMap: PageMapItem[];
}> = ({ children, pageMap }) => {
    return (
        <div className='flex h-dvh basis-full'>
            <div className='flex grow-(--sidebar-grow)'></div>
            <div className='flex flex-col h-full grow-(--main-grow)'>
                <Navbar pageMap={pageMap} />
                <div className='flex bg-(--background-page) px-(--outer-padding)'>
                    {children}
                </div>
                <Footer />
            </div>
            <div className='flex grow-(--sidebar-grow)'></div>
        </div>
    );
};