import type { FC } from 'react';

const ProjectPage: FC = () => {
    return (
        <div className='flex h-32 items-center my-auto'>
            <h4 className='inline p-4 border-2 border-transparent border-r-(--midground) text-(--foreground-primary)'>404</h4>
            <h4 className='inline p-4'>This page is unavailable or could not be found</h4>
        </div>
    );
};

export default ProjectPage;
