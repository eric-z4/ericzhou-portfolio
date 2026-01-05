import type { Metadata } from 'next';
import { getPageMap } from 'nextra/page-map';
import type { FC, ReactNode } from 'react';
import { NextraTheme } from './_components/nextra-theme';
import './globals.css';

export const metadata: Metadata = {
    title: {
        absolute: '',
        template: '%s - Nextra'
    }
};

const RootLayout: FC<{ children: ReactNode; }> = async ({ children }) => {
    const pageMap = await getPageMap();
    return (
        <html lang="en" dir="ltr">
            <body className='m-0'>
                <NextraTheme pageMap={pageMap}>{children}</NextraTheme>
            </body>
        </html>
    );
};

export default RootLayout;