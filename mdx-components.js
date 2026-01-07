import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components';

const defaultComponents = getNextraComponents({
    wrapper({ children }) {
        return (
            <>
                <div className="p-5 mb-auto">{children}</div>
            </>
        );
    }
});

export const useMDXComponents = components => ({
    ...defaultComponents,
    ...components
});