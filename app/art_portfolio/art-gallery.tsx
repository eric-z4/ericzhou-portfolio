import type { FC } from 'react';
import Image from 'next/image';
import { artworks } from './arts.json';

const ArtGallery: FC = () => {
    return (
        <div className='columns-1 md:columns-2 xl:columns-3 gap-3'>
            {artworks.map((item, i) => {
                return (
                    <div key={item.name + i} className="relative inline-block mb-2">
                        <Image
                            src={"/images/art_portfolio/" + item.image}
                            alt=''
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