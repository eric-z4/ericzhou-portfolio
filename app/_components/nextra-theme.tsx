import type { PageMapItem } from 'nextra';
import type { FC, ReactNode } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export const NextraTheme: FC<{
    children: ReactNode;
    pageMap: PageMapItem[];
}> = ({ children, pageMap }) => {
    return (
        <>
            <Navbar pageMap={pageMap} />
            <div className='flex px-(--outer-padding) mx-(--outer-margin)'>
                {children}
            </div>
            <Footer />
        </>
    );
};