import type { FC } from 'react';

export const Footer: FC = () => {
    return (
        <div className='flex px-(--outer-padding) bg-(--head-foot-bg)'>
            <footer className='p-5'>
                Powered by Nextra {new Date().getFullYear()}
            </footer>
        </div>
    );
};