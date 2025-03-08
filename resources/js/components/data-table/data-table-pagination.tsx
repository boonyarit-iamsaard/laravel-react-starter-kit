import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

export type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
};

export type DataTablePaginationProps = {
    links: PaginationLink[];
};

export function DataTablePagination({ links }: DataTablePaginationProps) {
    if (!links || links.length === 0) {
        return null;
    }

    return (
        <Pagination className="mt-4">
            <PaginationContent>
                {links.map((link) => {
                    /**
                     * Create a unique key based on the label and url
                     */
                    const linkKey = `${link.label}-${link.active ? 'active' : 'inactive'}-${link.url ?? 'no-url'}`;

                    /**
                     * Previous link
                     */
                    if (link.label.includes('&laquo;')) {
                        return (
                            <PaginationItem key={linkKey}>
                                {link.url ? (
                                    <PaginationPrevious href={link.url} />
                                ) : (
                                    <PaginationPrevious aria-disabled="true" className="pointer-events-none opacity-50" />
                                )}
                            </PaginationItem>
                        );
                    }

                    /**
                     * Next link
                     */
                    if (link.label.includes('&raquo;')) {
                        return (
                            <PaginationItem key={linkKey}>
                                {link.url ? (
                                    <PaginationNext href={link.url} />
                                ) : (
                                    <PaginationNext aria-disabled="true" className="pointer-events-none opacity-50" />
                                )}
                            </PaginationItem>
                        );
                    }

                    /**
                     * Number links
                     */
                    return (
                        <PaginationItem key={linkKey}>
                            {link.url ? (
                                <PaginationLink href={link.url} isActive={link.active}>
                                    {link.label}
                                </PaginationLink>
                            ) : (
                                <PaginationLink aria-disabled="true" isActive={link.active} className="pointer-events-none opacity-50">
                                    {link.label}
                                </PaginationLink>
                            )}
                        </PaginationItem>
                    );
                })}
            </PaginationContent>
        </Pagination>
    );
}
