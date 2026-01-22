'use client';

import { useState, useRef, useEffect, type FC } from 'react';
import { BsCollectionFill, BsFillCaretRightSquareFill } from "react-icons/bs";
import Image from 'next/image';
import { artworks } from './arts.json';

const CarouselVideo: FC<{ id: string, videoRoute: string, videoName: string, videoWidth: number, videoHeight: number; }> = ({ id, videoRoute, videoName, videoWidth, videoHeight }) => {
    return (
        <div id={id} className='flex flex-none basis-full grow-1 h-full snap-always snap-center'>
            <iframe
                width={videoWidth}
                height={videoHeight}
                src={`${videoRoute}`}
                title={videoName}
                className='w-full h-full object-contain bg-transparent'
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
    );
}

const CarouselImage: FC<{ id: string, imageRoute: string, imageAlt: string, imageWidth: number, imageHeight: number; }> = ({ id, imageRoute, imageAlt, imageWidth, imageHeight }) => {
    return (
        <div id={id} className='flex flex-none basis-full grow-1 h-full'>
            <Image
                src={"/images/art_portfolio/" + imageRoute}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                loading="eager"
                className='w-full h-full object-contain bg-transparent snap-always snap-center'
            />
        </div>
    );
}

const ArtGallery: FC = () => {
    const [cardImageIndex, setCardImageIndex] = useState(0);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [cardVisibility, setCardVisibility] = useState(false);
    const content = useRef(artworks[cardImageIndex].carouselContent);

    useEffect(() => {
        if (content.current.length > 0) {
            document.getElementById(content.current[carouselIndex].name + carouselIndex)?.scrollIntoView();
        }
    }, [carouselIndex])

    function handleArtClick(index: number) {
        setCardVisibility(!cardVisibility);
        setCardImageIndex(index < 0 ? cardImageIndex : index);
        if (index >= 0 && index !== cardImageIndex) {
            content.current = artworks[index].carouselContent;
            setCarouselIndex(0);
        }
    }

    function handleScrollClick(index: number) {
        if (index >= 0 && index < content.current.length) {
            setCarouselIndex(index);
        }
    }

    return (
        <div className='columns-1 md:columns-2 xl:columns-3 gap-3'>
            <div
                className='z-1 fixed flex flex-col w-full h-full left-0 top-0 bg-black/30 backdrop-blur-xs transition-opacity duration-300 ease-in-out select-none'
                style={{ opacity: cardVisibility ? 1 : 0, pointerEvents: cardVisibility ? 'auto' : 'none' }}
            >
                <div className='flex grow-1 bg-transparent basis-8' onClick={() => handleArtClick(-1)}></div>
                <div className='flex grow-10 bg-transparent basis-16'>
                    <div className='flex grow-1 bg-transparent basis-0 md:basis-8' onClick={() => handleArtClick(-1)}></div>
                    <div className='flex flex-col grow-1 basis-full md:basis-4/5 bg-(--midground) p-4 rounded-md'>
                        <div
                            className='w-full grow-8 flex basis-32 bg-(--background-main) aspect-16/9 overflow-x-scroll snap-x snap-mandatory scroll-smooth'
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {artworks[cardImageIndex].carouselContent.length === 0 ?
                                <CarouselImage
                                    id={artworks[cardImageIndex].name}
                                    imageRoute={artworks[cardImageIndex].thumbnail}
                                    imageAlt={artworks[cardImageIndex].name}
                                    imageWidth={artworks[cardImageIndex].thumbnailWidth}
                                    imageHeight={artworks[cardImageIndex].thumbnailHeight}
                                /> :
                                artworks[cardImageIndex].carouselContent.map((item, i) => {
                                    return (item.type === "image" ? 
                                        <CarouselImage
                                            key={item.name + i}
                                            id={item.name + i}
                                            imageRoute={item.route}
                                            imageAlt={item.name}
                                            imageWidth={item.width}
                                            imageHeight={item.height}
                                        /> :
                                        <CarouselVideo
                                            key={item.name + i}
                                            id={item.name + i}
                                            videoName={item.name}
                                            videoRoute={item.route}
                                            videoWidth={item.width}
                                            videoHeight={item.height}
                                        />
                                    );
                            })}
                        </div>
                        <div className='w-full shrink-0 basis-fit bg-transparent'>
                            {artworks[cardImageIndex].carouselContent.length === 0 ? <></> :
                                <div className='flex'>
                                    <button className='grow-8 bg-(--midground) text-left border-(--background-main) border-2 rounded-bl-lg active:bg-(--background)' onClick={() => handleScrollClick(carouselIndex - 1)}>
                                        <p className='text-(--foreground-primary) text-lg text-center'>&lt;&lt;</p>
                                    </button>
                                    <div className='flex justify-center items-center gap-2 grow-1 bg-(--midground) border-(--background-main) border-2'>
                                        {artworks[cardImageIndex].carouselContent.map((item, i) => {
                                            return (
                                                <div
                                                    key={item.name + i}
                                                    className='inline-block size-2 flex-none rounded-full transition-[scale, background-color, color] duration-300'
                                                    style={{
                                                        scale: carouselIndex === i ? 1.5 : 1,
                                                        backgroundColor: item.type === 'image' ? carouselIndex === i ? 'var(--foreground-primary)' : 'var(--foreground-base)' : "#0000",
                                                        color: carouselIndex === i ? 'var(--foreground-primary)' : 'var(--foreground-base)'
                                                    }}
                                                >
                                                    {item.type === 'video' ? <BsFillCaretRightSquareFill className='scale-80 -translate-1/4' /> : <></>}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <button className='grow-8 bg-(--midground) text-right border-(--background-main) border-2 rounded-br-lg active:bg-(--background)' onClick={() => handleScrollClick(carouselIndex + 1)}>
                                        <p className='text-(--foreground-primary) text-lg text-center'>&gt;&gt;</p>
                                    </button>
                                </div>
                            }
                            <h2>{artworks[cardImageIndex].name}</h2>
                            <p>{artworks[cardImageIndex].description}</p>
                        </div>
                    </div>
                    <div className='flex grow-1 bg-transparent basis-0 md:basis-8' onClick={() => handleArtClick(-1)}></div>
                </div>
                <div className='flex grow-1 bg-transparent basis-8' onClick={() => handleArtClick(-1)}></div>
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
                                <BsCollectionFill className='mx-auto h-full' />
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