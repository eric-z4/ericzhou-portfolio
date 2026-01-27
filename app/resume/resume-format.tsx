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
                <h4 className='inline'>{res.basics.email}</h4>
            </div>
            <div>
                <InlineIcon bicon='telephone' />
                <h4 className='inline'>{res.basics.phone}</h4>
            </div>
            <div>
                <InlineIcon bicon='geo' />
                <h4 className='inline'>
                    {res.basics.location.city + ', ' + res.basics.location.region + " " + res.basics.location.postalCode}
                </h4>
            </div>
            <div>
                <InlineIcon bicon='house' />
                <h4 className='inline'>
                    <Link href={res.basics.url} className='text-(--resume-fg-primary)'>
                        {res.basics.url}
                    </Link>
                </h4>
            </div>
            <div>
                {res.basics.profiles.map((item, i) => {
                    return (
                        <div key={item.network + i}>
                            <InlineIcon bicon={item.network} />
                            <h4 className='inline'>
                                <Link href={item.url} target="_blank" rel="noopener noreferrer" className='text-(--resume-fg-primary)'>
                                    {item.username}
                                </Link>
                            </h4>
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
                        <li key={item.institution + i} className='relative'>
                            <InlineIcon bicon='diamond-fill' size='sm' />
                            <h4 className='inline' style={{ fontWeight: 600 }}>{item.institution}</h4>
                            <h4 className='hidden lg:inline'>{" --- "}</h4>
                            <h4 className='block indent-5.5 lg:inline lg:indent-0' style={{ fontWeight: 600 }}>{item.studyType + ", " + item.area}</h4>
                            <h4 className='absolute right-0 top-0'>{new Date(item.startDate).getFullYear() + ' - ' + new Date(item.endDate).getFullYear()}</h4>
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

const AwardsBlock: FC<{ className?: string; }> = ({ className = '' }) => {
    return (
        <div className={className}>
            <InlineIcon bicon='award' size='3xl' />
            <h2 className='inline'>Awards</h2>
            <hr></hr>
            <ul className='list-none leading-10'>
                {res.awards.map((item, i) => {
                    return (
                        <li key={item.title + i} className='relative'>
                            <InlineIcon bicon='diamond-fill' size='sm' />
                            <h4 className='inline' style={{ fontWeight: 600 }}>{item.title}</h4>
                            <h4 className='block before:content-[] indent-5.5 lg:inline lg:indent-0 lg:before:content-[",_"]'>{item.awarder}</h4>
                            <h4 className='absolute right-0 top-0'>{item.date}</h4>
                            <p className='max-w-1/2 leading-6 pl-5.5 pt-3 lg:pt-0'>{item.summary}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const ResumeFormat: FC = () => {
    return (
        <div className='bg-(--resume-bg) *:p-6 my-3 grid grid-rows-[auto_1fr] grid-cols-3 *:text-(--resume-fg-base)'>
            <div className='col-span-2 bg-(--resume-mg-1)'>
                <h1 style={{ fontSize: '3.5rem' }}>{res.basics.name}</h1>
                <h2>{res.basics.label}</h2>
            </div>
            <ContactBlock className='bg-(--resume-mg-3)' />
            <InterestBlock className='col-span-1' />
            <SkillsBlock className='col-span-2' />
            <EducationBlock className='col-span-3' />
            <AwardsBlock className='col-span-3' />
        </div>
    );
};

export default ResumeFormat;