import { type FC } from 'react';
import Link from 'next/link';
import * as res from './resume.json';

const InlineIcon: FC<{ bicon: string, size?: string, className?: string; }> = ({ bicon, size = 'xl', className = '' }) => {
    return <i className={`bi bi-${bicon} text-(--resume-fg-primary) text-${size} pr-2 ${className}`} />;
}

const ContactBlock: FC<{className?: string}> = ({className=''}) => {
    return (
        <div className={className}>
            <div>
                <InlineIcon bicon='envelope' />
                <h3 className='inline'>{res.basics.email}</h3>
            </div>
            <div>
                <InlineIcon bicon='geo' />
                <h3 className='inline'>
                    {res.basics.location.city + ', ' + res.basics.location.region}
                </h3>
            </div>
            <div>
                <InlineIcon bicon='house' />
                <h3 className='inline'>
                    <Link href={res.basics.url}>
                        {res.basics.url}
                    </Link>
                </h3>
            </div>
            <div>
                {res.basics.profiles.map((item, i) => {
                    return (
                        <div key={item.network + i}>
                            <InlineIcon bicon={item.network} />
                            <h3 className='inline'>
                                <Link href={item.url}>
                                    {item.username}
                                </Link>
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const InterestBlock: FC<{ className?: string; }> = ({ className = '' }) => {
    return (
        <div className={className}>
            <InlineIcon bicon='fire' size='3xl' />
            <h2 className='inline'>Interests</h2>
            <hr></hr>
            <ul className='list-none leading-10'>
                {res.interests.map((item, i) => {
                    return (
                        <li key={item.name + i}>
                            <InlineIcon bicon='diamond-fill' size='sm' />
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const SkillsBlock: FC<{ className?: string; }> = ({ className = '' }) => {
    return (
        <div className={className}>
            <InlineIcon bicon='lightbulb' size='3xl' />
            <h2 className='inline'>Skills</h2>
            <hr></hr>
            <ul className='list-none leading-10'>
                {res.skills.map((item, i) => {
                    return (
                        <li key={item.name + i}>
                            <InlineIcon bicon='diamond-fill' size='sm' />
                            <span className='font-bold'>{item.name + ': '}</span>
                            {item.keywords.map((word, j) => {
                                return (<span key={word + j} className={j < item.keywords.length - 1 ? 'after:content-[",_"]' : ''}> { word }</span>);
                            })}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const EducationBlock: FC<{ className?: string; }> = ({ className = '' }) => {
    return (
        <div className={className}>
            <InlineIcon bicon='mortarboard' size='3xl' />
            <h2 className='inline'>Education</h2>
            <hr></hr>
            <ul className='list-none leading-10'>
                {res.education.map((item, i) => {
                    return (
                        <li key={item.institution + i}>
                            <InlineIcon bicon='diamond-fill' size='sm' />
                            <h3 className='inline' style={{ fontWeight: 600 }}>{item.institution}</h3>
                            <h3 className='inline'>{" --- " + item.studyType + ", " + item.area}</h3>
                            <ul className='list-none leading-6 indent-4'>
                                {item.courses.map((course, j) => {
                                    return (
                                        <li key={course + j}>
                                            <InlineIcon bicon='circle-fill' size='xs' />
                                            {course}
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const ResumeFormat: FC = () => {
    return (
        <div className='bg-(--resume-bg) *:p-3 my-3 grid grid-rows-[auto_1fr] grid-cols-3 *:text-(--resume-fg-base)'>
            <div className='col-span-2 bg-(--resume-mg-1)'>
                <h1>{res.basics.name}</h1>
                <h2>{res.basics.label}</h2>
            </div>
            <ContactBlock className='bg-(--resume-mg-3)' />
            <InterestBlock className='col-span-1' />
            <SkillsBlock className='col-span-2' />
            <EducationBlock className='col-span-3' />
        </div>
    );
};

export default ResumeFormat;