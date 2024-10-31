interface PageProps {
    params: {
        locale: string
    }
}

interface LayoutProps extends React.PropsWithChildren, PageProps { }

interface KeyValueObject {
    [key: string]: string | KeyValueObject
}

export type {
    LayoutProps,
    KeyValueObject,
    PageProps,
}