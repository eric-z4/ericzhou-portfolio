import type { Metadata } from 'next';
import { getPageMap } from 'nextra/page-map';
import type { FC, ReactNode } from 'react';
import { NextraTheme } from './_components/nextra-theme';
import './globals.css';
import './_themes/force_dark.css';
import './_themes/force_light.css';

export const metadata: Metadata = {
    title: {
        absolute: '',
        template: '%s'
    }
};

const RootLayout: FC<{ children: ReactNode; }> = async ({ children }) => {
    const pageMap = await getPageMap();

    return (
        <html id="" lang="en" dir="ltr">
            <body className='m-0 bg-(--background) text-(--foreground-base) font-["Noto Sans", sans-serif]'>
                <NextraTheme pageMap={pageMap}>{children}</NextraTheme>
            </body>
        </html>
    );
};

export default RootLayout;