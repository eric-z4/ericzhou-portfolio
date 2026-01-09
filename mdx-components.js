import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components';

const defaultComponents = getNextraComponents({
    wrapper({ children }) {
        return (
            <>
                <div className="w-full">{children}</div>
            </>
        );
    }
});

export const useMDXComponents = components => ({
    ...defaultComponents,
    ...components
});