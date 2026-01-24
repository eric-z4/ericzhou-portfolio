import { Dispatch, useState, useEffect, type FC } from 'react';
import { artworks } from '../art_portfolio/arts.json';
import ArtCarouselImage from './art-carousel-image';
import ArtCarouselVideo from './art-carousel-video';

const ArtCarousel: FC<{ artIndex: number, isVisible: boolean; setVisible: Dispatch<boolean>; }> = ({ artIndex, isVisible, setVisible }) => {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const content = artworks[artIndex].carouselContent;
        if (content.length > 0) {
            document.getElementById(content[scrollPos].route)?.scrollIntoView();
        }
    }, [artIndex, scrollPos])

    function setCarousel(index: number) {
        if (index >= 0 && index < artworks[artIndex].carouselContent.length) {
            setScrollPos(index);
        }
    }

    function shiftCarousel(moveAmt: number) {
        const newScrollPos = scrollPos + moveAmt;
        if (newScrollPos >= 0 && newScrollPos < artworks[artIndex].carouselContent.length) {
            setScrollPos(newScrollPos);
        }
    }

    return (
        <div className='fixed z-1 inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300 ease-in-out' style={{ opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? 'auto' : 'none' }}>
            <div className='fixed inset-0 cursor-zoom-out' onClick={() => { setVisible(false); setCarousel(0) }}></div>
            <div className='fixed inset-x-0 md:inset-x-32 inset-y-18 md:inset-y-27 flex flex-col py-4 md:px-4 bg-(--midground) rounded-md'>
                <div
                    id='carousel-scroll-box'
                    className='flex flex-initial basis-7/8 max-h-7/8 bg-(--background-main) overflow-x-scroll snap-x snap-mandatory scroll-smooth touch-none'
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {artworks[artIndex].carouselContent.length === 0 ?
                        <ArtCarouselImage
                            content={{
                                name: artworks[artIndex].name,
                                route: artworks[artIndex].thumbnail,
                                width: artworks[artIndex].thumbnailWidth,
                                height: artworks[artIndex].thumbnailHeight
                            }}
                        /> : artworks[artIndex].carouselContent.map((item, i) => {
                            return (
                                item.type === 'image' ?
                                    <ArtCarouselImage key={item.name + i} content={item} /> :
                                    <ArtCarouselVideo key={item.name + i} content={item} />
                            )
                        })
                    }
                </div>
                <div className='basis-1/8 bg-(--midground)'>
                    {artworks[artIndex].carouselContent.length === 0 ? <></> :
                        <div className='flex'>
                            <button className='basis-4/10 border-2 border-(--background-main) text-(--foreground-primary) rounded-bl-md cursor-pointer hover:bg-(--background) active:bg-(--background-main)' onClick={() => shiftCarousel(-1)}>&lt;&lt;</button>
                            <div className='flex justify-center items-center basis-2/10 gap-1 border-2 border-(--background-main)'>
                                {artworks[artIndex].carouselContent.map((item, i) => {
                                    return (
                                        <i
                                            key={item.name + i}
                                            className={`bi ${item.type === 'image' ? 'bi-circle-fill' : 'bi-caret-right-square-fill'} transition-[scale, color] duration-300 ease-in-out`}
                                            style={scrollPos === i ? {
                                                scale: 1,
                                                color: 'var(--foreground-primary)'
                                            } : {
                                                scale: 0.8,
                                                color: 'var(--foreground-base)'
                                            }}
                                        />
                                    );
                                })}
                            </div>
                            <button className='basis-4/10 border-2 border-(--background-main) text-(--foreground-primary) rounded-br-md cursor-pointer hover:bg-(--background) active:bg-(--background-main)' onClick={() => shiftCarousel(1)}>&gt;&gt;</button>
                        </div>
                    }
                    <div className='mx-4 md:mx-0'>
                        <h2>{artworks[artIndex].name}</h2>
                        <p>{artworks[artIndex].description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtCarousel;