import type { FC } from 'react';

export const Footer: FC = () => {
    return (
        <div className='px-(--outer-padding) bg-(--head-foot-bg) mx-(--outer-margin)'>
            <footer className='p-5'>
                Powered by Nextra {new Date().getFullYear()}
            </footer>
        </div>
    );
};