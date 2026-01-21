'use client';

import { useState, type FC } from 'react';
import { BsPlusLg } from "react-icons/bs";
import Image from 'next/image';
import { artworks } from './arts.json';

const CarouselVideo: FC<{ videoRoute: string, videoName: string, videoWidth: number, videoHeight: number; }> = ({ videoRoute, videoName, videoWidth, videoHeight }) => {
    return (
        <div className='flex basis-32 grow-1 h-full'>
            <iframe
                width={videoWidth}
                height={videoHeight}
                src={`${videoRoute};controls=0`}
                title={videoName}
                className='w-full h-full object-contain bg-zinc-800'
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
    );
}

const CarouselImage: FC<{ imageName: string, imageRoute: string, imageAlt: string, imageWidth: number, imageHeight: number; }> = ({ imageName, imageRoute, imageAlt, imageWidth, imageHeight }) => {
    return (
        <div className='flex basis-32 grow-1 h-full'>
            <Image
                src={"/images/art_portfolio/" + imageRoute}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                loading="eager"
                className='w-full h-full object-contain bg-zinc-800'
            />
        </div>
    );
}

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
                className='z-1 fixed flex flex-col w-full h-full left-0 top-0 bg-black/30 backdrop-blur-xs transition-opacity duration-300 ease-in-out select-none'
                style={{ opacity: cardVisibility ? 1 : 0, pointerEvents: cardVisibility ? 'auto' : 'none' }}
                onClick={() => handleArtClick(-1)}
            >
                <div className='flex grow-1 bg-transparent basis-8'></div>
                <div className='flex grow-10 bg-transparent basis-16'>
                    <div className='w-full md:w-4/5 md:mx-auto flex flex-col bg-(--midground) p-4 rounded-md'>
                        <div className='w-full grow-8 flex basis-32 bg-blue-100 aspect-16/9 overflow-x-auto'>
                            <div className='flex shrink-0 h-full' style={{ flexBasis: `${Math.max(100 * artworks[cardImageIndex].carouselContent.length, 100)}%` }}>
                                {artworks[cardImageIndex].carouselContent.length === 0 ?
                                    <CarouselImage
                                        imageName={artworks[cardImageIndex].name}
                                        imageRoute={artworks[cardImageIndex].thumbnail}
                                        imageAlt={artworks[cardImageIndex].name}
                                        imageWidth={artworks[cardImageIndex].thumbnailWidth}
                                        imageHeight={artworks[cardImageIndex].thumbnailHeight}
                                    /> :
                                    artworks[cardImageIndex].carouselContent.map((item, i) => {
                                        return (item.type === "image" ? 
                                            <CarouselImage
                                                key={item.name + i}
                                                imageName={item.name}
                                                imageRoute={item.route}
                                                imageAlt={item.name}
                                                imageWidth={item.width}
                                                imageHeight={item.height}
                                            /> :
                                            <CarouselVideo
                                                key={item.name + i}
                                                videoName={item.name}
                                                videoRoute={item.route}
                                                videoWidth={item.width}
                                                videoHeight={item.height}
                                            />
                                        );
                                })}
                            </div>
                        </div>
                        <div className='w-full shrink-0 basis-fit bg-transparent'>
                            <h2>{artworks[cardImageIndex].name}</h2>
                            <p>{artworks[cardImageIndex].description}</p>
                        </div>
                    </div>
                </div>
                <div className='flex grow-1 bg-transparent basis-8'></div>
            </div>
            {artworks.map((item, i) => {
                return (
                    <div key={item.name + i} className="inline-block relative mb-2 cursor-zoom-in" onClick={() => handleArtClick(i)}>
                        <Image
                            src={"/images/art_portfolio/" + item.thumbnail}
                            alt={item.name}
                            width={item.thumbnailWidth}
                            height={item.thumbnailHeight}
                            loading="eager"
                        />
                        {item.carouselContent.length > 0 ?
                            <div className='absolute bg-black/40 size-8 right-2 bottom-2 rounded-full'>
                                <BsPlusLg className='mx-auto h-full' />
                            </div> :
                            <></>
                        }
                    </div>
                )
            })}
        </div>
    );
};

export default ArtGallery;