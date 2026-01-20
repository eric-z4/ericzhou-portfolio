'use client';

import { useState, type FC } from 'react';
import Image from 'next/image';
import { artworks } from './arts.json';

const ArtGallery: FC = () => {
    const [cardImageIndex, setCardImageIndex] = useState(0);
    const [cardVisibility, setCardVisibility] = useState(false);

    function handleArtClick(index : number) {
        setCardVisibility(!cardVisibility);
        setCardImageIndex(index < 0 ? cardImageIndex : index);
    }

    return (
        <div className='columns-1 md:columns-2 xl:columns-3 gap-3'>
            <div
                className='z-1 fixed w-full h-full left-0 top-0 bg-black/30 backdrop-blur-xs transition-opacity duration-300 ease-in-out select-none'
                style={{ opacity: cardVisibility ? 1 : 0, pointerEvents: cardVisibility ? 'auto' : 'none' }}
                onClick={() => handleArtClick(-1)}
            >
                <div className='fixed max-w-full md:max-w-3/4 xl:max-w-4/5 scale-[1.5] md:scale-[1.2] xl:scale-[1] p-2 md:p-4 rounded-md bg-(--midground) -translate-1/2 top-1/2 left-1/2'>
                    <Image
                        src={"/images/art_portfolio/" + artworks[cardImageIndex].image}
                        alt={artworks[cardImageIndex].name}
                        width={artworks[cardImageIndex].imageWidth}
                        height={artworks[cardImageIndex].imageHeight}
                        loading="eager"
                    />
                    <h2 className=''>{artworks[cardImageIndex].name}</h2>
                    <div className='text-sm'>{artworks[cardImageIndex].description}</div>
                </div>
            </div>
            {artworks.map((item, i) => {
                return (
                    <div key={item.name + i} className="relative inline-block mb-2 cursor-zoom-in" onClick={() => handleArtClick(i)}>
                        <Image
                            src={"/images/art_portfolio/" + item.image}
                            alt={item.name}
                            width={1200}
                            height={1200}
                            loading="eager"
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default ArtGallery;