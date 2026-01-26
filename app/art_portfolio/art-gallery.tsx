'use client';

import { useState, type FC } from 'react';
import Image from 'next/image';
import { artworks } from './arts.json';
import ArtCarousel from '../_components/art-carousel';

const ArtGallery: FC = () => {
    const [cardImageIndex, setCardImageIndex] = useState(0);
    const [cardVisibility, setCardVisibility] = useState(false);

    return (
        <div className='columns-1 md:columns-2 xl:columns-3 gap-3'>
            <ArtCarousel artIndex={cardImageIndex} isVisible={cardVisibility} setVisible={setCardVisibility} />
            {artworks.map((item, i) => {
                return (
                    <div key={item.name + i} className="inline-block relative mb-2 cursor-zoom-in" onClick={() => { setCardImageIndex(i); setCardVisibility(true); }}>
                        <Image
                            src={"/images/art_portfolio/" + item.thumbnail}
                            alt={item.name}
                            width={item.thumbnailWidth}
                            height={item.thumbnailHeight}
                            loading="eager"
                        />
                        {item.carouselContent.length > 0 ?
                            <div className='absolute bg-black/40 size-8 right-2 bottom-2 rounded-full'>
                                <i className='bi bi-collection-fill inline-block w-full h-full text-center align-sub scale-90 text-(--project-text)'></i>
                            </div> :
                            <></>
                        }
                    </div>
                );
            })}
        </div>
    );
};

export default ArtGallery;