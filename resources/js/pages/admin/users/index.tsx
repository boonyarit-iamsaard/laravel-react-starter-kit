import type { PaginationLink } from '@/components/data-table';
import { DataTable } from '@/components/data-table';
import AdminLayout from '@/layouts/admin-layout';
import type { BreadcrumbItem, User } from '@/types';
import { Head } from '@inertiajs/react';
import type { ColumnDef } from '@tanstack/react-table';

type UsersPageProps = {
    users: {
        data: User[];
        links: PaginationLink[];
    };
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/admin/users',
    },
];

const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'created_at',
        header: 'Since',
    },
];

export default function Users({ users: { data, links } }: UsersPageProps) {
    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <DataTable data={data} columns={columns} links={links} />
            </div>
        </AdminLayout>
    );
}
