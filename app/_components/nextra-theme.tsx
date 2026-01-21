import type { PageMapItem } from 'nextra';
import type { FC, ReactNode } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';
import { Sidepanel } from './sidepanel';

const SideMargin: FC = () => {
    return (<div className='hidden xl:flex basis-(--sidebar-basis) bg-none'></div>);
}

export const NextraTheme: FC<{
    children: ReactNode;
    pageMap: PageMapItem[];
}> = ({ children, pageMap }) => {
    return (
        <div className='flex min-h-dvh h-auto basis-full'>
            <Sidepanel />
            <SideMargin />
            <div className='flex flex-col xl:basis-(--main-basis) basis-full'>
                <Navbar pageMap={pageMap} />
                <div className='flex grow py-2 bg-(--background-main) px-(--outer-padding)'>
                    {children}
                </div>
                <Footer />
            </div>
            <SideMargin />
        </div>
    );
};