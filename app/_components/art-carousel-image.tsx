import { Suspense, type FC } from 'react';
import Image from 'next/image';

const ArtCarouselImage: FC<{ content: { name: string, route: string, width: number, height: number }; }> = ({ content }) => {
    return (
        <div id={content.route} className='flex flex-none basis-full'>
            <Suspense fallback={<p>Loading...</p>}>
                <Image
                    src={"/images/art_portfolio/" + content.route}
                    alt={content.name}
                    width={content.width}
                    height={content.height}
                    loading="lazy"
                    className='object-contain mx-auto snap-always snap-center'
                />
            </Suspense>
        </div>
    );
};

export default ArtCarouselImage;