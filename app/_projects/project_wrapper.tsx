import type { FC } from 'react';
import { projects } from './projects.json';
import ProjectTemplate from './project_template.mdx';

const ProjectWrapper: FC = () => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr py-5 gap-5'>
            {projects.map((item, i) => {
                return (
                    <ProjectTemplate
                        key={i + item.image}
                        image={'/images/' + item.image}
                        title={item.title}
                    />);
            })}
        </div>
    );
};

export default ProjectWrapper;