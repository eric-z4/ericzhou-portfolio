import type { FC } from 'react';

export const Footer: FC = () => {
    return (
        <div className='flex px-(--outer-padding) bg-(--head-foot-bg)'>
            <footer className='text-xs md:text-sm py-3 md:py-5'>
                Last Updated: January 2026
            </footer>
            <footer className='text-xs md:text-sm py-3 md:py-5 ml-auto'>
                Powered by Nextra {new Date().getFullYear()}
            </footer>
        </div>
    );
};