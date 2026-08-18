import {
    Gauge,
    MapPin,
    Calendar,
    Clock,
    Package,
    RotateCcw,
    FileText,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import type { TripLegData } from '@/generated/DispatchOperation';

type ViewTripLegModalProps = {
    tripLeg: TripLegData | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    clientAllowedCargoUnits?: string[] | null;
};

const formatTime = (value: string | null | undefined) => {
    if (!value) return '—';
    const [hours, minutes] = value.split(':');
    const date = new Date();
    date.setHours(Number(hours), Number(minutes));
    return date.toLocaleTimeString('en-PH', {
        hour: 'numeric',
        minute: '2-digit',
    });
};

const formatOdometer = (value: number | null | undefined) => {
    if (value === null || value === undefined) return '—';
    return `${value.toLocaleString()} km`;
};

export default function ViewTripLegModal({
    tripLeg,
    open,
    onOpenChange,
    clientAllowedCargoUnits,
}: ViewTripLegModalProps) {
    if (!tripLeg) return null;

    const drops = tripLeg.drops ?? [];
    const cargoes = tripLeg.cargoes ?? [];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Gauge className="h-5 w-5 text-blue-800" />
                            <DialogTitle className="text-lg font-semibold">
                                Trip Leg #{tripLeg.tripSequence} Details
                            </DialogTitle>
                        </div>
                        <Badge variant="outline" className="capitalize">
                            {tripLeg.status ?? 'Pending'}
                        </Badge>
                    </div>
                    <DialogDescription>
                        Linehaul Trip No: <span className="font-mono font-semibold text-slate-800">{tripLeg.linehaulTripNo}</span>
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-2">
                    {/* Route Details */}
                    <div className="rounded-lg border bg-slate-50 p-3.5 space-y-2">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Route Info</div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-emerald-600 mt-0.5" />
                                <div>
                                    <div className="text-xs text-muted-foreground">Origin Location</div>
                                    <div className="font-medium">{tripLeg.originLocation?.name ?? '—'}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-red-600 mt-0.5" />
                                <div>
                                    <div className="text-xs text-muted-foreground">Destination Location</div>
                                    <div className="font-medium">{tripLeg.destinationLocation?.name ?? '—'}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cargo Breakdown */}
                    <div className="rounded-lg border bg-white p-3.5 space-y-2">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <Package className="h-3.5 w-3.5 text-blue-800" />
                            Cargo Details
                        </div>
                        {cargoes.length > 0 ? (
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                {cargoes.map((c) => (
                                    <div key={c.id} className="flex justify-between border-b pb-1">
                                        <span className="text-muted-foreground capitalize">{c.cargoType.replace('_', ' ')}:</span>
                                        <span className="font-semibold">{c.quantity}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-sm">
                                <span className="text-muted-foreground">Total Parcels: </span>
                                <span className="font-semibold">{tripLeg.totalParcel ?? '—'}</span>
                            </div>
                        )}
                    </div>

                    {/* Odometer & Timings */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-lg border bg-white p-3 space-y-1.5">
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                                <Gauge className="h-3.5 w-3.5" /> Odometer
                            </div>
                            <div className="text-xs text-slate-700">
                                <div><span className="text-muted-foreground">Start:</span> {formatOdometer(tripLeg.odometerStart)}</div>
                                <div><span className="text-muted-foreground">End:</span> {formatOdometer(tripLeg.odometerEnd)}</div>
                            </div>
                        </div>

                        <div className="rounded-lg border bg-white p-3 space-y-1.5">
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" /> Timings
                            </div>
                            <div className="text-xs text-slate-700">
                                <div><span className="text-muted-foreground">Departure:</span> {formatTime(tripLeg.departureTime)}</div>
                                <div><span className="text-muted-foreground">Arrived:</span> {formatTime(tripLeg.arrivedTime)}</div>
                                <div><span className="text-muted-foreground">End Time:</span> {formatTime(tripLeg.endTime)}</div>
                            </div>
                        </div>
                    </div>

                    {/* Intermediate Drops */}
                    <div className="rounded-lg border bg-slate-50 p-3 space-y-2">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            Intermediate Drop Stops ({drops.length})
                        </div>
                        {drops.length === 0 ? (
                            <p className="text-xs text-muted-foreground">No drops recorded for this leg.</p>
                        ) : (
                            <div className="space-y-1.5">
                                {drops.map((drop, idx) => {
                                    const isFilled = Boolean(drop.arrivedTime && drop.departedTime);
                                    return (
                                        <div key={drop.id} className="flex items-center justify-between bg-white border p-2 rounded text-xs">
                                            <div>
                                                <span className="font-semibold">Drop #{idx + 1}:</span> {drop.location?.name ?? `Loc #${drop.locationId}`}
                                                {drop.parcelCount ? ` (${drop.parcelCount} pcls)` : ''}
                                                {drop.boxCount ? ` (${drop.boxCount} boxes)` : ''}
                                                {drop.weightKg ? ` (${drop.weightKg} kg)` : ''}
                                            </div>
                                            <Badge
                                                variant="outline"
                                                className={`text-[10px] py-0 px-1.5 ${
                                                    isFilled
                                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                                                        : 'bg-amber-50 text-amber-700 border-amber-300'
                                                }`}
                                            >
                                                {isFilled ? 'Completed' : 'Pending'}
                                            </Badge>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="outline">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
