import type { FC } from 'react';
import { projects } from './projects.json';
import ProjectTemplate from './project_template.mdx';

const ProjectWrapper: FC = () => {
    return (
        <div className='flex py-5 gap-5'>
            {projects.map((item, i) => {
                return (
                    <ProjectTemplate
                        key={i + item.image}
                        image={'/images/' + item.image}
                    />);
            })}
        </div>
    );
};

export default ProjectWrapper;