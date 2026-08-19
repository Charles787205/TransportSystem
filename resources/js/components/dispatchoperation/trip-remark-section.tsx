import { Form } from '@inertiajs/react';
import { MessageSquare, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

type LocationOption = {
    id: number;
    name: string;
    touchpoint?: string;
    type?: string;
};

type TripRemarkSectionProps = {
    tripLegId: number;
    remarks?: Array<{
        id: number;
        remark: string;
        createdAt?: string;
        created_at?: string;
        user?: { name?: string };
        location?: { name?: string };
    }>;
    locations?: LocationOption[];
};

export default function TripRemarkSection({
    tripLegId,
    remarks = [],
    locations = [],
}: TripRemarkSectionProps) {
    return (
        <div className="rounded-lg border bg-white p-3.5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                <MessageSquare className="h-4 w-4 text-blue-600" />
                Transport Remarks & Trip Status Logs
            </div>

            {/* Quick remark submission form */}
            <Form
                action="/trip-remarks"
                method="post"
                resetOnSuccess
                className="flex flex-col sm:flex-row gap-2 items-end bg-slate-50 p-2.5 rounded-md border"
            >
                {({ processing }) => (
                    <>
                        <input type="hidden" name="trip_leg_id" value={tripLegId} />

                        <div className="flex-1 space-y-1 w-full">
                            <Label htmlFor={`remark-text-${tripLegId}`} className="text-[11px] text-muted-foreground">
                                Add Status / Location Remark
                            </Label>
                            <Input
                                id={`remark-text-${tripLegId}`}
                                name="remark"
                                placeholder="e.g. Driver arrived at destination / port, queued for loading..."
                                className="h-8 text-xs bg-white"
                                required
                            />
                        </div>

                        {locations.length > 0 && (
                            <div className="w-full sm:w-44 space-y-1">
                                <Label htmlFor={`remark-loc-${tripLegId}`} className="text-[11px] text-muted-foreground">
                                    Location (Optional)
                                </Label>
                                <Select name="location_id">
                                    <SelectTrigger id={`remark-loc-${tripLegId}`} className="h-8 text-xs bg-white">
                                        <SelectValue placeholder="Select location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {locations.map((loc) => (
                                            <SelectItem key={loc.id} value={String(loc.id)} className="text-xs">
                                                {loc.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        )}

                        <Button type="submit" size="sm" className="h-8 text-xs gap-1.5 px-3" disabled={processing}>
                            {processing ? (
                                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            ) : (
                                <>
                                    <Send className="h-3 w-3" />
                                    Post Log
                                </>
                            )}
                        </Button>
                    </>
                )}
            </Form>

            {/* Remarks timeline */}
            {remarks.length === 0 ? (
                <p className="text-xs text-muted-foreground italic py-1">No trip remarks recorded yet.</p>
            ) : (
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {remarks.map((r) => {
                        const dateStr = r.created_at || r.createdAt;
                        const formattedTime = dateStr
                            ? new Date(dateStr).toLocaleString('en-PH', {
                                  hour: 'numeric',
                                  minute: '2-digit',
                                  month: 'short',
                                  day: 'numeric',
                              })
                            : '';

                        return (
                            <div key={r.id} className="text-xs border-l-2 border-blue-500 pl-3 py-1 bg-slate-50/50 rounded-r">
                                <div className="flex items-center justify-between font-medium text-slate-800">
                                    <span>{r.remark}</span>
                                    <span className="text-[10px] text-muted-foreground">{formattedTime}</span>
                                </div>
                                <div className="text-[11px] text-muted-foreground mt-0.5 flex gap-2">
                                    {r.location?.name && (
                                        <span>Location: <strong className="text-slate-700">{r.location.name}</strong></span>
                                    )}
                                    {r.user?.name && <span>Logged by: {r.user.name}</span>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
