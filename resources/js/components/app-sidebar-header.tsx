import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    return (
        <header className="flex h-16 shrink-0 items-center gap-3 border-b border-slate-200/70 bg-white/80 px-6 backdrop-blur-sm transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <SidebarTrigger className="-ml-1 rounded-md text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-800" />
            <div className="h-5 w-px bg-slate-200" />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
        </header>
    );
}
