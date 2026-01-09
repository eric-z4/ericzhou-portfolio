import type { FC } from 'react';
import dynamic from 'next/dynamic';

const ProjectWrapper: FC = () => {
    const ProjectA = dynamic(() => import('./test_project.mdx'));

    return (
        <>
            <ProjectA />

        </>
    );
};

export default ProjectWrapper;