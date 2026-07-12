import { Link } from '@inertiajs/react';
import { BookOpen, FolderGit2, LayoutGrid, Store, Users, NotebookPen, Network } from 'lucide-react';

import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { index as ClientIndex } from '@/routes/client';
import { index as DispatchOperationIndex } from '@/routes/dispatchoperation';
import { index as PlanningIndex } from '@/routes/planning';
import { index as VendorIndex } from '@/routes/vendor';
import type { NavItem } from '@/types';
const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Vendors',
        href: VendorIndex(),
        icon: Store,
    },
    {
        title: 'Client',
        href: ClientIndex(),
        icon: Users
    },
    {
        title: 'Planning',
        href: PlanningIndex(),
        icon: NotebookPen
    },
    {
        title: 'Dispatch',
        href: DispatchOperationIndex(),
        icon: Network
    }
]

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
