import { Head, Link, router } from '@inertiajs/react';
import {
    FileText,
    Truck,
    Users,
    UserCheck,
    Building2,
    ArrowUpRight,
    Filter,
    RotateCcw,
} from 'lucide-react';
import { useState } from 'react';
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
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import type { DashboardResponseData } from '@/generated/Dashboard';
import { dashboard } from '@/routes';

const COLORS = [
    '#6366f1',
    '#3b82f6',
    '#10b981',
    '#f43f5e',
    '#a855f7',
    '#f59e0b',
];

export default function Dashboard({
    metrics,
    topDestinations = [],
    dispatchesByClient = [],
    recentDispatches = [],
    filters = {
        datePreset: 'today',
        dateFrom: null,
        dateTo: null,
        originLocationId: null,
        destinationLocationId: null,
        clientId: null,
    },
    locations = [],
    clients = [],
}: DashboardResponseData) {
    const todayStr = new Date().toISOString().split('T')[0];
    const [datePreset, setDatePreset] = useState(filters.datePreset ?? 'today');
    const [dateFrom, setDateFrom] = useState(filters.dateFrom ?? todayStr);
    const [dateTo, setDateTo] = useState(filters.dateTo ?? todayStr);
    const [originLocationId, setOriginLocationId] = useState(
        filters.originLocationId ?? 'all',
    );
    const [destinationLocationId, setDestinationLocationId] = useState(
        filters.destinationLocationId ?? 'all',
    );
    const [clientId, setClientId] = useState(filters.clientId ?? 'all');

    const handlePresetChange = (preset: string) => {
        setDatePreset(preset);
        const todayStr = new Date().toISOString().split('T')[0];

        if (preset === 'today') {
            setDateFrom(todayStr);
            setDateTo(todayStr);
        } else if (preset === 'week') {
            const weekAgo = new Date();
            weekAgo.setDate(weekAgo.getDate() - 7);
            setDateFrom(weekAgo.toISOString().split('T')[0]);
            setDateTo(todayStr);
        } else if (preset === 'month') {
            const monthAgo = new Date();
            monthAgo.setMonth(monthAgo.getMonth() - 1);
            setDateFrom(monthAgo.toISOString().split('T')[0]);
            setDateTo(todayStr);
        } else if (preset === 'all') {
            setDateFrom('');
            setDateTo('');
        }
    };

    const handleApplyFilters = () => {
        const queryParams: Record<string, string> = {};

        if (datePreset && datePreset !== 'all') {
            queryParams.date_preset = datePreset;
        }

        if (dateFrom) {
            queryParams.date_from = dateFrom;
        }

        if (dateTo) {
            queryParams.date_to = dateTo;
        }

        if (originLocationId && originLocationId !== 'all') {
            queryParams.origin_location_id = originLocationId;
        }

        if (destinationLocationId && destinationLocationId !== 'all') {
            queryParams.destination_location_id = destinationLocationId;
        }

        if (clientId && clientId !== 'all') {
            queryParams.client_id = clientId;
        }

        router.get('/dashboard', queryParams, {
            preserveState: true,
            replace: true,
        });
    };

    const handleResetFilters = () => {
        setDatePreset('all');
        setDateFrom('');
        setDateTo('');
        setOriginLocationId('all');
        setDestinationLocationId('all');
        setClientId('all');
        router.get('/dashboard', {}, { preserveState: true, replace: true });
    };

    return (
        <>
            <Head title="Dashboard" />
            <div className="flex flex-col gap-6 p-6">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Dashboard
                    </h1>
                    <p className="text-sm text-slate-500">
                        Real-time overview of transport operations, metrics, and
                        filter analytics
                    </p>
                </div>

                {/* Compact Filter Control Card */}
                <Card className="border border-slate-100 bg-white p-3 shadow-xs">
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-1.5 border-r border-slate-200 pr-2 text-xs font-semibold text-slate-800">
                            <Filter className="h-3.5 w-3.5 text-blue-800" />{' '}
                            Filters
                        </div>

                        {/* Date Range Preset */}
                        <div className="w-36">
                            <Select
                                value={datePreset}
                                onValueChange={handlePresetChange}
                            >
                                <SelectTrigger className="h-8 text-xs">
                                    <SelectValue placeholder="Date Range" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Dates
                                    </SelectItem>
                                    <SelectItem value="today">Today</SelectItem>
                                    <SelectItem value="week">1 Week</SelectItem>
                                    <SelectItem value="month">
                                        1 Month
                                    </SelectItem>
                                    <SelectItem value="custom">
                                        Custom
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Custom Date Inputs (shown only if custom selected) */}
                        {datePreset === 'custom' && (
                            <div className="flex items-center gap-1.5">
                                <Input
                                    type="date"
                                    value={dateFrom}
                                    onChange={(e) =>
                                        setDateFrom(e.target.value)
                                    }
                                    className="h-8 w-[145px] px-1.5 text-xs"
                                />
                                <span className="text-xs text-slate-400">
                                    to
                                </span>
                                <Input
                                    type="date"
                                    value={dateTo}
                                    onChange={(e) => setDateTo(e.target.value)}
                                    className="h-8 w-[145px] px-1.5 text-xs"
                                />
                            </div>
                        )}

                        {/* Origin Location */}
                        <div className="w-40">
                            <Select
                                value={originLocationId}
                                onValueChange={setOriginLocationId}
                            >
                                <SelectTrigger className="h-8 text-xs">
                                    <SelectValue placeholder="All Origins" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Origins
                                    </SelectItem>
                                    {locations.map((loc) => (
                                        <SelectItem
                                            key={loc.id}
                                            value={String(loc.id)}
                                        >
                                            {loc.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Destination Location */}
                        <div className="w-40">
                            <Select
                                value={destinationLocationId}
                                onValueChange={setDestinationLocationId}
                            >
                                <SelectTrigger className="h-8 text-xs">
                                    <SelectValue placeholder="All Destinations" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Destinations
                                    </SelectItem>
                                    {locations.map((loc) => (
                                        <SelectItem
                                            key={loc.id}
                                            value={String(loc.id)}
                                        >
                                            {loc.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Client Filter */}
                        <div className="w-40">
                            <Select
                                value={clientId}
                                onValueChange={setClientId}
                            >
                                <SelectTrigger className="h-8 text-xs">
                                    <SelectValue placeholder="All Clients" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Clients
                                    </SelectItem>
                                    {clients.map((c) => (
                                        <SelectItem
                                            key={c.id}
                                            value={String(c.id)}
                                        >
                                            {c.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Actions */}
                        <div className="ml-auto flex items-center gap-1.5">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleResetFilters}
                                className="h-8 px-2.5 text-xs"
                            >
                                <RotateCcw className="mr-1 h-3.5 w-3.5" /> Reset
                            </Button>
                            <Button
                                size="sm"
                                onClick={handleApplyFilters}
                                className="h-8 bg-blue-800 px-3 text-xs text-white hover:bg-blue-900"
                            >
                                Apply
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Metric Cards Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                    <Card className="border border-slate-100 bg-white shadow-xs">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                Plans
                            </CardTitle>
                            <FileText className="h-4 w-4 text-indigo-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">
                                {metrics?.plans ?? 0}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-100 bg-white shadow-xs">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                Dispatches
                            </CardTitle>
                            <Truck className="h-4 w-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">
                                {metrics?.dispatches ?? 0}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-100 bg-white shadow-xs">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                Vendors
                            </CardTitle>
                            <Building2 className="h-4 w-4 text-emerald-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">
                                {metrics?.vendors ?? 0}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-100 bg-white shadow-xs">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                Vehicles
                            </CardTitle>
                            <Truck className="h-4 w-4 text-rose-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">
                                {metrics?.vehicles ?? 0}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-100 bg-white shadow-xs">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                Drivers
                            </CardTitle>
                            <UserCheck className="h-4 w-4 text-violet-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">
                                {metrics?.drivers ?? 0}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-100 bg-white shadow-xs">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                Clients
                            </CardTitle>
                            <Users className="h-4 w-4 text-amber-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">
                                {metrics?.clients ?? 0}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts section */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Top Destinations Chart */}
                    <Card className="border border-slate-100 bg-white shadow-xs lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="text-sm font-semibold text-slate-900">
                                Top Destinations
                            </CardTitle>
                            <CardDescription className="text-xs">
                                Trips scheduled by destination location
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="h-[280px]">
                            {topDestinations && topDestinations.length > 0 ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={topDestinations}
                                        margin={{
                                            top: 10,
                                            right: 10,
                                            left: -20,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            vertical={false}
                                            stroke="#f1f5f9"
                                        />
                                        <XAxis
                                            dataKey="destination"
                                            tickLine={false}
                                            axisLine={false}
                                            tick={{
                                                fill: '#64748b',
                                                fontSize: 12,
                                            }}
                                        />
                                        <YAxis
                                            tickLine={false}
                                            axisLine={false}
                                            tick={{
                                                fill: '#64748b',
                                                fontSize: 12,
                                            }}
                                        />
                                        <RechartsTooltip
                                            cursor={{ fill: '#f8fafc' }}
                                        />
                                        <Bar
                                            dataKey="count"
                                            fill="#1e40af"
                                            radius={[4, 4, 0, 0]}
                                            barSize={35}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className="flex h-full items-center justify-center text-sm text-slate-400">
                                    No destination data available.
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Dispatches by Client */}
                    <Card className="border border-slate-100 bg-white shadow-xs">
                        <CardHeader>
                            <CardTitle className="text-sm font-semibold text-slate-900">
                                Dispatches by Client
                            </CardTitle>
                            <CardDescription className="text-xs">
                                Distribution across clients
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex h-[280px] flex-col justify-between">
                            {dispatchesByClient &&
                            dispatchesByClient.length > 0 ? (
                                <>
                                    <div className="h-[180px] w-full">
                                        <ResponsiveContainer
                                            width="100%"
                                            height="100%"
                                        >
                                            <PieChart>
                                                <Pie
                                                    data={dispatchesByClient}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={45}
                                                    outerRadius={70}
                                                    paddingAngle={3}
                                                    dataKey="value"
                                                >
                                                    {dispatchesByClient.map(
                                                        (entry, index) => (
                                                            <Cell
                                                                key={`cell-${index}`}
                                                                fill={
                                                                    COLORS[
                                                                        index %
                                                                            COLORS.length
                                                                    ]
                                                                }
                                                            />
                                                        ),
                                                    )}
                                                </Pie>
                                                <RechartsTooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        {dispatchesByClient.map(
                                            (entry, index) => (
                                                <div
                                                    key={entry.name}
                                                    className="flex items-center gap-1.5"
                                                >
                                                    <span
                                                        className="h-2 w-2 rounded-full"
                                                        style={{
                                                            backgroundColor:
                                                                COLORS[
                                                                    index %
                                                                        COLORS.length
                                                                ],
                                                        }}
                                                    />
                                                    <span className="truncate font-medium text-slate-600">
                                                        {entry.name} (
                                                        {entry.value})
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="flex h-full items-center justify-center text-sm text-slate-400">
                                    No client breakdown data available.
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Dispatches Table */}
                <Card className="border border-slate-100 bg-white shadow-xs">
                    <CardHeader className="flex flex-row items-center justify-between pb-3">
                        <div>
                            <CardTitle className="text-sm font-semibold text-slate-900">
                                Recent Dispatches
                            </CardTitle>
                            <CardDescription className="text-xs">
                                The latest trips dispatched in the system
                            </CardDescription>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="gap-1 text-xs"
                        >
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
                                        <TableHead className="pl-6 text-xs font-semibold text-slate-500 uppercase">
                                            Vehicle
                                        </TableHead>
                                        <TableHead className="text-xs font-semibold text-slate-500 uppercase">
                                            Driver
                                        </TableHead>
                                        <TableHead className="text-xs font-semibold text-slate-500 uppercase">
                                            Client
                                        </TableHead>
                                        <TableHead className="text-xs font-semibold text-slate-500 uppercase">
                                            Origin
                                        </TableHead>
                                        <TableHead className="text-xs font-semibold text-slate-500 uppercase">
                                            Destination
                                        </TableHead>
                                        <TableHead className="text-xs font-semibold text-slate-500 uppercase">
                                            Date
                                        </TableHead>
                                        <TableHead className="pr-6 text-xs font-semibold text-slate-500 uppercase">
                                            Status
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {recentDispatches.map((dispatch) => (
                                        <TableRow
                                            key={dispatch.id}
                                            className="border-slate-100 hover:bg-slate-50"
                                        >
                                            <TableCell className="pl-6 font-semibold text-slate-900">
                                                {dispatch.vehicle}
                                            </TableCell>
                                            <TableCell className="text-slate-600">
                                                {dispatch.driver}
                                            </TableCell>
                                            <TableCell className="text-slate-600">
                                                {dispatch.client}
                                            </TableCell>
                                            <TableCell className="text-slate-600">
                                                {dispatch.origin}
                                            </TableCell>
                                            <TableCell className="text-slate-600">
                                                {dispatch.destination}
                                            </TableCell>
                                            <TableCell className="text-slate-600">
                                                {dispatch.dispatchDate}
                                            </TableCell>
                                            <TableCell className="pr-6">
                                                <Badge
                                                    variant="secondary"
                                                    className={`border-transparent text-xs font-medium capitalize ${
                                                        dispatch.status ===
                                                        'delivered'
                                                            ? 'bg-emerald-50 text-emerald-700'
                                                            : dispatch.status ===
                                                                    'cancelled' ||
                                                                dispatch.status ===
                                                                    'foul trip'
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
                            <div className="py-10 text-center text-sm text-slate-400">
                                No dispatches recorded matching the selected
                                filters.
                            </div>
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
