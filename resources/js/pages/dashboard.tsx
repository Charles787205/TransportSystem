import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import {
    FileText,
    Truck,
    Users,
    UserCheck,
    Building2,
    ArrowUpRight,
} from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as RechartsTooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { dashboard } from '@/routes';

interface DashboardProps {
    metrics: {
        plans: number;
        dispatches: number;
        vendors: number;
        drivers: number;
        vehicles: number;
        clients: number;
    };
    statusBreakdown: { name: string; value: number }[];
    dispatchesByDestination: { destination: string; count: number }[];
    dispatchesByBU: { name: string; value: number }[];
    recentDispatches: {
        id: number;
        dispatch_date: string;
        vehicle: string;
        driver: string;
        destination: string;
        business_unit: string;
        status: string;
    }[];
}

const COLORS = ['#6366f1', '#3b82f6', '#10b981', '#f43f5e', '#a855f7', '#f59e0b'];

export default function Dashboard({
    metrics,
    dispatchesByDestination,
    dispatchesByBU,
    recentDispatches,
}: DashboardProps) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex flex-col gap-6 p-6">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard</h1>
                    <p className="text-sm text-slate-500">Real-time overview of the transport system metrics and operations</p>
                </div>

                {/* Metric Cards Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                    <Card className="shadow-xs border border-slate-100 bg-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-slate-500">Plans</CardTitle>
                            <FileText className="h-4 w-4 text-indigo-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">{metrics?.plans ?? 0}</div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-xs border border-slate-100 bg-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-slate-500">Dispatches</CardTitle>
                            <Truck className="h-4 w-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">{metrics?.dispatches ?? 0}</div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-xs border border-slate-100 bg-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-slate-500">Vendors</CardTitle>
                            <Building2 className="h-4 w-4 text-emerald-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">{metrics?.vendors ?? 0}</div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-xs border border-slate-100 bg-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-slate-500">Vehicles</CardTitle>
                            <Truck className="h-4 w-4 text-rose-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">{metrics?.vehicles ?? 0}</div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-xs border border-slate-100 bg-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-slate-500">Drivers</CardTitle>
                            <UserCheck className="h-4 w-4 text-violet-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">{metrics?.drivers ?? 0}</div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-xs border border-slate-100 bg-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-slate-500">Clients</CardTitle>
                            <Users className="h-4 w-4 text-amber-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">{metrics?.clients ?? 0}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts section */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Destination Bar Chart */}
                    <Card className="lg:col-span-2 border border-slate-100 bg-white shadow-xs">
                        <CardHeader>
                            <CardTitle className="text-sm font-semibold text-slate-900">Top Destinations</CardTitle>
                            <CardDescription className="text-xs">Trips scheduled by destination</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[280px]">
                            {dispatchesByDestination && dispatchesByDestination.length > 0 ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={dispatchesByDestination} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                        <XAxis dataKey="destination" tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                        <YAxis tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                        <RechartsTooltip cursor={{ fill: '#f8fafc' }} />
                                        <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={35} />
                                    </BarChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className="flex h-full items-center justify-center text-sm text-slate-400">No destination data available.</div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Dispatches by Business Unit */}
                    <Card className="border border-slate-100 bg-white shadow-xs">
                        <CardHeader>
                            <CardTitle className="text-sm font-semibold text-slate-900">Dispatches by BU</CardTitle>
                            <CardDescription className="text-xs">Distribution across business units</CardDescription>
                        </CardHeader>
                        <CardContent className="flex h-[280px] flex-col justify-between">
                            {dispatchesByBU && dispatchesByBU.length > 0 ? (
                                <>
                                    <div className="h-[180px] w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={dispatchesByBU}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={45}
                                                    outerRadius={70}
                                                    paddingAngle={3}
                                                    dataKey="value"
                                                >
                                                    {dispatchesByBU.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                                <RechartsTooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        {dispatchesByBU.map((entry, index) => (
                                            <div key={entry.name} className="flex items-center gap-1.5">
                                                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                                <span className="truncate text-slate-600 font-medium">{entry.name} ({entry.value})</span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="flex h-full items-center justify-center text-sm text-slate-400">No business unit data available.</div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Dispatches table */}
                <Card className="border border-slate-100 bg-white shadow-xs">
                    <CardHeader className="flex flex-row items-center justify-between pb-3">
                        <div>
                            <CardTitle className="text-sm font-semibold text-slate-900">Recent Dispatches</CardTitle>
                            <CardDescription className="text-xs">The latest trips dispatched in the system</CardDescription>
                        </div>
                        <Button variant="outline" size="sm" asChild className="text-xs gap-1">
                            <Link href="/dispatch-operations">
                                View all dispatches
                                <ArrowUpRight className="h-3 w-3" />
                            </Link>
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        {recentDispatches && recentDispatches.length > 0 ? (
                            <Table>
                                <TableHeader className="bg-slate-50">
                                    <TableRow>
                                        <TableHead className="text-xs uppercase text-slate-500 font-semibold pl-6">Vehicle</TableHead>
                                        <TableHead className="text-xs uppercase text-slate-500 font-semibold">Driver</TableHead>
                                        <TableHead className="text-xs uppercase text-slate-500 font-semibold">Business Unit</TableHead>
                                        <TableHead className="text-xs uppercase text-slate-500 font-semibold">Destination</TableHead>
                                        <TableHead className="text-xs uppercase text-slate-500 font-semibold">Date</TableHead>
                                        <TableHead className="text-xs uppercase text-slate-500 font-semibold pr-6">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {recentDispatches.map((dispatch) => (
                                        <TableRow key={dispatch.id} className="hover:bg-slate-50 border-slate-100">
                                            <TableCell className="font-semibold text-slate-900 pl-6">{dispatch.vehicle}</TableCell>
                                            <TableCell className="text-slate-600">{dispatch.driver}</TableCell>
                                            <TableCell className="text-slate-600">{dispatch.business_unit}</TableCell>
                                            <TableCell className="text-slate-600">{dispatch.destination}</TableCell>
                                            <TableCell className="text-slate-600">{dispatch.dispatch_date}</TableCell>
                                            <TableCell className="pr-6">
                                                <Badge
                                                    variant="secondary"
                                                    className={`capitalize font-medium text-xs border-transparent ${
                                                        dispatch.status === 'delivered'
                                                            ? 'bg-emerald-50 text-emerald-700'
                                                            : dispatch.status === 'cancelled' || dispatch.status === 'foul trip'
                                                            ? 'bg-rose-50 text-rose-700'
                                                            : 'bg-blue-50 text-blue-700'
                                                    }`}
                                                >
                                                    {dispatch.status}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            <div className="py-10 text-center text-sm text-slate-400">No dispatches recorded yet.</div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
