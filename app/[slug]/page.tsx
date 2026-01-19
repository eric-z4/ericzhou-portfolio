import type { Metadata } from 'next';
import type { FC } from 'react';
import { notFound } from 'next/navigation';
import { useMDXComponents as getMDXComponents } from '../../mdx-components';

const { wrapper: Wrapper } = getMDXComponents()

const baseFilePath = "../_projects/"

export async function generateMetadata({ params }: { params: { slug: string; }; }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const { metadata } = await import(baseFilePath + slug + ".mdx");

        return {
            title: metadata.title,
        };
    } catch {
        return {
            title: "Not Found",
        };
    }
}

const ProjectPage: FC<{
    params: Promise<{slug: string}>
}> = async ({ params }) => {
    const { slug } = await params;
    try {
        const { default: MDXContent } = await import(baseFilePath + slug + ".mdx");

        return (
            <Wrapper>
                <MDXContent />
            </Wrapper>
        );
    } catch {
        notFound();
    }
};

export default ProjectPage;
