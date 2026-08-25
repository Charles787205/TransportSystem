import { Form } from '@inertiajs/react';
import { format } from 'date-fns';
import { CalendarIcon, Plus } from 'lucide-react';
import { useState } from 'react';
import InputError from '../input-error';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger,
    DialogClose,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '../ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import { cn } from '@/lib/utils';
import { store as storePlan } from '@/routes/planning';

type OptionItem = {
    id: number;
    label: string;
    client_id?: number;
};

type CreatePlanModalProps = {
    clients?: OptionItem[];
    locations?: OptionItem[];
};

const CreatePlanModal = ({ clients = [], locations = [] }: CreatePlanModalProps) => {
    const [open, setOpen] = useState(false);
    const [selectedClientId, setSelectedClientId] = useState<string>('');
    const [selectedOriginId, setSelectedOriginId] = useState<string>('');
    const [selectedDestinationId, setSelectedDestinationId] = useState<string>('');
    const [dispatchDate, setDispatchDate] = useState<Date | undefined>();
    const [dateOpen, setDateOpen] = useState(false);

    const handleClientChange = (clientId: string) => {
        setSelectedClientId(clientId);
        setSelectedOriginId('');
        setSelectedDestinationId('');
    };

    const clientLocations = locations.filter((loc) => {
        if (!selectedClientId) return true;
        return String(loc.client_id) === String(selectedClientId);
    });

    const originOptions = clientLocations.filter((loc) => String(loc.id) !== selectedDestinationId);
    const destinationOptions = clientLocations.filter((loc) => String(loc.id) !== selectedOriginId);

    const resetForm = () => {
        setOpen(false);
        setSelectedClientId('');
        setSelectedOriginId('');
        setSelectedDestinationId('');
        setDispatchDate(undefined);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-blue-800 hover:bg-blue-900 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    New Plan
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Create Plan</DialogTitle>
                    <DialogDescription>
                        Set planned vehicle requirements per client route and date.
                    </DialogDescription>
                </DialogHeader>

                <Form
                    action={storePlan()}
                    onSuccess={resetForm}
                    resetOnSuccess
                    className="space-y-4"
                >
                    {({ errors, processing }) => (
                        <>
                            {/* Client select */}
                            <div className="grid gap-1.5" data-invalid={!!errors.client_id}>
                                <Label htmlFor="client_id">Client *</Label>
                                <Select
                                    name="client_id"
                                    value={selectedClientId}
                                    onValueChange={handleClientChange}
                                    required
                                >
                                    <SelectTrigger id="client_id" className="w-full">
                                        <SelectValue placeholder="Select client..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {clients.map((c) => (
                                            <SelectItem key={c.id} value={String(c.id)}>
                                                {c.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.client_id} />
                            </div>

                            {/* Origin Location select */}
                            <div className="grid gap-1.5" data-invalid={!!errors.origin_id}>
                                <Label htmlFor="origin_id">Origin Location *</Label>
                                <Select
                                    name="origin_id"
                                    value={selectedOriginId}
                                    onValueChange={setSelectedOriginId}
                                    disabled={!selectedClientId}
                                    required
                                >
                                    <SelectTrigger id="origin_id" className="w-full">
                                        <SelectValue
                                            placeholder={
                                                selectedClientId
                                                    ? 'Select origin location...'
                                                    : 'Select client first'
                                            }
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {originOptions.map((l) => (
                                            <SelectItem key={l.id} value={String(l.id)}>
                                                {l.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.origin_id} />
                            </div>

                            {/* Destination Location select */}
                            <div className="grid gap-1.5" data-invalid={!!errors.destination_id}>
                                <Label htmlFor="destination_id">Destination Location *</Label>
                                <Select
                                    name="destination_id"
                                    value={selectedDestinationId}
                                    onValueChange={setSelectedDestinationId}
                                    disabled={!selectedClientId}
                                    required
                                >
                                    <SelectTrigger id="destination_id" className="w-full">
                                        <SelectValue
                                            placeholder={
                                                selectedClientId
                                                    ? 'Select destination location...'
                                                    : 'Select client first'
                                            }
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {destinationOptions.map((l) => (
                                            <SelectItem key={l.id} value={String(l.id)}>
                                                {l.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.destination_id} />
                            </div>

                            {/* Number of vehicles */}
                            <div className="grid gap-1.5" data-invalid={!!errors.number_of_vehicles}>
                                <Label htmlFor="number_of_vehicles">Number of Vehicles *</Label>
                                <Input
                                    id="number_of_vehicles"
                                    name="number_of_vehicles"
                                    type="number"
                                    min={1}
                                    placeholder="e.g. 5"
                                    data-invalid={!!errors.number_of_vehicles}
                                    aria-invalid={!!errors.number_of_vehicles}
                                    required
                                />
                                <InputError message={errors.number_of_vehicles} />
                            </div>

                            {/* Dispatch date */}
                            <div className="grid gap-1.5" data-invalid={!!errors.dispatch_date}>
                                <Label htmlFor="dispatch_date">Dispatch Date *</Label>
                                <Popover open={dateOpen} onOpenChange={setDateOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            data-invalid={!!errors.dispatch_date}
                                            aria-invalid={!!errors.dispatch_date}
                                            className={cn(
                                                'w-full justify-start font-normal',
                                                !dispatchDate && 'text-muted-foreground'
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {dispatchDate ? format(dispatchDate, 'PPP') : 'Pick a date'}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={dispatchDate}
                                            onSelect={(date) => {
                                                setDispatchDate(date);
                                                setDateOpen(false);
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                                <input
                                    type="hidden"
                                    name="dispatch_date"
                                    value={dispatchDate ? format(dispatchDate, 'yyyy-MM-dd') : ''}
                                />
                                <InputError message={errors.dispatch_date} />
                            </div>

                            <DialogFooter className="mt-4">
                                <DialogClose asChild>
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </DialogClose>
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-blue-800 hover:bg-blue-900 text-white"
                                >
                                    {processing ? 'Creating...' : 'Create Plan'}
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default CreatePlanModal;