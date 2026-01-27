import { Suspense, type FC } from 'react';

const VideoComp: FC<{ src: string; title: string, className?: string; }> = ({ src, title, className='w-64 h-auto aspect-video' }) => {
    return (
        <div className={className}>
            <Suspense fallback={<p>Loading...</p>}>
                <iframe
                    src={src}
                    title={title}
                    className='w-full h-full'
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading='lazy'
                    allowFullScreen
                />
            </Suspense>
        </div>
    )
};

export default VideoComp;