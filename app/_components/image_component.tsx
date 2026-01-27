import { Suspense, type FC } from 'react';
import Image from 'next/image';

const ImageComp: FC<{ src: string; alt: string, className?: string; }> = ({ src, alt, className = 'w-64 h-auto aspect-video' }) => {
    return (
        <div className={`relative ${className}`}>
            <Suspense fallback={<p>Loading...</p>}>
                <Image
                    src={"/images/" + src}
                    alt={alt}
                    fill={true}
                    sizes="(max-width: 40rem) 70vw, (max-width: 80rem) 85vw, 100vw"
                    loading="lazy"
                    className='object-contain max-h-full'
                />
            </Suspense>
        </div>
    );
};

export default ImageComp;