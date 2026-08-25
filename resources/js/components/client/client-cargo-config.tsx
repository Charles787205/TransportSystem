import { useForm } from '@inertiajs/react';
import { Package, Scale, Box, Layers, Save } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import type { ClientData } from '@/generated/Client';

const CARGO_UNITS = [
    { id: 'per_parcel', label: 'Per Parcel', icon: Package, description: 'Track quantity by number of parcels' },
    { id: 'per_box', label: 'Per Box', icon: Box, description: 'Track quantity by box count' },
    { id: 'loose_items', label: 'Loose Items', icon: Layers, description: 'Track loose / unpacked items' },
    { id: 'by_weight', label: 'By Weight (kg)', icon: Scale, description: 'Track cargo weight in kilograms' },
];

export default function ClientCargoConfig({ client }: { client: ClientData }) {
    const initialUnits: string[] = client.allowedCargoUnits ?? ['per_parcel'];
    const [selectedUnits, setSelectedUnits] = useState<string[]>(initialUnits);

    const { setData, patch, processing } = useForm({
        allowed_cargo_units: initialUnits,
    });

    const handleToggle = (unitId: string) => {
        const updated = selectedUnits.includes(unitId)
            ? selectedUnits.filter((u) => u !== unitId)
            : [...selectedUnits, unitId];

        setSelectedUnits(updated);
        setData('allowed_cargo_units', updated);
    };

    const handleSave = () => {
        patch(`/clients/${client.id}/cargo-units`, {
            preserveScroll: true,
        });
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
                <div>
                    <CardTitle className="text-base font-semibold">Cargo & Parcel Calculation Config</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                        Select which cargo tracking units apply to this client for trip leg dispatches
                    </CardDescription>
                </div>
                <Button size="sm" onClick={handleSave} disabled={processing} className="bg-blue-800 hover:bg-blue-900 text-white">
                    <Save className="mr-1.5 h-3.5 w-3.5" />
                    {processing ? 'Saving...' : 'Save Configuration'}
                </Button>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {CARGO_UNITS.map((unit) => {
                        const Icon = unit.icon;
                        const isChecked = selectedUnits.includes(unit.id);

                        return (
                            <div
                                key={unit.id}
                                onClick={() => handleToggle(unit.id)}
                                className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition-all ${
                                    isChecked ? 'border-blue-800 bg-blue-50/40 ring-1 ring-blue-800' : 'bg-white hover:bg-slate-50'
                                }`}
                            >
                                <Checkbox
                                    checked={isChecked}
                                    onCheckedChange={() => handleToggle(unit.id)}
                                    className="mt-0.5"
                                />
                                <div className="space-y-1">
                                    <div className="flex items-center gap-1.5 text-sm font-medium text-slate-900">
                                        <Icon className="h-4 w-4 text-blue-800" />
                                        <span>{unit.label}</span>
                                    </div>
                                    <p className="text-xs text-slate-500">{unit.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
