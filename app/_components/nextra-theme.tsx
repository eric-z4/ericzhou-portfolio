import type { PageMapItem } from 'nextra';
import type { FC, ReactNode } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export const NextraTheme: FC<{
    children: ReactNode;
    pageMap: PageMapItem[];
}> = ({ children, pageMap }) => {
    return (
        <div className='flex min-h-dvh h-auto basis-full'>
            <div className='hidden lg:flex grow-(--sidebar-grow) bg-(--background-sides)'></div>
            <div className='flex flex-col h-full grow-(--main-grow)'>
                <Navbar pageMap={pageMap} />
                <div className='flex grow bg-(--background-main) px-(--outer-padding)'>
                    {children}
                </div>
                <Footer />
            </div>
            <div className='hidden lg:flex grow-(--sidebar-grow) bg-(--background-sides)'></div>
        </div>
    );
};