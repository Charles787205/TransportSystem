import {
    Gauge,
    MapPin,
    Calendar,
    Clock,
    Package,
    RotateCcw,
    FileText,
} from 'lucide-react';
import TripRemarkSection from '@/components/dispatchoperation/trip-remark-section';
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

type LocationOption = {
    id: number;
    name: string;
    touchpoint?: string;
    type?: string;
};

type ViewTripLegModalProps = {
    tripLeg: (TripLegData & { remarks?: any[] }) | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    clientAllowedCargoUnits?: string[] | null;
    locations?: LocationOption[];
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
    locations = [],
}: ViewTripLegModalProps) {
    if (!tripLeg) return null;

    const drops = tripLeg.drops ?? [];
    const cargoes = tripLeg.cargoes ?? [];
    const remarks = (tripLeg as any).remarks ?? [];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
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
                    {/* Route Details & Origin Timestamps */}
                    <div className="rounded-lg border bg-emerald-50/50 p-3.5 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                            <MapPin className="h-4 w-4 text-emerald-600" />
                            Origin: {tripLeg.originLocation?.name ?? '—'}
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-700 bg-white p-2.5 rounded border">
                            <div>
                                <div className="text-[11px] text-muted-foreground">Arrival Time</div>
                                <div className="font-medium">{formatTime((tripLeg as any).originArrivedTime)}</div>
                            </div>
                            <div>
                                <div className="text-[11px] text-muted-foreground">Start Loading</div>
                                <div className="font-medium">{formatTime((tripLeg as any).originStartLoadingTime)}</div>
                            </div>
                            <div>
                                <div className="text-[11px] text-muted-foreground">End Loading</div>
                                <div className="font-medium">{formatTime((tripLeg as any).originEndLoadingTime)}</div>
                            </div>
                            <div>
                                <div className="text-[11px] text-muted-foreground">Departure Time</div>
                                <div className="font-medium">{formatTime(tripLeg.departureTime)}</div>
                            </div>
                        </div>
                    </div>

                    {/* Destination Details & Timestamps */}
                    <div className="rounded-lg border bg-blue-50/50 p-3.5 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-blue-800 uppercase tracking-wider">
                            <MapPin className="h-4 w-4 text-blue-600" />
                            Destination: {tripLeg.destinationLocation?.name ?? '—'}
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-700 bg-white p-2.5 rounded border">
                            <div>
                                <div className="text-[11px] text-muted-foreground">Arrival Time</div>
                                <div className="font-medium">{formatTime((tripLeg as any).destinationArrivedTime ?? tripLeg.arrivedTime)}</div>
                            </div>
                            <div>
                                <div className="text-[11px] text-muted-foreground">Start Unloading</div>
                                <div className="font-medium">{formatTime((tripLeg as any).destinationStartUnloadingTime)}</div>
                            </div>
                            <div>
                                <div className="text-[11px] text-muted-foreground">End Unloading</div>
                                <div className="font-medium">{formatTime((tripLeg as any).destinationEndUnloadingTime)}</div>
                            </div>
                            <div>
                                <div className="text-[11px] text-muted-foreground">Completion / Departed</div>
                                <div className="font-medium">{formatTime((tripLeg as any).destinationDepartedTime ?? tripLeg.endTime)}</div>
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

                    {/* Odometer */}
                    <div className="rounded-lg border bg-white p-3 space-y-1.5">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                            <Gauge className="h-3.5 w-3.5" /> Odometer
                        </div>
                        <div className="text-xs text-slate-700 flex gap-6">
                            <div><span className="text-muted-foreground">Start:</span> {formatOdometer(tripLeg.odometerStart)}</div>
                            <div><span className="text-muted-foreground">End:</span> {formatOdometer(tripLeg.odometerEnd)}</div>
                        </div>
                    </div>

                    {/* Transport Remarks & Trip Logs */}
                    <TripRemarkSection
                        tripLegId={tripLeg.id}
                        remarks={remarks}
                        locations={locations}
                    />

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
