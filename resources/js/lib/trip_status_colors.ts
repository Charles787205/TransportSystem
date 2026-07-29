import type { TripStatus } from '@/generated/DispatchOperation/TripStatus';

export const TRIP_STATUS_COLORS: Record<TripStatus, string> = {
    pending: 'bg-gray-100 text-gray-800 border-gray-200',
    'intransit to origin': 'bg-blue-100 text-blue-800 border-blue-200',
    'waiting at parking': 'bg-amber-100 text-amber-800 border-amber-200',
    'ongoing loading': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'in transit to destination': 'bg-blue-100 text-blue-800 border-blue-200',
    'waiting for unloading': 'bg-amber-100 text-amber-800 border-amber-200',
    'waiting for soc': 'bg-amber-100 text-amber-800 border-amber-200',
    'ongoing unloading': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    delivered: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'foul trip': 'bg-rose-100 text-rose-800 border-rose-200',
    cancelled: 'bg-stone-100 text-stone-800 border-stone-200',
};
