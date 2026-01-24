import { Suspense, type FC } from 'react';

const ArtCarouselVideo: FC<{ content: { name: string, route: string, width: number, height: number; }; }> = ({ content }) => {
    return (
        <div id={content.route} className='relative flex flex-none basis-full snap-always snap-center'>
            <Suspense fallback={<p>Loading...</p>}>
                <iframe
                    width={content.width}
                    height={content.height}
                    src={`${content.route}`}
                    title={content.name}
                    className='w-full h-full'
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading='lazy'
                    allowFullScreen
                />
            </Suspense>
        </div>
    );
};

export default ArtCarouselVideo;