import type { FC, ReactNode } from 'react';
import Link from 'next/link';

const LinkComp: FC<{ src: string, children: ReactNode, className?: string; }> = ({ src, children, className = '' }) => {
    return (
        <Link href={src} target="_blank" rel="noopener noreferrer" className={`text-(--resume-fg-primary) + ${className}`}>
            {children}
            <i className='bi bi-arrow-up-right' />
        </Link>
    );
};

export default LinkComp;