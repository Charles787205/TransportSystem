import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { Plus, Search, Mail, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import type { VendorWithVehicleCountData } from '@/generated/Vendor';
import { create } from '@/routes/vendor';
import { show } from '@/routes/vendor';
export default function VendorsPage({
    vendors,
}: {
    vendors: VendorWithVehicleCountData[];
}) {
    console.log(vendors);

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-900">
                        Vendors
                    </h1>
                    <p className="text-sm text-slate-500">
                        Manage transport vendors and their fleets
                    </p>
                </div>
                <Button asChild className="bg-blue-800 hover:bg-blue-900">
                    <Link href={create()}>
                        <Plus className="h-4 w-4" />
                        Add vendor
                    </Link>
                </Button>
            </div>

            <div className="relative max-w-sm">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input placeholder="Search vendors..." className="pl-9" />
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <p className="text-sm text-slate-500">Total vendors</p>
                    <p className="mt-1 text-2xl font-semibold text-slate-900">
                        {vendors.length}
                    </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <p className="text-sm text-slate-500">Active</p>
                    <p className="mt-1 text-2xl font-semibold text-slate-900">
                        {vendors.filter((v) => v.isActive).length}
                    </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <p className="text-sm text-slate-500">Total Vehicles</p>
                    <p className="mt-1 text-2xl font-semibold text-slate-900">
                        {vendors.reduce(
                            (sum, v) => sum + v.numberOfVehicles,
                            0,
                        )}
                    </p>
                </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-200 bg-gray-50 text-left text-xs font-medium tracking-wide text-slate-500 uppercase">
                            <th className="px-4 py-3">Vendor</th>
                            <th className="px-4 py-3">Contact</th>
                            <th className="px-4 py-3">Vehicles</th>
                            <th className="px-4 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors.map((vendor) => (
                            <tr
                                key={vendor.id}
                                id={`${vendor.id}`}
                                onClick={() => {
                                    router.visit(show(vendor.id));
                                    console.log("Clicked")
                                }}
                                className="cursor-pointer border-b border-gray-100 last:border-0 hover:bg-blue-100"
                            >
                                <td className="px-4 py-3 font-medium text-slate-900">
                                    {vendor.name}
                                </td>
                                <td className="px-4 py-3 text-slate-600">
                                    <div className="flex items-center gap-1.5">
                                        <Mail className="h-3.5 w-3.5 text-slate-400" />
                                        {vendor.email}
                                    </div>
                                    <div className="mt-0.5 flex items-center gap-1.5">
                                        <Phone className="h-3.5 w-3.5 text-slate-400" />
                                        {vendor.phoneNumber}
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-slate-600">
                                    {vendor.numberOfVehicles ?? 0}
                                </td>
                                <td className="px-4 py-3">
                                    <Badge
                                        variant={
                                            vendor.isActive
                                                ? 'default'
                                                : 'secondary'
                                        }
                                        className={
                                            vendor.isActive
                                                ? 'border-transparent bg-emerald-100 text-emerald-700'
                                                : 'border-transparent bg-slate-100 text-slate-500'
                                        }
                                    >
                                        {vendor.isActive
                                            ? 'Active'
                                            : 'Inactive'}
                                    </Badge>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
